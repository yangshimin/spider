# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymongo
from .items import *


class MongoPipeline(object):
    def __init__(self, mongo_url, mongo_db):
        self.mongo_url = mongo_url
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_url=crawler.settings.get('MONGO_URL'),
            mongo_db=crawler.settings.get('MONGO_DB')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_url)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        # self.db['user'].update({'url_token': item['url_token']}, {'$set': item}, True)
        # return item
        if isinstance(item, UserItem):
            self.db['user'].update({'url_token': item['url_token']}, {'$set': item}, True)
        elif isinstance(item, UserPostItem):
            self.db['post'].update({'id': item['id']}, {'$set': item}, True)
        elif isinstance(item, UserZhuanLanItem):
            self.db['zhuanlan'].update({'id': item['id']}, {'$set': item}, True)
        elif isinstance(item, UserAnswersItem):
            self.db['answer'].update({'id': item['id']}, {'$set': item}, True)
        elif isinstance(item, UserQuestionItem):
            self.db['question'].update({'id': item['id']}, {'$set': item}, True)
        return item
