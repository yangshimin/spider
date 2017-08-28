# encoding: utf-8
from multiprocessing.managers import BaseManager
from fenbushi.htmldownloader import HtmlDownloader
from fenbushi.htmlparser import HtmlParser
import sys
sys.setrecursionlimit(1000000)

class SpiderWorker(object):
    def __init__(self):
        BaseManager.register('get_task_queue')
        BaseManager.register('get_result_queue')
        print('connect to server {add}'.format(add='127.0.0.1'))
        self.m = BaseManager(address=('127.0.0.1', 8001), authkey=b'baike')
        self.m.connect()
        self.task = self.m.get_task_queue()
        self.result = self.m.get_result_queue()

        self.downloader = HtmlDownloader()
        self.parser = HtmlParser()
        print('Init finsh')

    def crawl(self):
        while True:
            try:
                if not self.task.empty():
                    url = self.task.get()
                    if url == 'end':
                        print('控制节点通知爬虫节点停止工作')
                        self.result.put({'new_urls': 'end', 'data': 'end'})
                        return
                    print('爬虫节点正在解析: {url}'.format(url=url))
                    content = self.downloader.download(url)
                    new_urls, data = self.parser.parser(url, content)
                    self.result.put({'new_urls': new_urls, 'data': data})
            except EOFError as e:
                print('连接工作节点失败')
            except Exception as e:
                print(e)
                print('在抓取过程出现不明原因...')


if __name__ == '__main__':
    spider = SpiderWorker()
    spider.crawl()