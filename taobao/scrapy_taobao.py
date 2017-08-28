import re
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pyquery import PyQuery as pq
from config import *
import pymongo


client = pymongo.MongoClient(MONGO_URL)
db = client[MONGO_DB]


browser = webdriver.PhantomJS(service_args=SERVICE_ARGS)
browser.set_window_size(1200, 900)
wait = WebDriverWait(browser, 10)


def search():
    try:
        browser.get('https://www.taobao.com')
        search_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '#q'))
            )
        submit = wait.until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, '#J_TSearchForm > div.search-button > button'))
            )
        search_input.send_keys(KeyWord)
        submit.click()
        total_page = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, '#mainsrp-pager > div > div > div > div.total'))
        )
        get_products()
        return total_page.text
    except TimeoutException:
        return search()


def next_page(page_number):
    try:
        page_input = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '#mainsrp-pager > div > div > div > div.form > input'))
                )
        submit = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR,
                                                '#mainsrp-pager > div > div > div > div.form > span.btn.J_Submit'))
        )
        # 先清空输入框里的值，然后填入新值
        page_input.clear()
        page_input.send_keys(page_number)
        submit.click()
        # 在点击确定按钮之后要保证页面已经加载成功了并且与分页导航栏中高亮显示的一致才继续输入下一页页码
        wait.until(
            EC.text_to_be_present_in_element((By.CSS_SELECTOR,
                                              '#mainsrp-pager > div > div > div > ul > li.item.active > span'),
                                             str(page_number)))
        get_products()
    except TimeoutException:
        next_page(page_number)


def get_products():
    wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#mainsrp-itemlist .items .item')))
    html = browser.page_source
    doc = pq(html)
    # 利用items()将所有商品相关信息的html生成一个生成器
    items = doc('#mainsrp-itemlist .items .item').items()
    for item in items:
        products = {
            'img': item.find('.pic .img').attr('src'),
            'price': item.find('.price').text(),
            'deal_amount': item.find('.deal-cnt').text()[:-3],
            'title': item.find('.title').text(),
            'shop': item.find('.shopname').text(),
            'locate': item.find('.location').text()
        }
        save_to_mongo(products)


def save_to_mongo(res):
    try:
        if db[MONGO_TABLE].insert(res):
            print('存储到MonGoDb成功', res)
    except Exception:
        print('存储到MonGoDb失败')


def main():
    total_page = search()
    total_page = int(re.compile('(\d+)').search(total_page).group(1))
    for i in range(1, total_page + 1):
        next_page(i)
    browser.close()

if __name__ == '__main__':
    main()
