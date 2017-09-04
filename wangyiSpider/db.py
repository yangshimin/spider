import pymongo
from config import MONGO_DB, MONGO_URL


class MongoClient(object):
    def __init__(self, mongo_url=MONGO_URL, mongo_db=MONGO_DB):
        # self.mongo_url = mongo_url
        # self.mong_db = mongo_db
        self.client = pymongo.MongoClient(mongo_url)
        self.db = self.client[mongo_db]

    def save_to_mongo(self, song_name, data):
        if data.get('commentId'):
            self.db[song_name].update({'commentId': data['commentId']}, {'$set': data}, True)


