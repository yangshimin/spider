from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import *
import time
from db import CookiesRedisClient, AccountRedisClient
from multiprocessing import Process
from yundama_requests import ydm
from PIL import Image


browser = webdriver.Chrome()
browser.maximize_window()
wait = WebDriverWait(browser, 20)

crc = CookiesRedisClient()
arc = AccountRedisClient()


def get_account_lists():
    account_redis_list = arc.keys()
    for item in account_redis_list:
        item = item.decode('utf-8')
        account = item.split(':')[-1]
        password = arc.get(account).decode('utf-8').strip()
        # print(account, password)
        yield (account, password)


def login_sina(item):
    cookies = {}
    url = 'https://login.sina.com.cn/signup/signin.php'
    browser.get(url)
    username = wait.until(
        EC.presence_of_element_located((By.ID, 'username'))
    )
    password = wait.until(
        EC.presence_of_element_located((By.ID, 'password'))
    )
    submit = wait.until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '.btn_mod .W_btn_a'))
    )
    username.send_keys(item[0])
    password.send_keys(item[1])
    submit.click()
    time.sleep(1)
    if browser.title != '我的新浪_个人中心_新浪网':
        print('出现验证码，开始识别验证码')

        # 以账号名来命名每个验证码的名字
        web_path = '{}.png'.format(item[0])
        code_path = 'code_{}.jpg'.format(item[0])
        browser.get_screenshot_as_file(web_path)
        identifying_code(web_path, item[0])
        time.sleep(3)
        code = ydm(code_path)
        print(code)

        code_input = wait.until(
            EC.presence_of_element_located((By.ID, 'door'))
        )
        code_input.send_keys(code)
        code_sublimt = wait.until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="vForm"]/div[2]/div/ul/li[7]/div[1]/input'))
        )
        code_sublimt.click()
        time.sleep(5)

    menu = wait.until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '.ac-login-cnt '))
    )
    print(menu)
    time.sleep(3)
    ActionChains(browser).click(menu).perform()
    time.sleep(5)
    cookies = browser.get_cookies()
    print(cookies)
    for cookie in cookies:
        cookies[cookie['name']] = cookie['value']
    print(cookies)
    browser.quit()


def identifying_code(f, account):
    im = Image.open(f)
    box = (678, 299, 778, 350)
    im.crop(box).save('code_{}.jpg'.format(account), 'jpeg')


if __name__ == '__main__':
    # for item in get_account_lists():
    #     p = Process(target=login_sina, args=(item,))
    #     p.start()
    #     p.join()

    login_sina((17123060427, 'shaozong460'))