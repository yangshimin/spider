# -*- coding: utf-8 -*-
import scrapy
from ..settings import DATA
import json

class SinacrawlSpider(scrapy.Spider):
    name = 'sinaCrawl'
    allowed_domains = ['weibo.cn']
    follwers = 'https://m.weibo.cn/api/container/getSecond?containerid={uid}_-_FOLLOWERS'
    prefix_follwers_uid = '100505'
    prefix_article_uid = '230413'


    def start_requests(self):
        return [scrapy.FormRequest(url='https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F', meta={'cookiejar': 1}, callback=self.login)]

    def login(self, response):
        return [scrapy.FormRequest(url='https://passport.weibo.cn/sso/login', formdata=DATA, callback=self.after_login, meta={'cookiejar': response.meta['cookiejar']})]

    def after_login(self, response):
        res = self.json_loads(response)
        self.uid = self.prefix_follwers_uid + res['data']['uid']
        print(self.uid)
        print(response.headers)
        yield scrapy.Request(url=self.follwers.format(uid=self.uid), callback=self.parse_followers,
                       meta={'cookiejar': response.meta['cookiejar']})

    def request_info(self, response):
        print(response.text)
        #yield scrapy.Request(url=self.follwers.format(uid=self.uid), callback=self.parse_followers,
                       # meta={'cookiejar': response.meta['cookiejar']})

    def parse_weibo(self, response):
        pass


    def parse_followers(self, response):
        print(response)
        # res = self.json_loads(response)
        # print(res)


    def json_loads(self, response):
        return json.loads(response.text)