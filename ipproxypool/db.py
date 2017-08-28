import redis
from ipproxypool.config import HOST, PORT, PASSWORD


class RedisClient(object):
    def __init__(self, host=HOST, port=PORT):
        # 因为redis可能设置了密码，也可能没有设置密码，所以要做个判断
        if PASSWORD:
            self.db = redis.Redis(host=host, port=port, password=PASSWORD)
        else:
            self.db = redis.Redis(host=host, port=port)

    # 从队列中取一部分出来验证
    def get(self, offset=1):
        # 每次查询的时候从list中返回第一个，然后把list重置为索引从1开始的list
        proxies = self.db.lrange('ip', 0, offset-1)
        self.db.ltrim('ip', offset, -1)
        return proxies

    def put(self, proxies):
        self.db.rpush('ip', proxies)

    def pop(self):
        return self.db.rpop('ip').decode('utf-8')

    @property
    def queue_len(self):
        return self.db.llen('ip')

    def flush(self):
        self.db.flushall()


if __name__ == '__main__':
    conn = RedisClient()
    # conn.put(1322454)
    # conn.put(6578434)
    # conn.put('687afd5')
    print(conn.queue_len)
    conn.pop()
    print(conn.queue_len)
    print(conn.get())
    conn.flush()
