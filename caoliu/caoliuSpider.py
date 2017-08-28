import re
import requests
import time
from bs4 import BeautifulSoup
import chardet
from selenium import webdriver
import pymysql
from multiprocessing import Process, Pool


# def get_page():
#     url = 'http://t66y.com/thread0806.php?fid=15&search=&page=1'
#     headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36',
#     }
#     proxies = {
#         'http': 'http://843113495@qq.com:843113495gh@160.16.209.102:2808/',
#         'https': 'https://843113495@qq.com:843113495gh@160.16.209.102:2808/'
#     }
#     response = requests.get(url, headers=headers, proxies=proxies)
#     if response.status_code == 200:
#         response.encoding = chardet.detect(response.text)['encoding']
#         print(response.content)

baseurl = 'http://t66y.com/'
# url = 'http://t66y.com/thread0806.php?fid=15&search=&page=1'

chrome_options = webdriver.ChromeOptions()
prefs = {"profile.managed_default_content_settings.images": 2}
chrome_options.add_experimental_option("prefs", prefs)
browser = webdriver.Chrome(chrome_options=chrome_options)

class Spider(object):
    def __init__(self, localhost, port, user, password, db):
        self.conn = pymysql.connect(host=localhost, port=port, user=user, passwd=password, db=db, charset="utf8")
        self.cur = self.conn.cursor()
        self.data_list = []

    def get_page(self, url, i):
        # i = url[-1]
        browser.get(url)
        html = browser.page_source
        soup = BeautifulSoup(html, 'lxml')
        eles = soup.select('.tal h3 a')[4:]
        # print(eles)
        for ele in eles:
            title = ele.string
            link = ele['href']
            index = eles.index(ele) + 1
            # print(title, link)
            try:
                browser.get(baseurl + link)
                subhtml = browser.page_source
                time.sleep(2)
                try:
                    downloadlink = re.findall('<a target="_blank".*onmouseover=.*href="(.*?)".*>.*</a>', subhtml)[0]
                    print('正在下载第{i}页第{index}条链接'.format(i=i, index=index))
                    data = (title, downloadlink)
                    self.data_list.append(data)
                    self.save_to_mysql(data)
                except:
                    print('下载第{i}页第{index}条链接时出错'.format(i=i, index=index))
            except:
                print('没有正确抓取到URL')

    def save_to_mysql(self, data):
        if len(self.data_list) >= 20:
            for data in self.data_list:
                print(data)
                self.cur.execute('insert into caoliu(title, url) values{data}'.format(data=data))
                spider.conn.commit()
            self.data_list.clear()


if __name__ == '__main__':
    spider = Spider('localhost', 3306, 'root', '843113495gh', 'test')
    # sub_url = 'http://t66y.com/thread0806.php?fid=15&search=&page='
    # url_list = [sub_url + str(i) for i in range(1, 300)]
    # print(url_list)
    # pool = Pool()
    # pool.map(spider.get_page, url_list)
    for i in range(1, 300):
        url = 'http://t66y.com/thread0806.php?fid=15&search=&page=' + str(i)
        spider.get_page(url, i)
    spider.conn.close()
    browser.quit()