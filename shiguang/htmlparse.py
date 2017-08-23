# encoding: utf-8
import re
import json
from shiguang.htmldownloader import  HtmlDownloader
# http://movie.mtime.com/228267/


class HtmlParser(object):
    def parse_url(self, html):
        pattern = re.compile("http://movie.mtime.com/\d+/")
        urls = pattern.findall(html)
        urls = list(set(urls))
        return urls

    def parse_page(self, response):
        pattern = re.compile('var.*= (.*?);')
        res = pattern.findall(response)[0]
        if res:
            res = json.loads(res)
        else:
            return None

        try:
            is_release = res.get('value').get('isRelease')
            res_dict = res.get('value')
        except Exception as e:
            print(e.args)
            return None
        if is_release:
            return self._get_release(res_dict)
        else:
            return self._get_no_release(res_dict)

    def _get_release(self, result):
        try:
            # 电影名
            movieTitle = result.get("movieTitle")
            # 是否上映,因为sqlite3没有布尔值的存储类型，布尔值会转为0和1
            isRelease = 1 if result.get("isRelease") else 0
            movieRating = result.get("movieRating")
            # 电影ID
            MovieId = movieRating.get("MovieId")
            # 平均评分
            RatingFinal = movieRating.get("RatingFinal")
            # 导演评分
            RDirectorFinal = movieRating.get("RDirectorFinal")
            # 其他评分
            ROtherFinal = movieRating.get("ROtherFinal")
            # 画面评分
            RPictureFinal = movieRating.get("RPictureFinal")
            # 故事评分
            RStoryFinal = movieRating.get("RStoryFinal")
            # 总评分
            RTotalFinal = movieRating.get("RTotalFinal")
            # 评分人数
            Usercount = movieRating.get("Usercount")
            # 想看的人数
            AttitudeCount = movieRating.get("AttitudeCount")
            # 因为刚上映的电影有票房一类之说，已经上映很久的电影则没有，相反可能会在一些榜单内
            topList = result.get('topList')
            # 票房
            boxOffice = result.get("boxOffice")
            if topList and boxOffice:
                TopListName = topList.get("TopListName")
                # 榜单内排名
                Ranking = topList.get("Ranking")
                # 榜单链接
                RankingUrl = topList.get("RankingUrl")
                TotalBoxOffice = boxOffice.get("TotalBoxOffice")
                TodayBoxOffice = boxOffice.get("TodayBoxOffice")
                Rank = boxOffice.get("Rank")

            elif topList and boxOffice is None:
                # 榜单名
                TopListName = topList.get("TopListName")
                # 榜单内排名
                Ranking = topList.get("Ranking")
                # 榜单链接
                RankingUrl = topList.get("RankingUrl")
                TotalBoxOffice = 'Not detailed'
                TodayBoxOffice = 'Not detailed'
                Rank = 'Not detailed'
            elif boxOffice and topList is None:
                # 总票房
                TotalBoxOffice = boxOffice.get("TotalBoxOffice")
                TodayBoxOffice = boxOffice.get("TodayBoxOffice")
                Rank = boxOffice.get("Rank")
                TopListName = 'No'
                Ranking = 'No'
                RankingUrl = 'No'
            else:
                TopListName = 'No'
                Ranking = 'No'
                RankingUrl = 'No'
                TotalBoxOffice = 'Not detailed'
                TodayBoxOffice = 'Not detailed'
                Rank = 'Not detailed'

            return (MovieId, movieTitle, isRelease, RatingFinal, RDirectorFinal,
                    ROtherFinal, RPictureFinal, RStoryFinal, RTotalFinal, Usercount, AttitudeCount,
                    TopListName, Ranking, RankingUrl, TotalBoxOffice, TodayBoxOffice, Rank)
        except Exception as e:
            print(e.args)
            return None

    def _get_no_release(self, result):
        try:
            movieTitle = result.get("movieTitle")
            isRelease = 1 if result.get("isRelease") else 0
            movieRating = result.get("movieRating")
            MovieId = movieRating.get('MovieId')
            RatingFinal = 'Unkonwn'
            RDirectorFinal = 'Unkonwn'
            ROtherFinal = 'Unkonwn'
            RPictureFinal = 'Unkonwn'
            RStoryFinal = 'Unkonwn'
            RTotalFinal = 'Unkonwn'
            Usercount = movieRating.get("Usercount")
            AttitudeCount = movieRating.get("AttitudeCount")
            TotalBoxOffice = 'No'
            TodayBoxOffice = 'No'
            Rank = 'No'
            TopListName = 'No'
            Ranking = 'No'
            RankingUrl = 'No'

            return (MovieId, movieTitle, isRelease, RatingFinal, RDirectorFinal,
                    ROtherFinal, RPictureFinal, RStoryFinal, RTotalFinal, Usercount, AttitudeCount,
                    TopListName, Ranking, RankingUrl, TotalBoxOffice, TodayBoxOffice, Rank)
        except Exception as e:
            print(e.args)
            return None


# http://theater.mtime.com/China_Sichuan_Province_Chengdu/

if __name__ == '__main__':
    url = 'http://service.library.mtime.com/Movie.api?Ajax_CallBack=true&Ajax_CallBackType=Mtime.Library.Services&Ajax_CallBackMethod=GetMovieOverviewRating&Ajax_CrossDomain=1&Ajax_RequestUrl=http%3A%2F%2Fmovie.mtime.com%2F229733%2F&t=20177219514048309&Ajax_CallBackArgument0=229733'
    html_download = HtmlDownloader()
    html = html_download.download_page(url)
    parser = HtmlParser()
    res = parser.parse_page(html)
    print(res)
