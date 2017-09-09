from urllib.parse import urlparse, urljoin,urlunparse
from posixpath import normpath


def url_join(base, url):
    url1 = urljoin(base, url)
    arr = urlparse(url1)
    path = normpath(arr[2])
    return urlunparse((arr.scheme, arr.netloc, path, arr.params, arr.query, arr.fragment))


if __name__ == '__main__':
    base = 'http://t66y.com'
    url ='htm_data/15/1709/2631818.html'
    res = url_join(base, url)
    print(res)