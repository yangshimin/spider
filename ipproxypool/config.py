# IpProxyPool = {
#     '66ip': ['www.66ip.cn/areaindex_{city_number}/{page}.html'.format(city_number=m, page=n) for m in range(1, 10) for n in range(1, 3)],
#     'mimiip': ['www.mimiip.com/gngao/{page}'.format(page=n) for n in range(1, 11)],
#     'kuaidaili': ['www.kuaidaili.com/free/inha/{page}/'.format(page=n) for n in range(1, 11)],
#     'cz88': ['www.cz88.net/proxy/{page}'.format(page=n) for n in ['index.shtml'] + ['http_{page}.shtml'.format(page=p) for p in range(2, 11)]],
#     'ip181': ['www.ip181.com/daili/{page}.html'.format(page=n) for n in range(1, 11)],
#     'kxdaili': ['www.kxdaili.com/dailiip/1/{page}.html'.format(page=n) for n in range(1, 11)],
#     'xicidaili': ['www.xicidaili.com/nn/{page}'.format(page=n) for n in range(1, 11)]
# }

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'zh-CN,zh;q=0.8'
}

TEST_URL = 'http://www.baidu.com/'
CYCLETIME = 60

HOST = 'localhost'
PORT = 6379
PASSWORD = ''

MIN_IP_NUM = 20
MAX_IP_NUM = 120