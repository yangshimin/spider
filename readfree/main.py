import requests
from datetime import datetime, timedelta
from lxml import etree
from urllib.parse import urljoin
from yundama import YDMHttp
from mail.mail_run import EMAIL
from mail.email_config import config
from readfreelog import logger

smtp_host = config['smtp_host']
smtp_user = config['smtp_user']
smtp_password = config['smtp_password']


class ReadFree(object):
    def __init__(self):
        self.url = 'http://readfree.me/accounts/login/?next=/'
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Host": "readfree.me",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
        }
        self.s = requests.Session()
        self.yundama = YDMHttp()
        self.verify_code_url = ''
        self.verify_code_id = ''
        self.captcha_id = ''
        self.result = ''

    def to_douban(self):
        t = self.s.get(self.url, headers=self.headers)
        selector = etree.HTML(t.text)
        douban_url = urljoin(self.url, selector.xpath(".//*/a[text()='豆瓣登录']/@href")[0])
        douban_response = self.s.get(douban_url)
        douban_selector = etree.HTML(douban_response.text)

        self.verify_code_url = douban_selector.xpath(".//*/img[@id='captcha_image']/@src")
        self.verify_code_id = douban_selector.xpath(".//*/input[@name='captcha-id']/@value")
        if self.verify_code_url and self.verify_code_id:
            verify_code_res = requests.get(self.verify_code_url[0])
            self.captcha_id = self.verify_code_id[0]
            with open('douban.png', 'wb') as f:
                f.write(verify_code_res.content)
        try:
            self.yundama.login()
            self.result = self.yundama.decode('douban.png')
        except Exception as e:
            logger.error('云打码出错, 不能登录或者识别验证码失败', exc_info=True)
        douban_form_state = douban_selector.xpath("substring-before(substring-after(.//*/form[@id='refuse_form']/@action, '?state='), '&')")
        if douban_form_state:
            douban_state = douban_form_state
            to_readfree_url = 'https://www.douban.com/service/auth2/auth?state=' + douban_state + '&redirect_uri=http://readfree.me/auth/douban/login/callback/&scope=&client_id=018746ee51b1a6ad0495d4caf514f407&response_type=code'
        else:
            to_readfree_url = None
        return to_readfree_url

    def to_readfree(self):
        to_readfree_url = self.to_douban()
        if self.verify_code_id:
            data = {
                "user_alias": "*****",
                "user_passwd": "***",
                "captcha-id": self.captcha_id,
                "captcha-solution": self.result[1],
                "confirm": "授权"
            }
        else:
            data = {
                "user_alias": "****",
                "user_passwd": "****",
                "confirm": "授权"
            }

        if to_readfree_url:
            response = self.s.post(to_readfree_url, data=data)
            if '亚马逊' in response.url:
                response = self.s.get('http://readfree.me/')
            elif 'readfree' in response.url:
                logger.info('没有跳转到亚马逊')
            readfree_selector = etree.HTML(response.text)
            user_url = readfree_selector.xpath(".//*/a[text()='个人中心']/@href")
            return user_url

    def get_score(self):
        user_url = self.to_readfree()
        if user_url:
            url = urljoin('http://readfree.me', user_url[0])
            user_page_res = self.s.get(url, headers=self.headers)
            score_selector = etree.HTML(user_page_res.text)
            score = score_selector.xpath("substring-before(substring-after(.//*/div[@class='clearfix']/following-sibling::p[1]/text(), '剩余额度:'), ',')")
            return str(score).strip() if score else None

    def mail_run(self):
        email = EMAIL()
        score = self.get_score()
        balance = self.yundama.balance()
        time = datetime.now() + timedelta(days=-1)
        if balance < 10 and score:
            contents = '{0} 云打码余额为: {1}, 余额已经不足请尽快充值。'.format(time.strftime('%Y-%m-%d %H:%M'), balance)
        elif balance <= 0 and score:
            contents = '{0} 云打码余额为: {1}, 余额已经不足，无法用于下次验证。\n现在积分为{2}。'.format(time.strftime('%Y-%m-%d %H:%M'), balance, score)
        elif balance >= 10 and score:
            contents = '{0} 云打码余额为: {1}, 余额较为充裕。\n现在ReadFree额度为{2}。'.format(time.strftime('%Y-%m-%d %H:%M'), balance, score)
        else:
            contents = '{0} 没有获取到ReadFree额度。'.format(time.strftime('%Y-%m-%d %H:%M'))
        try:
            email.send(contents, config['email_subject1'])
        except Exception as e:
            logger.error('邮件模块出现问题，不能正常发送邮件', exc_info=True)
        else:
            logger.info('邮件发送成功\n')


def run():
    r = ReadFree()
    r.mail_run()


if __name__ == '__main__':
    run()

