# encoding: utf-8
import urllib.parse
from bs4 import BeautifulSoup
from baidubaike.downloadurl import HtmlDownloader


class HtmlParse(object):
    def parse(self, page_url, page_html):
        soup = BeautifulSoup(page_html, 'lxml')
        new_urls = self._get_new_urls(page_url, soup)
        new_data = self._get_new_data(page_url, soup)
        return new_urls, new_data

    def _get_new_urls(self, page_url, soup):
        new_urls = set()
        # select() 方法返回的是一个list
        links = soup.select('.lemma-summary .para')[0].find_all('a')
        for link in links:
            url = urllib.parse.urljoin(page_url, link['href'])
            new_urls.add(url)
        return new_urls

    def _get_new_data(self, page_url, soup):
        data = {}
        data['url'] = page_url
        title = soup.find(class_='lemmaWgt-lemmaTitle-title').find('h1').string
        data['title'] = title
        content = soup.find(class_='lemma-summary').get_text()
        data['content'] = content
        return data


# if __name__ == '__main__':
#     htmldownloader = HtmlDownloader()
#     htmlparse = HtmlParse()
#     url = 'https://baike.baidu.com/item/网络爬虫/5162711'
#     html = htmldownloader.download(url)
#     res = htmlparse.parse(url, html)
#     print(res)
