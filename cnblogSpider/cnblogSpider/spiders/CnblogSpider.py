# -*- coding: utf-8 -*-
import scrapy
from scrapy.crawler import CrawlerProcess
from ..items import CnblogspiderItem
# from bs4 import BeautifulSoup


class CnblogspiderSpider(scrapy.Spider):
    name = 'CnblogSpider'
    allowed_domains = ['cnblogs.com']
    start_urls = ['http://www.cnblogs.com/qiyeboy/default.html?page=1']

    def parse(self, response):
        papers = response.css('.day')
        for paper in papers:
            time_ele = paper.css('.dayTitle a::text').extract()[0]
            title = paper.css('.postTitle a::text').extract()[0]
            content = paper.css('.postCon .c_b_p_desc::text').extract()[0]
            url = paper.css('.postTitle a::attr(href)').extract()[0]
            # print(content.encode('gbk', 'ignore').decode('gbk', 'ignore'))
            item = CnblogspiderItem(url=url, title=title, time=time_ele, content=content)
            # item的用法类似于dict
            request = scrapy.Request(url=url, callback=self.parse_body)
            # 将item暂存
            request.meta['item'] = item
            yield request
        next_page = response.css('.topicListFooter a').re(r'<a href="(\S*)">下一页</a>')
        if next_page:
            #print(next_page)
            yield scrapy.Request(url=next_page[0], callback=self.parse)

    def parse_body(self, response):
        item = response.meta['item']
        body = response.css('.postBody')
        item['image_urls'] = body.css('img::attr(src)').extract()
        yield item

if __name__ == '__main__':
    process = CrawlerProcess()
    process.crawl(CnblogspiderSpider)
    process.start()