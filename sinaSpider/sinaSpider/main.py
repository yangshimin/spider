from scrapy import cmdline

def run():
    cmdline.execute('scrapy crawl sinaCrawl'.split())


if __name__ == '__main__':
    run()
