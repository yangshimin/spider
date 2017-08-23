from flask import Flask
from ipproxypool.db import RedisClient

app = Flask(__name__)


class web_server(object):
    @app.route('/get/')
    def get():
        redis = RedisClient()
        return redis.pop()

    @app.route('/count/')
    def len():
        redis = RedisClient()
        return redis.queue_len

    @app.route('/')
    def index():
        return '欢迎来到ip代理池~~'

if __name__ == '__main__':
    app.run()

