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
import time

import m3u8
from lxml import etree
from urllib.parse import urlparse, urljoin
import requests
from Crypto.Cipher import AES

from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.ssl_ import create_urllib3_context

import ssl
import httpx

import pdb

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


class SSLFactory:
    def __init__(self):
        self.ciphers = ORIGIN_CIPHERS.split(":")

    def __call__(self) -> ssl.SSLContext:
        random.shuffle(self.ciphers)
        ciphers = ":".join(self.ciphers)
        ciphers = ciphers + ":!aNULL:!eNULL:!MD5"
        context = ssl.create_default_context()
        context.set_ciphers(ciphers)
        return context


sslgen = SSLFactory()


class Application(object):

    def __init__(self):
        self.url = "https://jable.tv/new-release/"
        self.s = requests.Session()
        # self.s.mount('https://jable.tv', DESAdapter())

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
            "accept-encoding": "gzip, deflate",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "referer": "https://jable.tv/",
            "upgrade-insecure-requests": "1",
            # "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
            #               "Chrome/97.0.4692.99 Safari/537.36",
        }

        new_product_res = httpx.get(url, headers=headers, verify=False)
        if new_product_res.status_code == 200:
            logging.info("请求new product 页面成功")
            self.parse_new_product_info(new_product_res)
        else:
            logging.error("请求new product 页面失败")

    def parse_new_product_info(self, response):
        lxml_obj = etree.HTML(response.text)
        page_items_selector = lxml_obj.xpath(".//*/div[@id='list_videos_common_videos_list']/div[@class='container']/"
                                             "section//h6[@class='title']/a/@href")

        for page_item in page_items_selector:
            self.parse_video_detail(page_item)

        next_page_selector = lxml_obj.xpath(".//*/li[@class='page-item']/span[contains(@class, 'active')]/.."
                                            "/../following-sibling::li/a/text()")
        if next_page_selector:
            next_page = urljoin(self.url, str(int(next_page_selector[0])) + "/")
            self.get_new_product(next_page)

    def parse_video_detail(self, video_page_url):
        file_dir = ""
        download_path = os.path.join(os.getcwd(), 'video')
        if not os.path.exists(download_path):
            os.makedirs(download_path)

        video_no_name = video_page_url.rsplit('/', 2)[1]
        video_page_res = httpx.get(video_page_url, verify=False)
        if video_page_res.status_code == 200:
            logging.info(f"请求video详情页成功: {video_no_name}")
            video_page_lxml_obj = etree.HTML(video_page_res.text)

            video_title_selector = video_page_lxml_obj.xpath(".//*/div[@class='header-left']/h4/text()")
            if video_title_selector:
                video_title = video_title_selector[0]
            else:
                logging.error("解析视频标题失败")
                return

            # 以title作为目录名
            file_dir = os.path.join(download_path, video_title)
            if not os.path.exists(file_dir):
                os.makedirs(file_dir)

            # 如果目录下有cover.jpg 则不下载封面
            if not os.path.exists(os.path.join(file_dir, 'cover.jpg')):
                cover_selector = video_page_lxml_obj.xpath(".//*/video[@id='player']/@poster")
                if cover_selector:
                    cover = cover_selector[0]
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
                    cover_path = os.path.join(file_dir, 'cover.jpg')
                    with open(cover_path, 'wb') as f:
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

            # 解析AES解密用的key和iv
            playlist_info = self.get_m3u8_info(m3u8_pattern.group(1), file_dir)
            # 因为这个网站是同一个视频的所有ts文件都用同一个key解密 所以keys有且只有一个
            decrypt_key_url = playlist_info.keys[0].absolute_uri
            decrypt_key = self.get_decrypt_key(decrypt_key_url)
            decrypt_iv = self.generate_iv(playlist_info.keys[0].iv)
            playlist_ts_list = [segment.absolute_uri for segment in playlist_info.segments]

            # 当失败后重新运行不下载已经下载过的视频
            local_list = os.listdir(file_dir)
            remain_list = []
            for ts_url in playlist_ts_list:
                ts_basename = os.path.basename(ts_url)
                if ts_basename in local_list:
                    logging.info(f"视频已经存在于文件夹下, 忽略下载: {ts_basename}")
                else:
                    remain_list.append(ts_url)
            self.multi_download(file_list=remain_list, file_dir=file_dir, key=decrypt_key, iv=decrypt_iv)
        else:
            logging.error(f"请求video详情页失败: {video_no_name}")

    def multi_download(self, file_list, file_dir, key, iv):
        """
        :param file_list: 下载文件列表
        :param file_dir: 保存视频的目录
        :param key: AES解密用的key
        :param iv: AES解密偏移量
        :return:
        """
        if not file_dir:
            raise Exception(f"保存视频的目录不存在: {file_dir}")

        download_headers = {
            "method": "GET",
            "scheme": "https",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;"
                      "q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/97.0.4692.99 Safari/537.36",
        }

        cryptor = AES.new(key, AES.MODE_CBC, iv)
        for down_url in file_list:
            time.sleep(1)
            ts_name = os.path.split(down_url)[-1]
            try:
                logging.debug(f"开始下载：{ts_name}")
                download_headers.update({"authority": urlparse(down_url).netloc, "path": urlparse(down_url).path})
                res = self.s.get(down_url, headers=download_headers)
                file_path = os.path.join(file_dir, ts_name)
                with open(file_path, 'wb') as f:
                    f.write(cryptor.decrypt(res.content))
                logging.info(f"下载成功: {ts_name}")
            except Exception as e:
                raise Exception(f"下载失败：{ts_name}:{e.args}")

    def get_m3u8_info(self, url, save_dir):
        headers = {
            "authority": urlparse(url).netloc,
            "method": "GET",
            "path": urlparse(url).path,
            "scheme": "https",
            "accept": "*/*",
            # "accept-encoding": "gzip, deflate",
            "accept-language": "zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7,ja;q=0.6",
            "cache-control": "no-cache",
            "origin": "https://jable.tv",
            "pragma": "no-cache",
            "referer": "https://jable.tv/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
                          " Chrome/97.0.4692.99 Safari/537.36",
        }

        playlist_info = m3u8.load(url, headers=headers)
        m3u8_res = self.s.get(url, headers=headers)
        if m3u8_res.status_code == 200:
            logging.info("请求m3u8文件成功")
            save_path = os.path.join(save_dir, os.path.split(url)[1])
            with open(save_path, 'wb') as f:
                f.write(m3u8_res.content)
            logging.info("保存m3u8文件失败")
        else:
            logging.error("请求m3u8文件失败")
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
            # return bytearray([int(i) for i in res.content])
            return res.content
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
        return bytes(iv_array)


if __name__ == "__main__":
    app = Application()
    app.get_new_product("https://jable.tv/new-release/")
