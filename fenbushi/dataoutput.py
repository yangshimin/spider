# encoding:utf-8
import codecs
import time


class DataOutPut(object):
    def __init__(self):
        self.filepath = 'baike_{time}.html'.format(time=time.strftime("%y_%m_%d_%H_%M_%S", time.localtime()))
        self.output_head(self.filepath)
        self.datas = []

    def store_data(self, data):
        if data is None:
            return
        self.datas.append(data)
        if len(self.datas) > 10:
            self.output_html(self.filepath)

    def output_head(self, path):
        fout = codecs.open(path, 'w', encoding='utf-8')
        fout.write('<html>')
        fout.write('<body>')
        fout.write('<table>')
        fout.close()

    def output_html(self, path):
        # 因为之前已经写入了头，所以这次用追加的方式写入
        fout = codecs.open(path, 'a', encoding='utf-8')
        for data in self.datas:
            fout.write('<tr>')
            fout.write('<td>{url}</td>'.format(url=data['url']))
            fout.write('<td>{title}</td>'.format(title=data['title']))
            fout.write('<td>{content}</td>'.format(content=data['content']))
            fout.write('</tr>')
            self.datas.remove(data)
        fout.close()

    def output_end(self, path):
        fout = codecs.open(path, 'a', encoding='utf-8')
        fout.write('</table>')
        fout.write('</body>')
        fout.write('</html>')
        fout.close()
