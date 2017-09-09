# -*- coding: utf-8 -*-
import scrapy
from .common import url_join
from ..items import Item


class Spider1024Spider(scrapy.Spider):
    name = 'spider1024'
    allowed_domains = ['t66y.com']
    base = 'http://t66y.com'
    start_urls = ['http://t66y.com/thread0806.php?fid=15/']

    def parse(self, response):
        page = response.xpath('.//*/div[@class="t"]/table[1]/tbody/tr[@class="tr2"]/following::*/h3/a/@href').extract()
        next_page = response.xpath('.//*/td[@valign="middle"]/div[@class="pages"][1]/a[text()="下一頁"]/@href').extract()
        if page:
            for url in page:
                yield scrapy.Request(url=url_join(self.base, url), callback=self.extract_link)

        if next_page:
            yield scrapy.Request(url=url_join(self.base, next_page[0]), callback=self.parse)

    def extract_link(self, response):
        url = response.xpath('.//*/a[contains(text(), "rmdown.com/link.php?hash=")]/@href').extract()
        name = response.xpath('.//*/h4/text()').extract()
        if url and name:
            item = Item()
            item['name'] = name[0][:-1]
            item['url'] = url[0]
            yield item
