import requests
import json
import chardet
from config import HEADERS, DATA
from db import MongoClient, RedisClient


class WeiBoSpider(object):
    def __init__(self):
        self.url = 'https://passport.weibo.cn/sso/login'
        self.s = requests.Session()
        self.headers = HEADERS
        self.data = DATA
        self.followers_url = 'https://m.weibo.cn/api/container/getSecond?containerid={containerid}_-_FOLLOWERS&page={page}'
        self.weibo_url = 'https://m.weibo.cn/api/container/getIndex?containerid={containerid}_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={page}'
        self.mongoclient = MongoClient()
        self.redisclient = RedisClient()

    def get_uid(self):
        response = self.s.post(self.url, headers=self.headers, data=self.data)
        if response.status_code == 200:
            response.encoding = chardet.detect(response.content)['encoding']
            uid = response.json()['data']['uid']
        else:
            print('请求网页出错:', response.status_code)
        self.followers_containerid = '100505' + uid
        self.weibo_containerid = '230413' + uid

    def make_followers_kw(self, followers_page=1):
        followers_kw = (self.followers_containerid, followers_page)
        self.get_followers_page(followers_kw)

    def make_weibo_kw(self, weibo_page=1):
        weibo_kw = (self.weibo_containerid, weibo_page)
        self.get_followers_page(weibo_kw)

    def get_followers_page(self, kw):
        if kw[0].startswith('100505'):
            url = self.followers_url.format(containerid=kw[0], page=kw[1])
            info_list = self.s.get(url).json()
            self.parse_followers_info(info_list)
        else:
            url = self.weibo_url.format(containerid=kw[0], page=kw[1])
            info_list = self.s.get(url).json()
            self.parse_weibo_info(info_list)

    def parse_followers_info(self, followers_list):
        res = {}
        current_page = followers_list['cardlistInfo']['page']
        res['flag'] = followers_list['title']
        maxpage = followers_list['maxPage'] + 1
        followers = followers_list['cards']
        for follower in followers:
            user = follower['user']
            res['name'] = user['screen_name']
            res['id'] = user['id']
            res['profile_url'] = user['profile_url']
            res['weibo_count'] = user['statuses_count']
            res['verify_info'] = user.get('verified_reason')
            res['description'] = user['description']
            res['gender'] = '男' if user['gender'] == 'm' else '女'
            res['followers_count'] = user['followers_count']
            res['follow_count'] = user['follow_count']

            print(res)
            self.mongoclient.save_to_mongo(res)

        if current_page < maxpage:
            self.make_followers_kw(followers_page=current_page)

    def parse_weibo_info(self, weibo_list):
        res = {}
        current_page = weibo_list['cardlistInfo']['page']
        blog_total = weibo_list['cardlistInfo']['total']
        print(current_page)
        blog_list = weibo_list['cards']
        if current_page == 2:
            blogs = blog_list[1:]
        else:
            blogs = blog_list
        for blog in blogs:
            blog_info = blog['mblog']
            res['blog_content_url'] = blog['scheme']
            # 针对带评论转发和只转发两种状态
            res['blog_title'] = blog_info['retweeted_status']['page_info']['content1'] if blog_info.get('raw_text') and blog_info['retweeted_status'].get('page_info') else blog_info['text']
            res['is_privacy'] = blog_info['title']['text']
            res['attitudes_count'] = blog_info['attitudes_count']
            res['create_time'] = blog_info['created_at']
            res['comments_count'] = blog_info['comments_count']
            res['reads_count'] = blog_info['reads_count']
            res['source'] = blog_info['source']
            res['location'] = blog_info.get('page_info').get('page_title') if blog_info.get('page_info') else None

            print(res)
            self.mongoclient.save_to_mongo(res)

        if current_page and (current_page - 1) * 10 < blog_total:
            self.make_weibo_kw(weibo_page=current_page)


if __name__ == '__main__':
    # url = 'https://m.weibo.cn/'
    spider = WeiBoSpider()
    uid = spider.get_uid()
    spider.make_followers_kw()
    print('*'*10)
    spider.make_weibo_kw()
