---
author: "andy"
title: "[Nginx設定]Virtual Host Nginx http server與多個網域共用一台主機設定"
image: "img/nginx-1.webp"
draft: false
date: 2023-03-18
description: "兩個網域要指向同一個IP位置nginx設定，例如www.example1.com、www.example.com分別要指向website1、website2，而這兩個網頁的檔案內分別都放置各自的index.html。"
tags: ["nginx"]
archives: ["2023/03"]
---
 

使用情境：兩個網域要指向同一個 IP 的設定。  

假設有兩個網域www.example1.com、www.example.com分別要指向website1、website2，而這兩個網頁的檔案內分別都放置各自的index.html。而假設主機的IP是192.162.123.123。

* www.example1.com 要指向192.162.123.123
* www.example2.com也要指向192.162.123.123


nginx多個網域共用一台主機，需要做兩個設定：
* Nginx設定
* DNS設定


## Nginx設定
    $ ssh 帳號@主機


example ssh to 192.162.123.123:

    $ ssh root＠192.162.123.123

<!-- <img class="py-4 img-fluid" src="/static/img/blog/ssh-1.webp"> -->


輸入ssh指令按下enter後可以看到輸入密碼的欄位
![ssh-to-server](/img/blog/ssh-1.webp)
密碼輸入成功後，如果出現以下畫面就表示ssh成功了
![ssh-to-server](/img//blog/ssh-2.webp)

延續上圖看到的畫面之後，現在我們要找到nginx所在的路徑，一般都會在<code>/etc/nginx</code>。因此我們直接cd /etc/nginx資料夾。

    $ root@localhost:~# cd /etc/nginx

當我們進入到<code>/etc/nginx</code>之後，輸入ls之後會看到很多檔案。

     $ root@localhost:/etc/nginx/# ls

![nginx-file](/img//blog/nginx-file.webp) 



而我們今天會用到 <code>conf.d</code>資料夾、<code>nginx.conf</code>檔案， 畫面停留在上圖之後

    $ cd conf.d/ 


Step1:在這個路徑下新增檔案

    $ sudo touch website1.conf

Step2:編輯新增的檔案website1.conf

     $ sudo vi website1.conf

Step3:進入編輯模式後，要按 i 才可以編輯，然後貼上這段。

    server{
     listen  80;
     server_name www.example1.com ;
     root  /var/www/website1;
     location / {
         index  index.html index.hml;
     }
    }

修改好要儲存要先按 esc，然後輸入 :wq 後按 enter 跳出。

重複上述步驟step1-step3，新增website2.conf，並且貼上step3的設定改為：

    server{
     listen  80;
     server_name www.example2.com ;
     root  /var/www/website2;
     location / {
         index  index.html index.hml;
     }
    }

/var/www/website2 指的就是網頁放在主機上的路徑，這段設定就是當你輸入網址www.example2.com，他會找到/var/www/website2裡面的index.html檔案。


<code>listen 80</code>是將Web server開在port 80的意思，而主機對外預設就是port 80。

### nginx.conf

nginx.conf的部分就是要新增引入所有的.conf檔案的指令。

nginx.conf檔案位置一般都會放在/etc/nginx/nginx.conf

    $ cd /etc/nginx/
    $ sudo vi nginx.conf

再nignx.conf檔案裡面找到有宣告include的地方，加入這行指令。

    include /etc/nginx/conf.d/*.conf; 

修改好要儲存要先按 esc，然後輸入 :wq 後按 enter 跳出。

重啟nginx:

    $ sudo systemctl restart nginx

nginx設定完成！    


## DNS設定
我們要將購買好的網域指向我們的主機IP，因此來到購買網域的DNS設定，點選你要指向主機的網域。

![dns-setting](/img//blog/dns-1.webp) 

按下DNS後會看到類似於以下畫面的地方，按下編輯

![dns-setting](/img//blog/dns-2.webp) 

將主機IP輸入後按下儲存，DNS設定就完成了。

![dns-setting](/img//blog/dns-3.webp) 


將example1.com設定完成後，再重複一樣的步驟，再example2.com指向同一個主機即可，因為我們剛剛在nginx設定就已經會將這兩個網域分別載入不同路徑下的html。

設定完成後一般Godaddy都會跟你說要48小時內才會生效，但是其實大概五分鐘後就生效了。

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec porta ex. Morbi nec massa sodales, finibus urna et, condimentum odio. Nulla ornare est ac egestas varius. Duis faucibus sapien non risus pretium vestibulum. Ut rutrum lorem ut euismod maximus. Vestibulum metus urna, ultrices nec sapien sit amet, malesuada tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ornare ipsum quis leo mattis, et tincidunt lacus feugiat. Aenean non vestibulum metus, vitae mattis sapien. Maecenas ut tortor viverra, finibus risus blandit, ultrices elit. Etiam cursus felis imperdiet ultrices ullamcorper. Ut diam nibh, porttitor at mauris laoreet, laoreet suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae blandit quam. -->