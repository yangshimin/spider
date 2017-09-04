import random
from Crypto.Cipher import AES
import base64
import requests
from lxml import etree
import chardet
import json
from db import MongoClient
import time


base_list_url = 'http://music.163.com'

test_url = 'http://music.163.com/song?id=494858544'

song_info_url = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_{id}?csrf_token='

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:55.0) Gecko/20100101 Firefox/55.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en-GB;q=0.6,en;q=0.4,ja;q=0.2',
    'Connection': 'keep-alive',
    'Host': 'music.163.com',
    'Referer': 'http://music.163.com/'
}

# a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
# key = 'eHhjXckqrtZkqcwCalCMx0QuU6Lj9L7Wxouw1iMCnB4='


# 第二个参数
e = '010001'
# 第三个参数
f = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
# 第四个参数
g = '0CoJUm6Qyw8W8jud'

start_url = 'http://music.163.com/discover/playlist/?order=hot&cat=%E5%85%A8%E9%83%A8&limit=35&offset=0'

# 后面加解密太复杂  直接用16个F代替
# def generatestring():
#     randomlist = []
#     for i in a:
#         key = ','.join(i)
#         randomlist.append(key)
#     randomstr = ''.join(random.sample(randomlist, 16))
#     return randomstr

class wangyimusic_comment(object):
    def __init__(self):
        self.s = requests.Session()
        self.s.headers.update(headers)
        self.offset = 0
        self._db = MongoClient()
        # 第一个参数
        self.d = {"rid": None, "offset": 0, "total": "true", "limit": "20", "csrf_token": ""}

        # 存储每个歌单的url,更好用redis来存储
        self.seen = set()

    def get_params(self):
        iv = '0102030405060708'
        # first_encText = generatestring()
        h_encText = self.aes_encrypt(str(self.d), g, iv)
        h_encText = self.aes_encrypt(h_encText, 'FFFFFFFFFFFFFFFF', iv)
        return h_encText


    # 因为 参数中的唯一一个变量正是那个 16 位随机字符串，因为我们用16个F代替，所以，
    # 每次调用的结果必然一致，下面的值是在浏览器中console中模拟取得。
    def get_encSecKey(self):
        encSecKey = '257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c'
        return encSecKey


    # 加密文本长度必须为 16(AES-128)、24(AES-192)、32(AES-256) Bytes长度，目前AES-128足够用
    def aes_encrypt(self, text, key, iv):
        encryptor = AES.new(key, AES.MODE_CBC, iv)
        # 加密函数，如果 text 不是16的倍数(加密文本text必须为16的倍数)， 那就补足为16的倍数
        miss_lenght = 16 - len(text) % 16
        text = text + miss_lenght * chr(miss_lenght)
        encrypt_text = encryptor.encrypt(text)
        # 不明白为什么有这句
        encrypt_text = base64.b64encode(encrypt_text)
        return encrypt_text.decode('utf-8')

    def get_list_page(self, url):

        response = self.s.get(url)
        if response.status_code == 200:
            return response.text
        else:
            print('请求url时出错:', response.status_code)

    def parse_list(self, response):
        page = etree.HTML(response)
        links = page.xpath(".//*[@id='m-pl-container']/li/p[@class='dec']/a/@href")
        for link in links:
            base_songsheet_url = base_list_url + link
            self.add_songsheet_url(base_songsheet_url)
            print(base_songsheet_url)
        next_page = base_list_url + page.xpath(".//*/div[@class='u-page']/a[text()='下一页']/@href")[0]
        if not next_page.endswith('javascript:void(0)'):
            # print("*********************************")
            # print(next_page)
            self.parse_list(self.get_list_page(next_page))

    def get_song(self, url):
        response = self.s.get(url)
        if response.status_code == 200:
            page = etree.HTML(response.text)
            song_sheet = page.xpath(".//*/ul[@class='f-hide']/li/a/@href")
            # self.song_sheet_name = page.xpath('.//*/title/text()')[0]
            for song_url in song_sheet:
                self.item = {}
                self.comment_url = base_list_url + song_url
                self.song_name = self.get_song_name(self.comment_url)
                song_id = self.comment_url.split('=')[1]
                self.d["rid"] = "R_SO_4_" + str(song_id)
                comment_dict = self.get_comment(song_id)

                self.parse_comment(comment_dict, self.item)
                self._db.save_to_mongo(self.song_name, self.item)

                total = comment_dict['total']
                print('fisrt time:', total)
                while self.offset + 20 < total:
                    self.offset += 20
                    self.d['offset'] = self.offset
                    self.get_comment(song_id)
        else:
            print('请求 {url} 时出错: {code}'.format(url=url, code=response.status_code))

    def get_comment(self, id):
        response = self.s.post(song_info_url.format(id=id), data={
            'params': self.get_params(),
            'encSecKey': self.get_encSecKey()
        }, cookies={'Cookie': 'appver=1.5.0.75771;'})
        res_json = json.loads(response.text)
        self.parse_comment(res_json, self.item)
        return res_json

    def parse_comment(self, comment_dict, item):
        for comment in comment_dict['comments']:
            item['commentId'] = comment['commentId']
            item['nickname'] = comment['user']['nickname']
            item['content'] = comment['content']
            item['time'] = self.timestamp_to_time(comment['time'])
            item['likedCount'] = comment['likedCount']
            item['song_url'] = self.comment_url

            self._db.save_to_mongo(self.song_name, self.item)
            print(item)
            # item = {}

            # self.parse_comment(comment_dict, self.item)
            # self._db.save_to_mongo(self.song_sheet_name, self.item)

    def timestamp_to_time(self, timestamp):
        time_length = len(str(timestamp))
        if time_length == 13:
            timearr = time.localtime(timestamp // 1000)
        else:
            timearr = time.localtime(timestamp)
        return time.strftime('%Y-%m-%d %H:%M', timearr)

    def add_songsheet_url(self, url):
        if url not in self.seen:
            self.seen.add(url)

    def get_song_name(self, song_url):
        response = self.s.get(song_url)
        page = etree.HTML(response.text)
        song_name = page.xpath('.//*/title/text()')[0].split('-')[0]
        return song_name


if __name__ == '__main__':
    comment = wangyimusic_comment()
    res = comment.get_list_page(start_url)
    comment.parse_list(res)
    print('开始抓取评论内容')
    for url in comment.seen:
        comment.get_song(url)

    # comment.get_song()

