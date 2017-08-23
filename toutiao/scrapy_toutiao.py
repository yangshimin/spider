import requests
import json
from urllib.parse import urlencode
from requests.exceptions import RequestException
from bs4 import BeautifulSoup
import re
import pymongo
from config import *
import os
from hashlib import md5
from multiprocessing import Pool

# 因为这里创建了一个多线程，所以用connect=False
client = pymongo.MongoClient(MONGO_URL, connect=False)
db = client[MONGO_DB]


def get_page_source(offset, keyword):
    data = {
        'offset': offset,
        'format': 'json',
        'keyword': keyword,
        'autoload': 'true',
        'count': '20',
        'cur_tab': 3
    }
    url = 'http://www.toutiao.com/search_content/?' + urlencode(data)
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        print('请求索引页错误...')
        return None


def parse_page_source(html):
    data = json.loads(html)
    if data and 'data' in data.keys():
        for item in data.get('data'):
            yield item.get('article_url')


def get_detail_page(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        print('请求详情页错误...')
        return None


def parse_detail_page(html, url):
    soup = BeautifulSoup(html, 'lxml')
    # css选择器方法select()返回的是一个列表
    title = soup.select('title')[0].get_text()
    pattern = re.compile('var gallery = (.*?);', re.S)
    res = re.search(pattern, html)
    if res:
        data = json.loads(res.group(1))
        if data and 'sub_images' in data.keys():
            images = data.get('sub_images')
            images_url = [item.get('url') for item in images]
            for url in images_url:
                dowload_image(url)
            return {
                'url': url,
                'title': title,
                'images_url_set': images_url
            }


def save_to_mongo(res):
    if db[MONGO_TABLE].insert(res):
        return True
    return False


def dowload_image(url):
    print('正在下载:', url)
    try:
        response = requests.get(url)
        if response.status_code == 200:
            save_image(response.content)
        return None
    except RequestException:
        print('下载图片出错...')
        return None


def save_image(content):
    file_path = '{0}/{1}.{2}'.format('头条图片', md5(content).hexdigest(), 'jpg')
    if not os.path.exists(file_path):
        with open(file_path, 'wb') as f:
            f.write(content)
            f.close()


def main(offset):
    html = get_page_source(offset, '街拍')
    for url in parse_page_source(html):
        html = get_detail_page(url)
        if html:
            # 不知道为什么这里有的链接返回的为None
            res = parse_detail_page(html, url)
            if res:
                save_to_mongo(res)


if __name__ == '__main__':
    pool = Pool()
    pool.map(main, [i * 20 for i in range(10)])
