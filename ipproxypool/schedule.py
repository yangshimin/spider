import aiohttp
import asyncio
from ipproxypool.iphtmlparse import FreeProxy
from ipproxypool.db import RedisClient
from ipproxypool.config import TEST_URL, headers, CYCLETIME, MIN_IP_NUM, MAX_IP_NUM
import time
from multiprocessing import Process

class IPpool(object):
    def __init__(self, max_limit=MAX_IP_NUM):
        self.redis = RedisClient()
        self.ipqueue_length = max_limit
        self.freeproxy = FreeProxy()
        self.test_ip = validip()

    # 判断 ip 队列长度是否已经达到最大长度
    def is_maxlength_ippool(self):
        if self.redis.queue_len >= self.ipqueue_length:
            return True
        else:
            return False

    def add_ip_to_pool(self):
        print('开始向代理池中添加代理ip')
        # 设置默认ip长度
        proxies_length = 0

        # 先判断ip队列是否已经溢出,没有溢出则添加ip
        while not self.is_maxlength_ippool():
            for callbck_index in range(self.freeproxy.__crawlnum__):
                callback = self.freeproxy.__crawlfunc__[callbck_index]
                proxies = self.freeproxy.get_raw_proxies(callback)

                # 开始测试proxies、测试ip可用则存入到redis中
                proxies_length += len(proxies)
                # 因为可能代理网站出现问了，所以返回的proxies是个空列表，故在这里做个判断
                if proxies:
                    self.test_ip.set_proxies()
                    self.test_ip.test(proxies)

                # 判断从某个网站上抓取ip后队列长度是否溢出
                if self.is_maxlength_ippool():
                    print('ip已达到最大个数，即将停止抓取')
                    break
            if proxies_length == 0:
                print('抓取过程出现了某个错误没有成功抓取')


# 验证ip
class validip(object):
    test_url = TEST_URL

    # 方便在抓取的时候进行检测
    def set_proxies(self, valid_proxies=None):
        self.valid_proxies = valid_proxies
        # self.proxies = proxies
        self.conn = RedisClient()


    # python3.5之后的异步关键字
    async def async_test(self, proxy):
        async with aiohttp.ClientSession() as session:
            try:
                if isinstance(proxy, bytes):
                    # print('ip是字节类型')
                    proxy = proxy.decode('utf-8')
                proxy = 'http://' + proxy
                print('开始测试ip：{proxy}'.format(proxy=proxy))
                async with session.get(self.test_url, proxy=proxy, timeout=3, headers=headers) as response:
                    if response.status == 200:
                        print('ip：{proxy} 可以用'.format(proxy=proxy))
                        self.conn.put(proxy)
                    else:
                        print('请求网站的时候出现了错误: {}'.format(response.status))
            except:
                print('ip: {} 不能使用'.format(proxy))

    # 定时检测ip时候还可用
    def test(self, proxies):
        try:
            loop = asyncio.get_event_loop()
            tasks = [self.async_test(proxy) for proxy in proxies]
            loop.run_until_complete(asyncio.wait(tasks))
        except:
            print('异步的过程中出现了某种错误')

class Schedule(object):
    @staticmethod
    def valid_proxy(sleep_time=CYCLETIME):
        conn = RedisClient()
        tester = validip()
        while True:
            valid_queue_num = int(0.5 * conn.queue_len)
            if valid_queue_num == 0:
                print('队列中还没有ip, 稍后又重新开始验证')
                time.sleep(sleep_time)
                continue
            proxies = conn.get(valid_queue_num)

            # 实例化redis数据库对象，因为在验证ip还可用的时候有把ip插入到队列右边中的操作
            tester.set_proxies()
            # 进行异步检测
            tester.test(proxies)
            time.sleep(60)

    # 检测队列中的元素是否足够或者已经溢出并调用抓取ip的对象
    @staticmethod
    def check_pool(min=MIN_IP_NUM):
        conn = RedisClient()
        add_ip = IPpool()
        while True:
            if conn.queue_len < min:
                add_ip.add_ip_to_pool()
            time.sleep(20)



    def run(self):
        print('开始抓取、验证ip')
        valid_process = Process(target=Schedule.valid_proxy)
        check_process = Process(target=Schedule.check_pool)
        valid_process.start()
        check_process.start()


if __name__ == '__main__':
    s = Schedule()
    s.run()
