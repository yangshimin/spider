# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class TiebaItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    title_url = scrapy.Field()
    followes_count = scrapy.Field()
    article_count = scrapy.Field()
    title_author = scrapy.Field()
    title_author_url = scrapy.Field()
    reply_author = scrapy.Field()
    reply_author_url = scrapy.Field()
    reply_count = scrapy.Field()
    content = scrapy.Field()
    time = scrapy.Field()
    type = scrapy.Field()