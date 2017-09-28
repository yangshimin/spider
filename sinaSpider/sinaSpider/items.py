# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class WeiBoTextItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # type 类型表示是否为转发weibo
    type = scrapy.Field()
    title = scrapy.Field()
    upvote_num = scrapy.Field()

    # relay 表示微博是否被转发
    relay_num = scrapy.Field()
    comment_num = scrapy.Field()
    time = scrapy.Field()
    device = scrapy.Field()
    location = scrapy.Field()


class