# coding:utf-8
import time
import re
from shiguang.htmldownloader import HtmlDownloader
from shiguang.dataoutput import DataOutPut
from shiguang.htmlparse import HtmlParser


class Spider(object):
    def __init__(self):
        self.dataoutputer = DataOutPut()
        self.downloader = HtmlDownloader()
        self.htmlparser = HtmlParser()

    def crawl(self, root_url):
        response = self.downloader.download_page(root_url)
        urls = self.htmlparser.parse_url(response)
        for url in urls:
            if url is None:
                return None
            try:
                pattern = re.compile('.*/(\d+)/')
                id = pattern.findall(url)[0]
                t = time.strftime('%Y%m%d%H%M%S5808', time.localtime())
                ajax_url = 'http://service.library.mtime.com/Movie.api?Ajax_CallBack=true&Ajax_CallBackType=Mtime.Library.Services&Ajax_CallBackMethod=GetMovieOverviewRating&Ajax_CrossDomain=1&Ajax_RequestUrl={url}&t={time}&Ajax_CallBackArgument0={id}'.format(url=url, time=t, id=id)
                response_content = self.downloader.download_page(ajax_url)
                data = self.htmlparser.parse_page(response_content)
                self.dataoutputer.store_data(data)
            except Exception as e:
                print(e.args)
        self.dataoutputer.output_end()
        print('Crawl finish')


if __name__ == '__main__':
    spider = Spider()
    spider.crawl('http://theater.mtime.com/China_Sichuan_Province_Chengdu/')
