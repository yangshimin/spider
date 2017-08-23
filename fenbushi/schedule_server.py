# encoding:utf-8
from multiprocessing.managers import BaseManager
from multiprocessing import Process, Queue
from fenbushi.urlmanage import UrlManager
from fenbushi.dataoutput import DataOutPut
from multiprocessing import freeze_support
import time
import sys
sys.setrecursionlimit(1000000)


class NodeManage(object):
    def start_manager(self, url_q, result_q):
        # 创建一个分布式服务器
        # 把创建的网络注册到网络上，利用register()方法，callable关联了Queue对象,把Queue对象暴露在网络中
        BaseManager.register('get_task_queue', callable=lambda: url_q)
        BaseManager.register('get_result_queue', callable=lambda: result_q)
        # 绑定端口8001， 设置验证口令‘baike’。这个相当于对象的初始化
        manager = BaseManager(address=('127.0.0.1', 8001), authkey=b'baike')
        return manager

    def url_manager_proc(self, url_q, conn_q, root_url):
        url_manager = UrlManager()
        url_manager.add_new_url(root_url)
        while True:
            while (url_manager.has_new_url()):
                # 从url管理器中获取新的url
                new_url = url_manager.get_new_url()
                # 将新的url put给工作节点
                url_q.put(new_url)
                print('old_url={num}'.format(num=url_manager.old_url_size()))
                # 加一个判断条件，当爬取2000个链接后就关闭，并保存进度
                if (url_manager.old_url_size() > 2000):
                    # 通知爬行节点结束
                    url_q.put('end')
                    print('控制节点发起结束通知')
                    # 关闭管理节点，同时存储set状态,便于下次从断点处继续爬取，避免了重头爬取
                    url_manager.save_process('new_urls.txt', url_manager.new_urls)
                    url_manager.save_process('old_urls.txt', url_manager.old_urls)
                    return

            try:
                if not conn_q.empty():
                    urls = conn_q.get(True)
                    url_manager.add_new_urls(urls)
            except BaseException as e:
                # 延时休息
                time.sleep(0.1)

    def result_solve_proc(self, result_q, conn_q, store_q):
        while True:
            try:
                if not result_q.empty():
                    # 如果队列为空且block为True
                    content = result_q.get(True)
                    if content['new_urls'] == 'end':
                        print('结果分析进程接收通知然后结束')
                        store_q.put('end')
                        return
                    conn_q.put(content['new_urls'])
                    store_q.put(content['data'])
                else:
                    time.sleep(0.1)
            except BaseException as e:
                time.sleep(0.1)

    def store_proc(self, store_q):
        output = DataOutPut()
        while True:
            if not store_q.empty():
                data = store_q.get()
                if data == 'end':
                    print('存储进程接收通知然后结束')
                    output.output_end(output.filepath)
                    return
                else:
                    output.store_data(data)
            else:
                time.sleep(0.1)


if __name__ == '__main__':
    url_q = Queue()
    conn_q = Queue()
    result_q = Queue()
    store_q = Queue()
    node = NodeManage()
    freeze_support()
    manage = node.start_manager(url_q, result_q)
    url_manager_proc = Process(target=node.url_manager_proc, args=(url_q, conn_q, 'https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E7%88%AC%E8%99%AB'))
    result_solve_proc = Process(target=node.result_solve_proc, args=(result_q, conn_q, store_q))
    store_proc = Process(target=node.store_proc, args=(store_q,))
    url_manager_proc.start()
    result_solve_proc.start()
    store_proc.start()
    # get_server(): Return server object with serve_forever() method and address attribute
    # serve_forever: run the server forever
    manage.get_server().serve_forever()
