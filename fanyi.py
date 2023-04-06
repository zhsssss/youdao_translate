# -*- coding: utf-8 -*-
# @Time : 2023/4/4 16:09
# @Author : zhi
# @File : fanyi
# @Project : pythonProject1
import hashlib
import time
import requests
import subprocess
cookies = {
    'OUTFOX_SEARCH_USER_ID': '-829527920@10.116.96.124',
    'OUTFOX_SEARCH_USER_ID_NCOO': '1115867149.17877',
}
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    # 'Cookie': 'OUTFOX_SEARCH_USER_ID=-829527920@10.110.96.154; OUTFOX_SEARCH_USER_ID_NCOO=1115867149.17877',
    'Origin': 'https://fanyi.youdao.com',
    'Referer': 'https://fanyi.youdao.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
mysticTime = str(int(time.time() * 1000))
# mysticTime="1680600925925"
client = "fanyideskweb"
product = "webfanyi"
key = "very"
s = f'client=fanyideskweb&mysticTime={mysticTime}&product=webfanyi&key=fsdsogkndfokasodnaso'
sign = hashlib.md5(s.encode(encoding='utf-8')).hexdigest()
data = {
    'i': key,
    'from': 'auto',
    'to': '',
    'domain': '0',
    'dictResult': 'true',
    'keyid': 'webfanyi',
    'sign': sign,
    'client': client,
    'product': product,
    'appVersion': '1.0.0',
    'vendor': 'web',
    'pointParam': 'client,mysticTime,product',
    'mysticTime': mysticTime,
    'keyfrom': 'fanyi.web',
}
response = requests.post('https://dict.youdao.com/webtranslate', cookies=cookies, headers=headers, data=data).text
result = subprocess.run(['node', 'get.js', 'data', response], capture_output=True)
output = result.stdout.decode('utf-8')
print(output)
