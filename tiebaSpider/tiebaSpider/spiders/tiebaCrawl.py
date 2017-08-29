# -*- coding: utf-8 -*-
import scrapy
from ..items import TiebaItem
import re
import json


class TiebacrawlSpider(scrapy.Spider):
    name = 'tiebaCrawl'
    allowed_domains = ['tieba.baidu.com']
    start_urls = ['http://tieba.baidu.com/f?kw=%E6%88%90%E9%83%BD&ie=utf-8&pn=0']
    base_url = 'http://tieba.baidu.com'

    def parse(self, response):
        title_list = response.xpath('.//*[@id="thread_list"]//li[contains(@class, "j_thread_list")]')
        for pre_title in title_list:
            item = TiebaItem()
            item['title'] = pre_title.xpath('./div[1]/div[2]/div[1]/div[1]/a/text()').extract_first()
            item['title_url'] = self.base_url + pre_title.xpath('./div[1]/div[2]/div[1]/div[1]/a/@href').extract_first()
            item['reply_count'] = pre_title.xpath('./div[1]/div[1]/span/text()').extract_first()
            item['title_author'] = pre_title.xpath('./div/div[2]/div/div[2]/span[1]/span[1]/a/text()').extract_first()
            item['title_author_url'] = self.base_url + pre_title.xpath(
                './div/div[2]/div/div[2]/span[1]/span[1]/a/@href').extract_first()
            item['followes_count'] = self.remove_quote(
                response.xpath('.//*[@class="card_menNum"]/text()').extract_first())
            item['article_count'] = self.remove_quote(
                response.xpath('.//*[@class="card_infoNum"]/text()').extract_first())

            yield scrapy.Request(url=item['title_url'], meta={'item': item}, callback=self.parse_sub_page)

        next_page = response.xpath('.//*[contains(@class, "next pagination-item")]/@href').extract_first()
        if next_page:
            yield scrapy.Request(url='http:' + next_page, callback=self.parse)

    def parse_sub_page(self, response):
        reply_list = response.xpath('.//*[@id="j_p_postlist"]//div[contains(@class, "l_post j_l_post l_post_bright")]')

        # 每个div字段的data-field里包含了发帖人姓名、id、性别、发帖日期、发帖设备、评论数
        for reply in reply_list:
            item = response.meta['item']
            data_field = reply.xpath('./@data-field').extract_first()
            article_info = json.loads(data_field)

            item['reply_author'] = article_info['author']['user_name']
            item['reply_author_url'] = self.base_url + reply.xpath('.//ul/li[3]/a/@href').extract_first()

            # 用string(.)的方式取出所有文本内容
            content = reply.xpath('.//cc/div[1]')[0].xpath('string(.)').extract_first()
            item['content'] = self.remove_quote(content)
            item['time'] = article_info['content']['date']
            item['type'] = article_info['content']['open_type']

            yield item

        next_page = response.xpath(
            './/*/li[@class="l_pager pager_theme_5 pb_list_pager"]/a[text()="下一页"]/@href').extract_first()

        if next_page:
            yield scrapy.Request(url=self.base_url + next_page, meta={'item': response.meta['item']},
                                 callback=self.parse_sub_page)

    def remove_quote(self, content):
        return re.sub(r'[\s*|,]', '', content)
