# encoding:utf-8
import pickle
import hashlib


class UrlManager(object):
    def __init__(self):
        self.new_urls = self.load_process('new_urls.txt')
        self.old_urls = self.load_process('old_urls.txt')

    def has_new_url(self):
        return len(self.new_urls) != 0

    def get_new_url(self):
        new_url = self.new_urls.pop()
        m = hashlib.md5()
        m.update(new_url.encode('utf-8'))
        self.old_urls.add(m.hexdigest()[8:-8])
        return new_url

    def add_new_url(self, url):
        if url is None:
            return
        m = hashlib.md5()
        m.update(url.encode('utf-8'))
        url_md5 = m.hexdigest()[8:-8]
        if url not in self.new_urls and url_md5 not in self.old_urls:
            self.new_urls.add(url)

    def add_new_urls(self, urls):
        if urls is None or len(urls) == 0:
            return
        for url in urls:
            self.add_new_url(url)

    def new_url_size(self):
        return len(self.new_urls)

    def old_url_size(self):
        return len(self.old_urls)

    def save_process(self, path, data):
        with open(path, 'wb') as f:
            pickle.dump(data, f)

    def load_process(self, path):
        try:
            with open(path, 'rb') as f:
                tmp = pickle.load(f)
                return tmp
        except:
            print('[!] 无进度文件：{file}'.format(file=path))
        # 返回set() 是为了保证在没有进度文件时new_urls和old_urls都是一个set类型的集合
        return set()
