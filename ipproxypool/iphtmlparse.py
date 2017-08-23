from bs4 import BeautifulSoup
from ipproxypool.iphtmldownloader import get_page
import time


class ProxyMeta(type):
    # 通过创建元类可以很方便的动态引用各个代理函数
    def __new__(cls, name, bases, attrs):
        num = 0
        attrs['__crawlfunc__'] = []
        for k, v in attrs.items():
            if 'crawl_' in k:
                attrs['__crawlfunc__'].append(k)
                num += 1
        attrs['__crawlnum__'] = num
        return type.__new__(cls, name, bases, attrs)


class FreeProxy(object, metaclass=ProxyMeta):
    def get_raw_proxies(self, callback):
        proxies = []
        print('开始从 {} 网站上抓取ip'.format(callback))
        for proxy in eval('self.{}()'.format(callback)):
            proxies.append(proxy)
        return proxies

    def crawl_ip181(self):
        page_list = ['http://www.ip181.com/daili/{page}.html'.format(page=n) for n in range(1, 4)]
        for page in page_list:
            try:
                html = get_page(page)
                soup = BeautifulSoup(html, 'lxml')
                eles = soup.select('.table tr')[1:]
                for ele in eles:
                    ip = ele.select('td')[0].string
                    port = ele.select('td')[1].string
                    yield ':'.join([ip, port])
                time.sleep(2)
            except:
                print('代理网站暂时出现了问题')

    def crawl_ip66(self):
        page_list = ['http://www.66ip.cn/areaindex_{city_number}/{page}.html'.format(city_number=m, page=n) for m in range(1, 5) for n in range(1, 3)]
        for page in page_list:
            try:
                html = get_page(page)
                soup = BeautifulSoup(html, 'lxml')
                eles = soup.select('table')[2].select('tr')[1:]
                for ele in eles:
                    ip = ele.select('td')[0].string
                    port = ele.select('td')[1].string
                    yield ':'.join([ip, port])
                time.sleep(2)
            except:
                print('代理网站暂时出现了问题')

    # def crawl_mimiip(self):
    #     page_list = ['http://www.mimiip.com/gngao/{page}'.format(page=n) for n in range(1, 4)]
    #     for page in page_list:
    #         html = get_page(page)
    #         soup = BeautifulSoup(html, 'lxml')
    #         eles = soup.select('.list tr')[1:]
    #         for ele in eles:
    #             ip = ele.find_all('td')[0].string
    #             port = ele.find_all('td')[1].string
    #             yield ':'.join([ip, port])

    def crawl_kuaidaili(self):
        page_list = ['http://www.kuaidaili.com/free/inha/{page}/'.format(page=n) for n in range(1, 4)]
        for page in page_list:
            try:
                html = get_page(page)
                soup = BeautifulSoup(html, 'lxml')
                eles = soup.select('.table tr')[1:]
                for ele in eles:
                    ip = ele.find_all('td')[0].string
                    port = ele.find_all('td')[1].string
                    yield ':'.join([ip, port])
                time.sleep(2)
            except:
                print('代理网站暂时出现了问题')

    def crawl_kxdaili(self):
        page_list = ['http://www.kxdaili.com/dailiip/1/{page}.html'.format(page=n) for n in range(1, 4)]
        for page in page_list:
            try:
                html = get_page(page)
                soup = BeautifulSoup(html, 'lxml')
                eles = soup.select('.table tr')
                for ele in eles:
                    ip = ele.select('td')[0].string
                    port = ele.select('td')[1].string
                    yield ':'.join([ip, port])
                time.sleep(2)
            except:
                print('代理网站暂时出现了问题')


    def crawl_xici(self):
        page_list = ['http://www.xicidaili.com/nn/{page}'.format(page=n) for n in range(1, 4)]
        for page in page_list:
            try:
                html = get_page(page)
                soup = BeautifulSoup(html, 'lxml')
                eles = soup.select('#ip_list tr')[2:]
                for ele in eles:
                    ip = ele.select('td')[1].string
                    port = ele.select('td')[2].string
                    yield ':'.join([ip, port])
                time.sleep(2)
            except:
                print('代理网站暂时出现了问题')
