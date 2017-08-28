import requests
import re
import json
from multiprocessing import Pool
from requests.exceptions import RequestException


def get_page_source(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        return None


def parse_page_source(page):
    pattern = re.compile('<dd>.*?board-index.*?>(\d+)</i>.*?'
                         + 'data-src="(.*?)".*?name"><a.*?>'
                         + '(.*?)</a>.*?star">(.*?)</p>.*?releasetime">(.*?)'
                         + '</p>.*?integer">(.*?)</i>.*?'
                         + 'fraction">(.*?)</i>', re.S)
    res = re.findall(pattern, page)
    for item in res:
        yield {
            'index': item[0],
            'img_link': item[1],
            'title': item[2],
            'actor': item[3].strip()[3:],
            'time': item[4].strip()[5:],
            'socre': item[5] + item[6]
        }


def write_to_file(text):
    with open('result.txt', 'a', encoding='utf-8') as f:
        f.write(json.dumps(text, ensure_ascii=False) + '\n')
        f.close()


def main(offset):
    url = 'https://maoyan.com/board/4?offset=' + str(offset)
    response = get_page_source(url)
    for item in parse_page_source(response):
        write_to_file(item)


if __name__ == '__main__':
    pool = Pool()
    pool.map(main, [i * 10 for i in range(10)])
