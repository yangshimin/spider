from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from qunaeer.config import *
from bs4 import BeautifulSoup
import time
import urllib.parse
import datetime
import pymongo


browser = webdriver.Chrome()


class Spider(object):
    def __init__(self, url, mongo_url, mongo_db):
        client = pymongo.MongoClient(mongo_url)
        self.db = client[mongo_db]
        self.url = url

    def search_hotel(self):
        browser.get(self.url)
        try:
            tocity = browser.find_element_by_id('toCity')
            tocity.clear()
            tocity.send_keys(CITY)
            WebDriverWait(browser, 20).until(
                EC.presence_of_element_located((By.CLASS_NAME, 'illtow'))
            )
            # 在tocity这个输入框输入城市名后会弹出搜索相关城市结果，下面的city即选择了弹出的城市中第一个
            # 另外经过观察发现搜索不同的城市，搜索结果表格中的id字段值也不一样，所以不能通过id, xpath等包含id的选择方式来选中元素
            city = browser.find_element_by_class_name("illrow")
            city.click()
            todate = browser.find_element_by_id('fromDate')
            t = datetime.date.today().strftime('%Y-%m-%d')
            todate.clear()
            todate.send_keys(t)
            leavetime = datetime.date.today() + datetime.timedelta(days=1)
            leavetime = leavetime.strftime('%Y-%m-%d')
            fromdate = browser.find_element_by_id('toDate')
            fromdate.clear()
            fromdate.send_keys(leavetime)
            button = browser.find_element_by_class_name('search-button')
            button.click()
            total_page = WebDriverWait(browser, 20).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "#searchHotelPanel > div.b_tool.clr_after > div.pager.js_pager > div > ul > li:nth-child(9) > a"))
            )
            self.parse_page()
            return total_page.text
        except Exception as e:
            print(e.args)

    def get_next(self, page_number):
        try:
            # 去哪儿网的每页数据有30条，但最开始只加载15条，当滚动条滚动到一定位置时才会加载后面的15条数据
            js = 'window.scrollTo(0, document.body.scrollHeight);'
            browser.execute_script(js)
            # 等待后面的15条数据加载出来
            time.sleep(5)
            print(page_number)
            #self.parse_page()
            next_page = WebDriverWait(browser, 40).until(
                #EC.visibility_of(browser.find_element_by_css_selector(".item.next"))
                EC.presence_of_element_located((By.CSS_SELECTOR, '.item.next'))
            )
            next_page.click()
            # WebDriverWait(browser, 40).until(
            #     EC.text_to_be_present_in_element((By.CSS_SELECTOR, '.active.num'), str(page_number))
            # )
            time.sleep(10)
        except TimeoutException:
            print('元素未在规定时间内加载出来...')

    def parse_page(self):
        try:
            data = []
            WebDriverWait(browser, 20).until(
                EC.presence_of_element_located((By.ID, 'jxContentPanel'))
            )
            soup = BeautifulSoup(browser.page_source, 'html.parser')
            items = soup.find_all(class_='item_hotel_info')
            #print(len(items))
            for item in items:
                ele = item.find(class_='e_title')
                hotelname = ele.string
                hotelurl = urllib.parse.urljoin(self.url, ele['href'])
                price = item.find(class_='item_price').get_text()
                profile = item.find(class_='area_contair').get_text().strip()
                reviews = item.find_all(class_='review')
                for review in reviews:
                    data.append(review.get_text().strip())
                comment = ' '.join(data)
                data.clear()
                try:
                    device = item.find(class_='facily_cont').get_text().strip()
                except:
                    device = ' '
                res = {
                    'hotelname': hotelname,
                    'price': price,
                    'profile': profile,
                    'device': device,
                    'comment': comment,
                    'hotelurl': hotelurl,

                }
                self.save_to_mongo(res, MONGO_TABLE)
        except Exception as e:
            print(e.args)

    def save_to_mongo(self, res, MONGO_TABLE):
        try:
            self.db[MONGO_TABLE].insert(res)
            print('存储到mongodb成功')
        except Exception:
            print('存储到mongodb失败')


if __name__ == '__main__':
    url = 'http://hotel.qunar.com'
    spider = Spider(url, MONGO_URL, MONGO_DB)
    total_page = int(spider.search_hotel())
    print(type(total_page))
    print(total_page)
    for page in range(1, total_page + 1):
        spider.get_next(page)
    browser.close()
