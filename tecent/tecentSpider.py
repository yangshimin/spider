# encoding: utf-8
import requests
from bs4 import BeautifulSoup
import chardet
import pymongo
import datetime

class tecentSpider(object):
    def __init__(self, mongo_url, mongo_db):
        self.client = pymongo.MongoClient(host=mongo_url)
        self.db = self.client[mongo_db]
        self.container = []
        self.s = requests.session()
        self.base_url = 'http://hr.tencent.com/'

    def get(self, url):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36'
        }
        response = self.s.get(url, headers=headers)
        if response.status_code == 200:
            response.encoding = chardet.detect(response.content)['encoding']
        return response.text

    def parse_page(self, html):
        soup = BeautifulSoup(html, 'lxml')
        odd = soup.find_all('tr', class_='odd')
        even = soup.find_all('tr', class_='even')
        odd.extend(even)
        for item in odd:
            td = item.find('td')
            title = td.select('a')[0].string
            title_url = td.select('a')[0]['href']
            tds = td.find_next_siblings('td')
            type = tds[0].string
            num = tds[1].string
            position = tds[2].string
            time = tds[3].string
            content = self.get(self.base_url + title_url)
            res = self.parse_sub_page(content)
            res = {
                'title': title,
                'title_url': title_url,
                'type': type,
                'num': num,
                'position': position,
                'time': time,
                'gongzuozhize': res.get('gongzuozhize'),
                'gongzuoyaoqiu': res.get('gongzuoyaoqiu')
            }
            print(res)
            self.container.append(res)
            if len(self.container) >= 10:
                self.save_to_mongo()
        next_page_url = soup.select('.pagenav #next')
        print(next_page_url)
        if next_page_url:
            url = self.base_url + next_page_url[0].get('href')
            html = self.get(url)
            self.parse_page(html)
        else:
            if len(self.container) > 0:
                self.save_to_mongo()
            else:
                return

    def parse_sub_page(self, html):
        soup = BeautifulSoup(html, 'lxml')
        eles = soup.select('.squareli')
        gongzuozhize = eles[0].get_text()
        gongzuoyaoqiu = eles[1].get_text()
        res = {
            'gongzuozhize': gongzuozhize,
            'gongzuoyaoqiu': gongzuoyaoqiu
        }
        return res

    def save_to_mongo(self):
        for item in self.container:
            self.db['tecentzhaoping'].insert(item)
            self.container.remove(item)



if __name__ == '__main__':
    starttime = datetime.datetime.now()
    url = 'http://hr.tencent.com/position.php'
    spider = tecentSpider('localhost', 'tecent')
    html = spider.get(url)
    spider.parse_page(html)
    endtime = datetime.datetime.now()
    print('共花费了{time}'.format(time=(endtime-starttime).seconds / 60))
