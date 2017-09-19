"""
    我也不知道这种实现方式算不算好，仅记录一下...
"""


def Milk(func):
    def wrapper(*args, **kwargs):
        print('牛奶的价格是1.5元')
        cost = func(*args, **kwargs) + 1.5
        print('现在向咖啡中加了牛奶')
        print('一共花费了{}元'.format(cost))
        return cost
    return wrapper


def Mocha(func):
    def wrapper(*args, **kwargs):
        print('抹茶的价格是1.5元')
        cost = func(*args, **kwargs) + 1.0
        print('现在向咖啡中加入了抹茶')
        print('一共花费了{}元'.format(cost))
        return cost
    return wrapper


@Mocha
@Milk
def milk_cofa(cupsize=1):
    if cupsize == 1:
        print('小杯咖啡价格是3.0元')
        return 3.0
    elif cupsize == 2:
        print('中杯杯咖啡价格是3.3元')
        return 3.3
    elif cupsize == 3:
        print('大杯杯咖啡价格是3.7元')
        return 3.7


if __name__ == '__main__':
    milk_cofa()
    print('*' * 20)
    milk_cofa(2)
