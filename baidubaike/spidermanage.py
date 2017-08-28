# encoding=utf-8
from baidubaike.downloadurl import HtmlDownloader
from baidubaike.urlmanager import UrlManager
from baidubaike.htmlparse import HtmlParse
from baidubaike.dataoutput import DataOutPut


class SpiderManage(object):
    def __init__(self):
        self.htmldownload = HtmlDownloader()
        self.urlmanager = UrlManager()
        self.htmlparse = HtmlParse()
        self.dataoutput = DataOutPut()

    def crawl(self, root_url):
        self.urlmanager.add_new_url(root_url)
        while (self.urlmanager.has_new_url() and self.urlmanager.old_url_size() <= 100):
            try:
                url = self.urlmanager.get_new_url()
                html = self.htmldownload.download(url)
                new_urls, data = self.htmlparse.parse(url, html)
                self.urlmanager.add_new_urls(new_urls)
                self.dataoutput.store_data(data)
                print('已结抓取{num}个链接'.format(num=self.urlmanager.old_url_size()))
            except Exception as e:
                print(e.args)
        self.dataoutput.output_html()


if __name__ == '__main__':
    spidermanage = SpiderManage()
    spidermanage.crawl('https://baike.baidu.com/item/网络爬虫/5162711')
