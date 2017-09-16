'''
    什么时候使用观察者模式？
    1.当一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将两者封装在独立的对象中以使他们可以
    独自的使用和改变和复用。
    2.当一个对象状态的改变需要同时改变其他对象，而不知道具体有多少对象待改变。
    3.当一个对象必须通知其他对象，而它又不能假定其他对象是谁。换言之，我们不希望对象是紧密耦合的。

    一个主题必须具备的特征？
    1.持有所监听的观察者的引用。
    2.支持增加和删除观察者。
    3.主题状态改变，通知观察者。

    摘自《Head First 设计模式》中一段话：
    关于观察者的一切，主题只知道观察者实现了某个接口(也就是observer接口)。主题不需要知道观察者的
    具体类是谁、做了些什么或其他任何细节。

    任何时候我们都可以增加新的观察者，因为主题唯一依赖的东西是一个实现 observer 接口的对象列表，我
    们可以 随时增加、删除观察者。事实上，在运行时我们可以用新的观察者取代现有的观察者，主题不会受到
    任何影响。同样地，也可以在任何时候删除某些观察者。

    有新类型的观察者出现时，主题的代码不需要修改。假如我们有个新的具体类需要当观察者，我们不需要为了兼
    容新类型而修改主题的代码。所有要做的就是在新的类里实现观察者接口，然后注册为观察者即可。主题不在乎
    别的，它只会发送通知给所有实现了观察者接口的对象。
'''

from abc import ABCMeta, abstractmethod


class Observer(metaclass=ABCMeta):
    @abstractmethod
    def update(self, temp, humidity, pressure):
        raise NotImplementedError

    @abstractmethod
    def display(self):
        raise NotImplementedError


class Subject(metaclass=ABCMeta):
    @abstractmethod
    def registerObserver(self, observer):
        raise NotImplementedError

    @abstractmethod
    def removeObserver(self, observer):
        raise NotImplementedError

    @abstractmethod
    def notifyObserver(self):
        raise NotImplementedError


class WeatherData(Subject):
    def __init__(self):
        self.observers = []
        self.temperature = 0.0
        self.humidity = 0.0
        self.pressure = 0.0

    def registerObserver(self, observer):
        self.observers.append(observer)

    def removeObserver(self, observer):
        self.observers.remove(observer)

    def notifyObserver(self):
        for item in self.observers:
            item.update(self.temperature, self.humidity, self.pressure)

    def getTemperature(self):
        return self.temperature

    def getHumidity(self):
        return self.humidity

    def getPressure(self):
        return self.pressure

    def measurementChanged(self):
        self.notifyObserver()

    def setMesurement(self, temp, humidity, pressure):
        self.temperature = temp
        self.humidity = humidity
        self.pressure = pressure
        self.measurementChanged()


class CurrentConditionDisplay(Observer):
    def __init__(self, weatherData):
        self.weatherData = weatherData
        self.temperature = 0.0
        self.humidity = 0.0
        self.pressure = 0.0
        weatherData.registerObserver(self)

    def update(self, temp, humidity, pressure):
        self.temperature = temp
        self.humidity = humidity
        self.pressure = pressure
        self.display()

    def display(self):
        print('temperature: {temp}, humidity: {humidity}, pressure: {pressure}'.format(temp=self.temperature, humidity=self.humidity, pressure=self.pressure))


if __name__ == '__main__':
    weatherdata = WeatherData()
    currentdisply = CurrentConditionDisplay(weatherdata)
    weatherdata.setMesurement(2.0, 3.0, 5.0)
