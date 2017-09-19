'''
    开放、关闭原则：
        类应该对拓展开放、对修改关闭

    目标：
        允许类容易拓展，在不修改现有代码的情况下，就可搭配新的行为。如果能实现这样的目标，有什么好处呢？这样
        的设计具有弹性可以应对改变，可以接受新的功能来应对改变的需求。

    遵循开放-关闭原则，通常会引入新的抽象层次，增加代码的复杂度。我们需要把注意力集中在设计中最有可能改变的地方，
    然后应用开放-关闭原则。

    特征：
        装饰者和被装饰者对象有相同的超类型。
        我们可以用一个或多个装饰者包装一个对象
        既然装饰者和被装饰者有相同的超类型，所以在任何需要原始对象(被包装的)的场合，可以用装饰过的对象替代它。
        ***装饰者可以在所委托被装饰者的行为之前与/或之后，加上自己的行为，以达到自己特定的目的。***
        对象可以在任何时候被装饰，所以可以在运行时动态地、不限量地用你喜欢的装饰者来装饰对象。
'''


class Beverage(object):
    def __init__(self):
        self.description = ' '

    def getDescription(self):
        return self.description

    def cost(self):
        raise NotImplementedError

# 两种不同咖啡的类定义
class HouseBlend(Beverage):
    def __init__(self):
        super(HouseBlend, self).__init__()
        self.description = 'HouseBlend'

    def cost(self):
        return 1.99


class Espresso(Beverage):
    def __init__(self):
        super(Espresso, self).__init__()
        self.description = 'Espresso'

    def cost(self):
        return 1.39


# 定义装饰者类，等同于加到咖啡中的一些调料
# 这是调料Milk
class Milk(Beverage):
    # 在初始化的时候传入被装饰者，可以是咖啡组件，也可以是一件被其他
    # 调料装饰过的咖啡组件
    def __init__(self, beverage):
        super(Milk, self).__init__()
        self.beverage = beverage

    def getDescription(self):
        return self.beverage.getDescription() + ', Milk'

    def cost(self):
        return self.beverage.cost() + 0.2


# 这是调料mocha
class Mocha(Beverage):
    def __init__(self, beverage):
        super(Mocha, self).__init__()
        self.beverage = beverage

    def getDescription(self):
        return self.beverage.getDescription() + ', Mocha'

    def cost(self):
        return self.beverage.cost() + 0.3

# 类似地，如果想要增加其他调料，只需像上面那么定义即可。


if __name__ == '__main__':
    beverage = HouseBlend()
    # 先被milk装饰一遍，即等同于加上milk
    beverage = Milk(beverage)
    print(beverage.getDescription())
    print(beverage.cost())
    beverage = Mocha(beverage)
    print(beverage.getDescription())
    print(beverage.cost())
