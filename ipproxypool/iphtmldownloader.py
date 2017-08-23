import requests
from ipproxypool.config import headers
import chardet

def get_page(url):
    s = requests.Session()
    response = s.get(url, headers=headers, timeout=3)
    # print(response.status_code)
    if response.status_code == 200:
        response.encoding = chardet.detect(response.content)['encoding']
        return response.text
