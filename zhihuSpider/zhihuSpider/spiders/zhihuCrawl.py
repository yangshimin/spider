# -*- coding: utf-8 -*-
import json
import time
import scrapy
from scrapy import Request
from ..items import UserItem, UserAnswersItem, UserPostItem, UserZhuanLanItem, UserQuestionItem
from w3lib.html import remove_tags
import re
# from ..scrapy_redis.spiders import RedisSpider
from scrapy_redis.spiders import RedisSpider


class ZhihucrawlSpider(RedisSpider):
    name = 'zhihuCrawl'
    allowed_domains = ['www.zhihu.com']
    start_urls = ['http://www.zhihu.com/']
    redis_key = 'zhihuCrawl:start_urls'

    start_user = 'excited-vczh'

    # 从大v轮子哥开始，因为他的粉丝和关注她的人比较多
    user_query = 'allow_message,is_followed,is_following,is_org,is_blocking,employments,answer_count,follower_count,articles_count,gender,badge[?(type=best_answerer)].topics'
    user_url = 'https://www.zhihu.com/api/v4/members/{user}?include={user_include}'

    # 轮子哥关注的人
    follows_url = 'https://www.zhihu.com/api/v4/members/{user}/followees?include={follows_query}&offset={offset}&limit={limit}'
    follows_query = 'data[*].answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics'

    # 关注轮子哥的人
    fowwers_url = 'http://www.zhihu.com/api/v4/members/{user}/followers?include={fowwers_query}&limit={limit}&offset={offset}'
    fowwers_query = 'data[*].answer_count,articles_count,gender,follower_count,is_followed,is_following,badge[?(type=best_answerer)].topics'

    # 每个用户发表的文章
    post_url = 'https://www.zhihu.com/api/v4/members/{user}/articles?include={post_query}&offset=0&limit=20&sort_by=created'
    post_query = 'data%5B*%5D.comment_count%2Ccan_comment%2Ccomment_permission%2Cadmin_closed_comment%2Ccontent%2Cvoteup_count%2Ccreated%2Cupdated%2Cupvoted_followees%2Cvoting%2Creview_info%3Bdata%5B*%5D.author.badge%5B%3F(type%3Dbest_answerer)%5D.topics'

    # 每个用户的提问
    question_url = 'https://www.zhihu.com/api/v4/members/{user}/questions?include={question_query}&offset=0&limit=20'
    question_query = 'data%5B*%5D.created%2Canswer_count%2Cfollower_count%2Cauthor%2Cadmin_closed_comment'

    # 每个用户的回答
    answers_url = 'https://www.zhihu.com/api/v4/members/{user}/answers?include={answer_query}&offset=0&limit=20&sort_by=created'
    answers_query = 'data%5B*%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Cmark_infos%2Ccreated_time%2Cupdated_time%2Creview_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cvoting%2Cis_author%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B*%5D.author.badge%5B%3F(type%3Dbest_answerer)%5D.topics'

    # 每个用户的专栏
    zhuanlan_url = 'http://www.zhihu.com/api/v4/members/{user}/column-contributions?include={zhuanlan_query}&offset=0&limit=20'
    zhuanlan_query = 'data%5B*%5D.column.title%2Cintro%2Cfollowers%2Carticles_count'

    # 每个用户的分享
    # share_url = 'https://www.zhihu.com/api/v4/members/{user}/pins?offset=0&limit=20&includes={share_query}'
    # share_query = 'data%5B*%5D.upvoted_followees%2Cadmin_closed_comment'

    def start_requests(self):
        yield Request(self.user_url.format(user=self.start_user, user_include=self.user_query), callback=self.parse_user)
        yield Request(self.follows_url.format(user=self.start_user, follows_query=self.follows_query, offset='0', limit='20'), callback=self.parse_follows)
        yield Request(self.fowwers_url.format(user=self.start_user, fowwers_query=self.fowwers_query, offset='0', limit='20'), callback=self.parse_fowwers)

    def parse_user(self, response):
        # 除了从result 中提取user基本信息外，还主要是提取出 url_token
        result = json.loads(response.text)
        item = UserItem()
        # item.fields属性会返回我们定义的每一个fields
        for field in item.fields:
            if field in result.keys():
                item[field] = result.get(field)
        yield item

        yield Request(self.zhuanlan_url.format(zhuanlan_query=self.zhuanlan_query, user=result.get('url_token')), callback=self.parse_zhuanlan)

        yield Request(self.answers_url.format(answer_query=self.answers_query, user=result.get('url_token')), callback=self.parse_answer)

        yield Request(self.question_url.format(question_query=self.question_query, user=result.get('url_token')), callback=self.parse_question)

        yield Request(self.post_url.format(post_query=self.post_query, user=result.get('url_token')), callback=self.parse_post)

        yield Request(self.follows_url.format(user=result.get('url_token'), follows_query=self.follows_query, offset='0', limit='20'), callback=self.parse_follows)


    def parse_follows(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                yield Request(self.user_url.format(user=res.get('url_token'), user_include=self.user_query), callback=self.parse_user)

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_follows)

    def parse_fowwers(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                yield Request(self.user_url.format(user=res.get('url_token'), user_include=self.user_query), callback=self.parse_user)

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_fowwers)


    def parse_post(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                post_item = UserPostItem()

                post_item['id'] = res['id']
                post_item['title'] = res['title']
                post_item['update_time'] = self.timestamp_to_localtime(res['updated'])
                post_item['url'] = res['url']
                post_item['voteup_count'] = res['voteup_count']
                post_item['comment_count'] = res['comment_count']

                yield post_item

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_post)

    def parse_question(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                question_item = UserQuestionItem()

                question_item['title'] = res['title']
                question_item['answer_count'] = res['answer_count']
                question_item['created'] = self.timestamp_to_localtime(res['created'])
                question_item['follower_count'] = res['follower_count']
                question_item['id'] = res['id']
                question_item['url'] = res['url']

                yield question_item

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_question)

    def parse_answer(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                answer_item = UserAnswersItem()

                answer_item['comment_count'] = res['comment_count']
                # 要处理标签
                answer_item['content'] = ['content']
                answer_item['created_time'] = self.timestamp_to_localtime(res['created_time'])
                answer_item['id'] = res['id']
                answer_item['url'] = res['url']

                yield answer_item

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_answer)

    # 这里只是提取了专栏的一些基本信息，其实还可以根据专栏的id进一步提取专栏的list信息和正文内容
    def parse_zhuanlan(self, response):
        result = json.loads(response.text)

        if 'data' in result.keys():
            for res in result['data']:
                zhuanlan_item = UserZhuanLanItem()

                zhuanlan_item['title'] = res['column']['title']
                zhuanlan_item['articles_count'] = res['column']['articles_count']
                zhuanlan_item['updated'] = self.timestamp_to_localtime(res['column']['updated'])
                zhuanlan_item['followers'] = res['column']['followers']
                zhuanlan_item['id'] = res['column']['id']

                yield zhuanlan_item

        if 'paging' in result.keys() and result.get('paging').get('is_end') == False:
            next_page = result.get('paging').get('next')
            yield Request(next_page, self.parse_zhuanlan)


    def timestamp_to_localtime(self, timestamp):
        localtime = time.localtime(timestamp)
        return time.strftime('%Y-%m-%d %H:%M:%S', localtime)

    def remove_tag(self, value):
        content = remove_tags(value)
        return re.sub(r'[\t\r\n\s]', '', content)