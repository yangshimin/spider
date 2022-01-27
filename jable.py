# !/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 01/27/22
# @Author  : YangShiMin
# @Email   : fausty@synnex.com
# @File    : jable.py
# @Software: PyCharm
import os
import re
import sys
import logging
import threading
import random

import m3u8
from lxml import etree
from urllib.parse import urlparse, urljoin
import requests
from Crypto.Cipher import AES

from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.ssl_ import create_urllib3_context

formatter = '%(asctime)s - %(filename)s[line:%(lineno)d] -%(levelname)s: %(message)s'
logging.basicConfig(level=logging.INFO, stream=sys.stdout, format=formatter)

"""
pip install pycryptodome
pip install requests
pip install m3u8
"""

ORIGIN_CIPHERS = ('ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+HIGH:'
'DH+HIGH:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+HIGH:RSA+3DES')


class DESAdapter(HTTPAdapter):
    def __init__(self, *args, **kwargs):
        """
        A TransportAdapter that re-enables 3DES support in Requests.
        """
        CIPHERS = ORIGIN_CIPHERS.split(':')
        random.shuffle(CIPHERS)
        CIPHERS = ':'.join(CIPHERS)
        self.CIPHERS = CIPHERS + ':!aNULL:!eNULL:!MD5'
        super().__init__(*args, **kwargs)

    def init_poolmanager(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=self.CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).init_poolmanager(*args, **kwargs)

    def proxy_manager_for(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=self.CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).proxy_manager_for(*args, **kwargs)


