# encoding:utf-8
import sqlite3


class DataOutPut(object):
    def __init__(self):
        self.conn = sqlite3.connect("Mtime.db")
        self.create_table("Mtime")
        self.datas = []

    def create_table(self, table):
        value = '''
        id integer primary key,
        MovieId integer, 
        MovieTitle varchar(40) NOT NULL,
        isRelease integer NOT NULL,
        RatingFinal REAL DEFAULT 0.0,
        RDirectorFinal REAL DEFAULT 0.0,
        ROtherFinal REAL DEFAULT 0.0,
        RPictureFinal REAL DEFAULT 0.0,
        RStoryFinal REAL DEFAULT 0.0,
        RTotalFinal REAL DEFAULT 0.0,
        Usercount integer DEFAULT 0,
        AttitudeCount integer DEFAULT 0,
        TopListName varchar(20),
        Ranking integer,
        RankingUrl varchar(20),
        TotalBoxOffice varchar(20),
        TodayBoxOffice varchar(20),
        Rank integer DEFAULT 0
        '''
        #%d, %s, %d,%f,%f,%f,%f,%f,%f,%d,%d,%s,%d,%s,%s,%s,%d
        self.conn.execute('CREATE TABLE IF NOT EXISTS {table_name} ({field})'.format(table_name=table, field=value))

    def store_data(self, data):
        if data:
            self.datas.append(data)
            if len(self.datas) > 10:
                self.output_db('Mtime')
        else:
            return None

    def output_db(self, table):
        for data in self.datas:
            #print(type(data))
            # data是元组类型的数据结构，不能用%s占位
            #self.conn.execute("INSERT INTO %s VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)" % (table, data))
            self.conn.execute("INSERT INTO {tablename} (MovieId, movieTitle, isRelease, RatingFinal, RDirectorFinal,ROtherFinal, RPictureFinal, RStoryFinal, RTotalFinal, Usercount, AttitudeCount,TopListName, Ranking, RankingUrl, TotalBoxOffice, TodayBoxOffice, Rank) VALUES {data}".format(tablename=table, data=data))
            self.datas.remove(data)
        self.conn.commit()

    def output_end(self):
        if len(self.datas) > 0:
            self.output_db('Mtime')
        self.conn.close()
