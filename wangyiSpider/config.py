MONGO_URL = 'localhost'
MONGO_DB = 'wangyi_comment'

import requests

# 要访问的目标页面
targetUrl = "http://test.abuyun.com/proxy.php"

# 代理服务器
proxyHost = "http-dyn.abuyun.com"
proxyPort = "9020"

# 代理隧道验证信息
proxyUser = "H0LJ44DO4I9NG48D"
proxyPass = "03DDA970549AD599"

proxyMeta = "http://%(user)s:%(pass)s@%(host)s:%(port)s" % {
    "host": proxyHost,
    "port": proxyPort,
    "user": proxyUser,
    "pass": proxyPass,
}

print(proxyMeta)

proxies = {
    "http": proxyMeta,
    "https": proxyMeta,
}
