---
author: "andy"
title: "更新網站內容方法"
image: "img/hugo.webp"
url: /ssh-server-update-content
draft: true
date: 2023-04-11
description: ""
tags: ["hugo"]
archives: ["2023/04"]
---

git -用public放上git測試看看

filezila 

rsync

linux scp教學

scp vs rsync:
Copy files with SCP and Rsync 

scp -r 

sshpass -p 'Zx830509Z4506270' rsync -r /app/* root@139.162.119.157:/var/www/html/rdnotes
rsync -r 意思
rsync -avz意思

cron jobs,

app alpine:3

docker run -it -v /Users/linyuan/Desktop/RDnotes/public:/app alpine:3 /bin/sh

apk add sshpass

apk add rsync

apk add openssh

<a href="https://zhuanlan.zhihu.com/p/396557963" target="_blank">Linux 中的 scp 命令居然有大学问，它与rsync命令有啥区别，速看！</a>
