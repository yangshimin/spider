# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class UserItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    id = scrapy.Field()
    name = scrapy.Field()
    avatar_url = scrapy.Field()
    headline = scrapy.Field()
    url = scrapy.Field()
    url_token = scrapy.Field()
    type = scrapy.Field()
    badge = scrapy.Field()
    answer_count = scrapy.Field()
    articles_count = scrapy.Field()
    follwer_count = scrapy.Field()
    gender = scrapy.Field()


class UserPostItem(scrapy.Item):
    id = scrapy.Field()
    title = scrapy.Field()
    update_time = scrapy.Field()
    url = scrapy.Field()
    voteup_count = scrapy.Field()
    comment_count = scrapy.Field()


class UserZhuanLanItem(scrapy.Item):
    title = scrapy.Field()
    articles_count = scrapy.Field()
    updated = scrapy.Field()
    followers = scrapy.Field()
    id = scrapy.Field()


class UserQuestionItem(scrapy.Item):
    title = scrapy.Field()
    answer_count = scrapy.Field()
    created = scrapy.Field()
    follower_count = scrapy.Field()
    id = scrapy.Field()
    url = scrapy.Field()


class UserAnswersItem(scrapy.Item):
    comment_count = scrapy.Field()
    content = scrapy.Field()
    created_time = scrapy.Field()
    id = scrapy.Field()
    url = scrapy.Field()

# 分享的item不写了  道理同上
class UserShareItem(scrapy.Item):
    pass
