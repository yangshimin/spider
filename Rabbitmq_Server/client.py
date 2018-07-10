from rabbitmq import SampleQueueRabbitMq

if __name__ == '__main__':
    r = SampleQueueRabbitMq()
    queue_list = ['queue_1', 'queue_2', 'queue_3', 'queue_4', 'queue_5', 'queue_6']
    for queue in queue_list:
        r.create_queue_or_exchange(queue)
        r.send_message(queue, 'hello, yangshimin')
