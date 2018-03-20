from main import run
from apscheduler.schedulers.background import BackgroundScheduler
from pymongo import MongoClient


host = '127.0.0.1'
port = 27017
client = MongoClient(host, port)

dbjob_b = client.jobs_block


if __name__ == '__main__':
    sch = BackgroundScheduler()
    # sch.configure(gconfig=scheduler_config, prefix='')
    # day_of_week='mon-fri',  hour=8, minute=00, end_date='2020-05-30'
    job = sch.add_job(run, 'cron', day_of_week='mon-fri',  hour=21, minute=40)
    sch.start()