class Application(object):

    def __init__(self):
        self.url = "https://jable.tv/new-release/"
        self.s = requests.Session()
        self.s.mount('https://jable.tv', DESAdapter())

    @staticmethod
    def generate_dir():
        root_dir = os.path.join(os.getcwd(), 'video_info')
        if os.path.exists(root_dir):
            os.makedirs(root_dir)

    def get_new_product(self, url):
        headers = {
            "authority": "jable.tv",
            "method": "GET",
            "path": urlparse(url).path,
            "scheme": "https",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;"
                      "q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "referer": "https://jable.tv/",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/97.0.4692.99 Safari/537.36",
        }

        new_product_res = requests.get(url, headers=headers)
        if new_product_res.status_code == 200:
            logging.info("请求new product 页面成功")
            self.parse_new_product_info(new_product_res)
        else:
            logging.error("请求new product 页面失败")

    def parse_new_product_info(self, response):
        lxml_obj = etree.HTML(response.text)
        page_items_selector = lxml_obj.xpath(".//*/div[@id='list_videos_common_videos_list']//div[@class='container']/"
                                             "div[contains(@class, 'row')]//div[contains(@class, 'img-box')]/a/@href")

        for page_item in page_items_selector:
            self.parse_video_detail(page_item)

        next_page_selector = lxml_obj.xpath(".//*/li[@class='page-item']/span[contains(@class, 'active')]/.."
                                            "/../following-sibling::li/a/text()")
        if next_page_selector:
            next_page = urljoin(self.url, str(int(next_page_selector[0])) + "/")
            self.get_new_product(next_page)

    def parse_video_detail(self, video_page_url):
        download_path = os.path.join(os.getcwd(), 'download')
        if not os.path.exists(download_path):
            os.makedirs(download_path)

        headers = {
            "authority": "jable.tv",
            "method": "GET",
            "path": urlparse(video_page_url).path,
            "scheme": "https",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;"
                      "q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "referer": "https://jable.tv/new-release/",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/97.0.4692.99 Safari/537.36",
        }

        video_no_name = video_page_url.rsplit('/', 2)[1]

        video_page_res = self.s.get(video_page_url, headers=headers)
        if video_page_res.status_code == 200:
            logging.info(f"请求video详情页成功: {video_no_name}")
            video_page_lxml_obj = etree.HTML(video_page_res.text)

            video_title_selector = video_page_lxml_obj.xpath(".//*/div[@class='header-left']/h4/text()")
            if video_title_selector:
                video_title = video_title_selector[0]
            else:
                logging.error("解析视频标题失败")
                return
            cover_selector = video_page_lxml_obj.xpath(".//*/div[@class='plyr__poster']/@style")
            if cover_selector:
                cover = re.search(r'background-image: url\("(.*?)\)"', cover_selector[0]).group(1)
                cover_headers = {
                    "authority": "assets-cdn.jable.tv",
                    "method": "GET",
                    "path": urlparse(cover).path,
                    "scheme": "https",
                    "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "referer": "https://jable.tv/",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                                  "Chrome/96.0.4664.93 Safari/537.36",
                }
                cover_res = self.s.get(cover, headers=cover_headers)
                file_dir = os.path.join(os.getcwd(), video_title)
                if not os.path.exists(file_dir):
                    os.makedirs(file_dir)
                with open(os.path.join(file_dir, 'cover.jpg'), 'wb') as f:
                    f.write(cover_res.content)
                logging.info("保存封面成功")
            else:
                logging.error("解析封面失败")

            m3u8_pattern = re.search(r"var hlsUrl = '(.*?)';", video_page_res.text)
            if not m3u8_pattern:
                logging.error(f"解析视频的m3u8文件链接失败: {video_no_name}")
                return
            else:
                logging.info(f"解析视频的m3u8文件链接成功: {video_no_name}")

            playlist_info = self.get_m3u8_info(m3u8_pattern.group(1))
            # 因为这个网站是所有ts文件都用同一个key解密 所以keys有且只有一个
            decrypt_key_url = playlist_info.keys[0].absolute_uri
            decrypt_key = self.get_decrypt_key(decrypt_key_url)
            decrypt_iv = self.generate_iv(playlist_info.keys[0].iv)
            playlist_ts_list = [segment.absolute_uri for segment in playlist_info.segments]

            local_list = os.listdir()
            num_thread = 4
            s_list = list(set(playlist_ts_list) - set(local_list))
            file_size = len(s_list)
            part = file_size // num_thread
            thread_list = []

            for i in range(num_thread):
                start = part * i
                if i == num_thread - 1:  # 最后一块
                    end = file_size
                else:
                    end = start + part
                if end > start:
                    t = threading.Thread(
                        target=self.multi_download,
                        kwargs={'start': start, 'end': end, 'file_list': s_list,
                                'key': bytearray(decrypt_key), 'iv': bytearray(decrypt_iv)})
                    t.setDaemon(True)
                    t.start()
                    thread_list.append(t)
                    logging.info("启动线程%s" % t.name)

            for t in thread_list:
                t.join()
                logging.info("结束线程%s" % t.name)
            logging.info('所有线程结束')

        else:
            logging.error(f"请求video详情页失败: {video_no_name}")

    @staticmethod
    def multi_download(start, end, file_list, key, iv):
        """
        :param start: 下载文件列表开始索引
        :param end: 下载文件列表结束索引
        :param file_list: 下载文件列表
        :param key: AES解密用的key
        :param iv: AES解密偏移量
        :return:
        """
        download_path = os.path.join(os.getcwd(), 'download')
        if not os.path.exists(download_path):
            os.makedirs(download_path)

        for down_url in file_list[start:end]:
            global count

            ts_name = os.path.split(down_url)[-1]
            try:
                logging.debug("正在下载：%s" % ts_name)
                res = requests.get(down_url)
                if key and iv:  # AES 解密
                    cryptor = AES.new(key, AES.MODE_CBC, iv)
                    with open(os.path.join(download_path, ts_name), 'wb') as f:
                        f.write(cryptor.decrypt(res.content))
                else:
                    with open(os.path.join(download_path, ts_name), 'wb') as f:
                        f.write(res.content)
                        f.flush()

            except Exception as e:
                logging.warning("下载失败：%s" % ts_name)
            count = count + 1
            logging.info("下载进度：%.2f%s-----%s/%s" % (100 * float(count) / len(file_list), "%", count, len(file_list)))

    @staticmethod
    def get_m3u8_info(url):
        headers = {
            "authority": "hot-box-gen.mushroomtrack.com",
            "method": "GET",
            "path": "/hls/sp8gQwUz8S2MoJXU2UlTDg/1643262355/21000/21531/21531.m3u8",
            "scheme": "https",
            "accept": "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "origin": "https://jable.tv",
            "pragma": "no-cache",
            "referer": "https://jable.tv/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
                          " Chrome/97.0.4692.99 Safari/537.36",
        }

        playlist_info = m3u8.load(url, headers=headers)
        return playlist_info

    def get_decrypt_key(self, url):
        """
        获取解密的key
        :param url:
        :return:
        """
        headers = {
            "authority": "hot-box-gen.mushroomtrack.com",
            "method": "GET",
            "path": urlparse(url).path,
            "scheme": "https",
            "accept": "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "origin": "https://jable.tv",
            "pragma": "no-cache",
            "referer": "https://jable.tv/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/97.0.4692.99 Safari/537.36",
        }

        res = self.s.get(url, headers=headers)
        if res.status_code == 200:
            logging.info("下载解密key成功")
            return bytearray([int(i) for i in res.content])
        else:
            logging.error("下载解密key失败")

    @staticmethod
    def generate_iv(iv_str):
        """
        生成aes解密的偏移量
        :param iv_str:
        :return:
        """
        iv_str = iv_str.replace("0x", "")
        iv_array = []
        for i in range(len(iv_str) // 2):
            s = iv_str[2 * i:2 * i + 2]
            iv_array.append(int(s, 16))
        return iv_array


if __name__ == "__main__":
    app = Application()
    app.get_new_product("https://jable.tv/new-release/")