# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql


class Spider1024Pipeline(object):
    def __init__(self, HOST, PORT, USER, PASSWROD, DB):
        self.conn = pymysql.connect(host=HOST, port=PORT, user=USER, passwd=PASSWROD, db=DB, charset='utf8')
        self.cursor = self.conn.cursor()

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            HOST=crawler.settings.get('HOST'),
            PORT=crawler.settings.get('PORT'),
            USER=crawler.settings.get('USER'),
            PASSWROD=crawler.settings.get('PASSWORD'),
            DB=crawler.settings.get('DB'),
        )

    def process_item(self, item, spider):
        if item['url']:
            data = (item['name'], item['url'])
            self.cursor.execute('insert into caoliu(name, url) values{data}'.format(data=data))
            self.conn.commit()
        return item
