import redis
from config import *
import random


class RedisClient(object):
    def __init__(self, host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD):
        if password:
            self.db = redis.Redis(host=host, port=port, password=password)
        else:
            self.db = redis.Redis(host=host, port=port)
        self.domain = REDIS_DOMAIN
        self.name = REDIS_COOKIE

    def _get(self, key):
        return "{domain}:{name}:{key}".format(domain=self.domain, name=self.name, key=key)

    def set(self, key, value):
        raise NotImplementedError

    def get(self, key):
        raise NotImplementedError

    def delete(self, key):
        raise NotImplementedError

    def keys(self):
        return self.db.keys('{domain}:{name}:*'.format(domain=self.domain, name=self.name))

    def flush(self):
        self.db.flushall()


class CookiesRedisClient(RedisClient):
    def __init__(self, host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD, domain='weibo', name='cookie'):
        super(CookiesRedisClient, self).__init__(host, port, password)
        self.domain = domain
        self.name= name

    def set(self, key, value):
        try:
            return self.db.set(self._get(key), value)
        except:
            print('set操作错误')

    def get(self, key):
        try:
            return self.db.get(self._get(key))
        except:
            print('无法得到{key}的cookie值'.format(key=key))

    def delete(self, key):
        try:
            print('开始删除', key)
            self.db.delete(self._get(key))
            print('删除 {} 成功'.format(key))
        except:
            print('删除{key}的cookie失败'.format(key=key))

    def random(self):
        try:
            keys = self.keys()
            return self.db.get(random.choice(keys))
        except:
            print('随机cookie失败')

    def count(self):
        return len(self.keys())


class AccountRedisClient(RedisClient):
    def __init__(self, host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD, domain='weibo', name='account'):
        super(AccountRedisClient, self).__init__(host, port, password)
        self.domain = domain
        self.name = name

    def set(self, key, value):
        try:
            return self.db.set(self._get(key), value)
        except:
            print('set操作错误')

    def get(self, key):
        try:
           return self.db.get(self._get(key))
        except:
            print('无法得到{}的密码'.format(key))

    # def random(self):
    #     try:
    #         keys = self.keys()
    #         return self.db.get(random.choice(keys))
    #     except:
    #         print('随机取账号的时候出现错误')

    def delete(self, key):
        try:
            print('开始删除 {} '.format(key))
            self.db.delete(self._get(key))
            print('删除 {} 成功'.format(key))
        except:
            print('删除账号的时候出现错误')

    def count(self):
        return len(self.keys())


if __name__ == '__main__':
    # conn = CookiesRedisClient()
    # conn.set('shi', '123')
    # conn.set('min', '456')
    # conn.set('gou', '789')
    # conn.set('yang', '0000')
    # print(conn.get('min'))
    # print(conn.count())
    # print(conn.keys())
    # print(conn.random())
    # conn.delete('min')

    conn = AccountRedisClient()
    # conn.set('shi', '123')
    # conn.set('min', '456')
    # conn.set('gou', '789')
    # conn.set('yang', '0000')

    # print(conn.get('min'))
    # print(conn.count())
    # print(conn.keys())
    conn.delete('min')


