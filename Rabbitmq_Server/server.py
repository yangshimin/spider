from rabbitmq import SampleQueueRabbitMq
from multiprocessing import Process, cpu_count
import os


def test_server(queue_name):
    r = SampleQueueRabbitMq()
    print('Consume Queue: {}'.format(queue_name))
    print('Sub Process: {}'.format(os.getpid()))
    r.consume_message(queue_name)


if __name__ == '__main__':
    print('Cpu Count: {}'.format(cpu_count()))
    print('Main Process: {}'.format(os.getpid()))
    plist = []
    queue_list = ['queue_1', 'queue_2', 'queue_3', 'queue_4', 'queue_6', 'queue_5']
    for i in range(1, len(queue_list) + 1):
        print('queue_{}'.format(i))
        p = Process(target=test_server, args=('queue_{}'.format(i), ))
        p.start()
        plist.append(p)

    for processing in plist:
        processing.join()

