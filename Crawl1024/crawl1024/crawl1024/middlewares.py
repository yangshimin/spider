# -*- coding: utf-8 -*-

# Define here the models for your spider middleware
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/spider-middleware.html
from scrapy.downloadermiddlewares.retry import RetryMiddleware
from scrapy import log


class BlankPageRetryMiddleware(RetryMiddleware):
    def __init__(self, *args, **kw):
        super(BlankPageRetryMiddleware, self).__init__(*args, **kw)
        self.length_threshold = 100

    def process_response(self, request, response, spider):
        if len(response.body) < self.length_threshold:
            log.msg("blank page: {}".format(response.url), level=log.INFO)
            retries = request.meta.get('retry_times', 0) + 1
            log.msg("**********blank page: {url} retries: {retry}".format(url=response.url, retry=retries))
            reason = 'blank page {url}'.format(url=response.url)
            return self._retry(request, reason, spider) or response
        return response
