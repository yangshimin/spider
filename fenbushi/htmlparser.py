# encoding: utf-8
import urllib.parse
from bs4 import BeautifulSoup


class HtmlParser(object):
    def parser(self, url, html):
        if url is None or html is None:
            return
        soup = BeautifulSoup(html, 'html.parser')
        new_urls = self._get_new_urls(url, soup)
        new_data = self._get_new_data(url, soup)
        return new_urls, new_data

    def _get_new_urls(self, url, html):
        new_urls = set()
        links = html.select('.lemma-summary .para')[0].find_all('a')
        for link in links:
            url = urllib.parse.urljoin(url, link['href'])
            new_urls.add(url)
        return new_urls

    def _get_new_data(self, url, html):
        data = {}
        if url is None or html is None:
            return
        title = html.find(class_='lemmaWgt-lemmaTitle-title').find('h1').string
        content = html.find(class_='lemma-summary').get_text()
        data['url'] = url
        data['title'] = title
        data['content'] = content
        # print(data)
        return data
