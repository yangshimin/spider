from scrapy import cmdline


def run():
    cmdline.execute('scrapy crawl spider1024'.split())


if __name__ == '__main__':
    run()