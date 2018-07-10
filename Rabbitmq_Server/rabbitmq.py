import threading
import pika
from pika import credentials
from pika import BasicProperties
from config import *


class BaseRabbitMq(object):
    def __init__(self):
        self.connection = None
        self.channel = None

    def create_connection(self):
        self.connection = self.connect()
        return self.connection

    def connect(self):
        username = BASE_CONNECT_CONFIG.get('username')
        password = BASE_CONNECT_CONFIG.get('password')
        if '' == username:
            print('RabbitMQ连接错误！用户名为空！')
        if '' == password:
            print('RabbitMQ连接错误！密码为空！')

        certificate = self._credentials(username, password)
        connect_params = pika.ConnectionParameters(host=BASE_CONNECT_CONFIG.get('host'),
                                                   port=BASE_CONNECT_CONFIG.get('port'),
                                                   virtual_host=BASE_CONNECT_CONFIG.get('virtual_host'),
                                                   credentials=certificate,
                                                   channel_max=BASE_CONNECT_CONFIG.get('channel_max'),
                                                   frame_max=BASE_CONNECT_CONFIG.get('frame_max'),
                                                   heartbeat_interval=BASE_CONNECT_CONFIG.get('heartbeat_interval'),
                                                   ssl=BASE_CONNECT_CONFIG.get('ssl'),
                                                   ssl_options=BASE_CONNECT_CONFIG.get('ssl_options'),
                                                   connection_attempts=BASE_CONNECT_CONFIG.get('connection_attempts'),
                                                   retry_delay=BASE_CONNECT_CONFIG.get('retry_delay'),
                                                   socket_timeout=BASE_CONNECT_CONFIG.get('socket_timeout'),
                                                   locale=BASE_CONNECT_CONFIG.get('locale'),
                                                   backpressure_detection=BASE_CONNECT_CONFIG.get('backpressure_detection')
                                                   )

        if not self.connection:
            return pika.BlockingConnection(connect_params)
        
    def _credentials(self, username, password):
        '''返回一个plain credentials对象
        :param username:用户名
        :param password:密码
        :return:pika_credentials.PlainCredentials
        '''
        return credentials.PlainCredentials(username, password)


def callback(ch, method, properties, body):
    # pass
    print(body)
    ch.basic_ack(delivery_tag=method.delivery_tag)


class SampleQueueRabbitMq(BaseRabbitMq):

    def __init__(self):
        super(SampleQueueRabbitMq, self).__init__()
        self.conn = self.create_connection()
        self.channel = self.conn.channel()

    def create_queue_or_exchange(self, queue_name):

        self.channel.queue_declare(queue=queue_name, durable=True)

    def send_message(self, queue_name, msg):
        # RabbitMQ a message can never be sent directly to the queue, it always needs to go through an exchange
        self.channel.basic_publish(exchange='',
                                   routing_key=queue_name,  # 当未定义exchange时，routing_key需和queue_name的值保持一致
                                   body=msg,  # 消息内容
                                   properties=BasicProperties(delivery_mode=2,  # 消息的持久化,这里还可以添加附带参数,
                                                                                # 客户通过回调函数的位置参数prop.参数名获取
                                                              )
                                   )

    def consume_message(self,  queue_name):
        self.channel.basic_qos(prefetch_count=1)  # 如果某个消费者还有1条消息未处理完，将不能接收新的消息

        # 发送方和接收方不知道谁首先连接到RabbitMQ，故双方连接上来都先声明一个队列
        self.channel.queue_declare(queue=queue_name, durable=True)
        # 消费消息
        self.channel.basic_consume(callback,
                                   queue=queue_name,
                                   no_ack=False)

        self.channel.start_consuming()


class FanOutRabbitMq(BaseRabbitMq):
    def create_queue_or_exchange(self):
        self.channel = self.connection.channel()
        self.channel.exchange_declare(exchange=EXCHANGE_CONFIG['exchange_name'],
                                      exchange_type=EXCHANGE_CONFIG['exchange_type']['fanout'])

    def send_message(self, msg):
        self.channel.basic_publish(exchange=EXCHANGE_CONFIG['exchange_name'],
                                   routing_key=EXCHANGE_CONFIG['routing_key'],
                                   body=msg,
                                   properties=BasicProperties(delivery_mode=2,)
                                   )
        self.connection.close()

    def consume_message(self):
        """
        若想多个队列绑定到exchange 上 ,多次执行不同队列参数的consume_message即可
        """
        self.channel.exchange_declare(exchange=EXCHANGE_CONFIG['exchange_name'],
                                      exchange_type=EXCHANGE_CONFIG['exchange_type']['fanout'])

        result = self.channel.queue_declare(exclusive=True)
        queue_name = result.method.queue

        # 将队列与exchange进行绑定
        self.channel.queue_bind(exchange=EXCHANGE_CONFIG['exchange_name'],
                                queue=queue_name)

        self.channel.basic_consume(callback,  # 如果收到消息，就调用callback
                                   queue=queue_name,
                                   no_ack=False
                                   )

        self.channel.start_consuming()


class DirectRabbitMq(BaseRabbitMq):
    def create_queue_or_exchange(self):
        self.channel = self.connection.channel()
        self.channel.exchange_declare(exchange=EXCHANGE_CONFIG['exchange_name'],
                                      exchange_type=EXCHANGE_CONFIG['exchange_type']['direct'])

    def send_message(self, queue_name, msg):
        self.channel.basic_publish(exchange=EXCHANGE_CONFIG['exchange_name'],
                                   routing_key=EXCHANGE_CONFIG['routing_key'],
                                   body=msg,
                                   properties=BasicProperties(delivery_mode=2,)
                                   )
        self.connection.close()

    def consume_message(self, queue):
        """
        若想多个队列绑定到exchange 上 ,多次执行不同队列参数的consume_message即可
        """
        self.channel.basic_qos(prefetch_count=1)
        self.channel.exchange_declare(exchange=EXCHANGE_CONFIG['exchange_name'],
                                      exchange_type=EXCHANGE_CONFIG['exchange_type']['direct'])
        self.channel.queue_declare(queue=queue, durable=EXCHANGE_CONFIG.get('queue_durable'))

        # 将队列与exchange进行绑定
        self.channel.queue_bind(exchange=EXCHANGE_CONFIG['exchange_name'],
                                queue=queue)

        self.channel.basic_consume(callback,  # 如果收到消息，就调用callback
                                   queue=queue,
                                   no_ack=False
                                   )

        self.channel.start_consuming()


if __name__ == '__main__':
    r = FanOutRabbitMq()
    conn = r.create_connection()
    r.create_queue_or_exchange()
    # r.send_message('exchange_queue_1', 'hello, yangshimin')
    r.consume_message('exchange_queue_1')
