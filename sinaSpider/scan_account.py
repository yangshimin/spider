from db import AccountRedisClient


def scan(file):
    account_redis = AccountRedisClient()
    with open(file, 'r', encoding='utf-8') as f:
        for line in f.readlines():
            res = line.split('----')
            print('开始存入 {}'.format(res[0]))
            account_redis.set(res[0], res[1])
            print('存入 {}'.format(res[1]))
        print('账号已经全部存入Redis中')


if __name__ == '__main__':
    scan('weibo.txt')