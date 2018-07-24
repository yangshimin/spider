import requests
import time
import json
import re
from lxml.html import etree
from urllib.parse import urljoin
from config import HEADERS, GEET_HEADERS
from selenium import webdriver


class BiLiBiLi(object):
    def __init__(self):
        url = 'https://passport.bilibili.com/login'
        self.browser = webdriver.Chrome()
        self.browser.get(url)
        print(self.browser.page_source)
        self.browser.quit()

    def get_gt_and_challenge(self):
        get_challenge_url = 'https://passport.bilibili.com/captcha/gc?cType=2&vcType=2&_={}'
        timestamp = time.time()
        res = requests.get(get_challenge_url.format(timestamp), headers=HEADERS)
        if res.status_code == 200:
            res_json = json.loads(res.text)
            challenge = res_json['data']['challenge']
            gt = res_json['data']['gt']
            return gt, challenge

    def get_img_and_bgimage(self, gt_and_challenge):
        info_url = 'https://api.geetest.com/get.php?gt={}&challenge={}&width=100%&product=float&offline=false' \
                   '&protocol=https://&voice=/static/js/voice.1.0.6.js&path=/static/js/geetest.6.0.9.js' \
                   '&type=slide&callback=geetest_1531929578515:formatted'
        url = info_url.format(gt_and_challenge[0], gt_and_challenge[1])
        res = requests.get(url, headers=GEET_HEADERS)
        if res.status_code == 200:
            info_pattern = re.search('(?<=\().*(?=\))', res.text)
            if info_pattern:
                info_json = json.loads(info_pattern.group())
                server = 'https://' + info_json['static_servers'][0]
                fullbg_url = urljoin(server, info_json['fullbg'].replace('jpg', 'webp'))
                bg_url = urljoin(server, info_json['bg'].replace('jpg', 'webp'))
                return fullbg_url, bg_url


if __name__ == '__main__':
    bili = BiLiBiLi()
    # gt_challenge = bili.get_gt_and_challenge()
    # bili.get_img_and_bgimage(gt_challenge)
