from scrapy import cmdline
# from zhihuSpider.zhihuSpider.spiders import zhihuCrawl


def run():
    cmdline.execute('scrapy crawl zhihuCrawl'.split())


if __name__ == '__main__':
    run()
