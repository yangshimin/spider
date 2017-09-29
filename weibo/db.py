import pymongo
import redis
from config import MONGO_DB, MONGO_URL, HOST, PASSWORD, PORT


class MongoClient(object):
    def __init__(self, mongo_url=MONGO_URL, mongo_db=MONGO_DB):
        self.client = pymongo.MongoClient(mongo_url)
        self.db = self.client[mongo_db]

    def save_to_mongo(self, data):
        if data.get('flag'):
            if data['name']:
                self.db['user_info'].update({'id': data['id']}, {'$set': data}, True)
        else:
            self.db['blog_info'].update({'blog_content_url': data['blog_content_url']}, {'$set': data}, True)


class RedisClient(object):
    def __init__(self, host=HOST, password=PASSWORD, port=PORT):
        if password:
            self.db = redis.Redis(host=host, password=password, port=port)
        else:
            self.db = redis.Redis(host=host, port=port)

    def put(self, key):
        self.db.lpush('uid', key)

    def pop(self):
        return self.db.rpop('uid').decode('utf-8')

    @property
    def queue_len(self):
        return self.db.llen('uid')

    def flush(self):
        self.db.flushdb()

if __name__ == '__main__':
    rc = RedisClient()
    rc.put('4587678')
    rc.put('231524')
    rc.put('2424554')
    print(rc.queue_len)
    print(rc.pop())