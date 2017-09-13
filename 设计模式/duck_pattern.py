from abc import ABCMeta, abstractmethod


class QuackBehaivor(metaclass=ABCMeta):
    @abstractmethod
    def quack(self):
        raise NotImplementedError


class Quack(QuackBehaivor):
    def quack(self):
        print('我是一只会Quack的鸭子')


class SQuack(QuackBehaivor):
    def quack(self):
        print('我是一只会SQuack的鸭子')


class MuteQuack(QuackBehaivor):
    def quack(self):
        print('我是一只会MuteQuack的鸭子')


class FlyBehaivor(metaclass=ABCMeta):
    @abstractmethod
    def fly(self):
        raise NotImplementedError


class FlyWithWing(FlyBehaivor):
    def fly(self):
        print('我是一只会fly with wing 的鸭子')


class FlyNoWay(FlyBehaivor):
    def fly(self):
        print('我是一只fly with no way 的鸭子')


class Duck(object):
    def __init__(self, flytype, quacktype):
        self.quack = quacktype
        self.fly = flytype

    def performfly(self):
        self.quack().quack()

    def performquack(self):
        self.fly().fly()

    def swim(self):
        print('所有鸭子都会游泳呢~')

    def othermethod(self):
        pass


class YellowDuck(Duck):
    def __init__(self, flytype=FlyWithWing, quacktype=Quack):
        super(YellowDuck, self).__init__(flytype, quacktype)

    def othermethod(self):
        print('duck quack with fly')


class GreenDuck(Duck):
    def __init__(self, flytype=FlyNoWay, quacktype=MuteQuack):
        super(GreenDuck, self).__init__(flytype, quacktype)

    def othermethod(self):
        print('duck quack with no quack')


if __name__ == '__main__':
    yellowduck = YellowDuck()
    yellowduck.performquack()
    yellowduck.performfly()
    print('*' * 40)
    greenduck = GreenDuck()
    greenduck.performquack()
    greenduck.performfly()
