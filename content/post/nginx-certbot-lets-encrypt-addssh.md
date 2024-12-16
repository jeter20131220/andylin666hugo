---
author: "andy"
title: "[SSL]Ubuntu＋Nginx透過 Certbot 免費取得 Let's Encrypt SSL憑證"
image: "img/LetsEncrypt.webp"
draft: false
date: 2023-03-25
description: "網域前面左上角也沒有🔓符號，所以google瀏覽會視為不安全，如何在Nginx透過 Certbot 免費取得 Let's Encrypt SSL憑證，讓自己的網頁從http變成https。"
tags: ["nginx","SSL"]
archives: ["2023/03"]
---

我們透過Nginx設定完http server後，會發現網域前面左上角也沒有🔓符號，所以google瀏覽器會視為不安全，這篇主要說明如何在Nginx透過 Certbot 免費取得 Let's Encrypt SSL憑證，讓自己的網頁從http變成https。。

上一篇文章有提到Nginx http server設定

* <a href="/post/nginx-multiple-domains-on-one-server" target="_blank">[Nginx設定]Virtual Host Nginx http server以及多個網域共用一台主機設定</a>

環境:

* Ubuntu 18.04
* nginx 1.14.0

## 安裝Certbot

這邊一樣需要先ssh上主機，關於ssh的連線有在 <a href="/post/nginx-multiple-domains-on-one-server" target="_blank">上一篇</a>做說明。ssh上主機後輸入以下指令：

    $ sudo add-apt-repository ppa:certbot/certbot
    $ sudo apt install python-certbot-nginx

## Nginx http server 設定
雖然Certbot在申請完SSL憑證之後會幫你修改Nginx的設定，但是我們要先將要申請SSL憑證的網域裡nginx的.conf檔當中的server_name先設定好。

    server{
     listen  80;
     # Certbot會找到與產生憑證相符的網域，並且把設定加這個區塊裡
     server_name www.example1.com ; # 你要申請SSL網域
     root  /var/www/website2;  # 你要申請SSL網域的網頁檔案路徑
     location / {
         index  index.html index.hml;
     }
    }

在申請SSL憑證的時候，Certbot會根據你設定在nginx當中的server_name找當與該網域相符的檔案做修改。

## 獲取憑證(SSL Certificate) 

使用 nginx 執行 certbot，-d代表指令我們要申請憑證的子網域。

    sudo certbot --nginx -d example1.com -d www.example1.com


  sudo certbot --nginx -d rdnotes.com -d www.renotes.com    

第一次使用Certbot，系統會要求輸入email並且請你同意使用者條款。這時候就選擇<code>Agree</code>

    Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
    -------------------------------------------------------------------------------
    1: No redirect - Make no further changes to the webserver configuration.
    2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
    new sites, or if you're confident your site works on HTTPS. You can undo this
    change by editing your web server's configuration.
    -------------------------------------------------------------------------------
    Select the appropriate number [1-2] then [enter] (press 'c' to cancel):2

接著會詢問是否要做https轉址，也就是將所有資源請求都導向https的網域，直接選2。

出現類似以下畫面就是申請成功了

    IMPORTANT NOTES:
    - Congratulations! Your certificate and chain have been saved at
    /etc/letsencrypt/live/example1.com/fullchain.pem. Your cert will
    expire on 2023-06-25. To obtain a new or tweaked version of this
    certificate in the future, simply run certbot again with the
    "certonly" option. To non-interactively renew *all* of your
    certificates, run "certbot renew"

做到這裡就可以去打開自己的網頁，看看左上角網域前是否有出現🔓，如果出現了就代表SSL憑證成功了。

## 自動更新憑證設定    

由於Let's Encrypt 是免費的，所以憑證有效期三個月，因此幾乎每三個月都要更新一次，不然憑證過期之後網站的https就會失效。


不過現在的Certbot 預設會啟動自動更新，會每週去確認ssl憑證的狀態，如果效期低於一個月會自動更新憑證。

可以輸入 <code> systemctl list-timers </code>看看自動更新試否正常。

!["confirm-certbot"](/img//blog/certbot.webp) 

可以透過以下指令，來測試Certbot的自動更新憑證是否正常運行。這個指令是用來模擬更新 SSL 憑證的過程，並不會真正地更新憑證。主要目的是在結束時顯示任何可能的錯誤，但不會實際更改您的憑證或伺服器設定。

    sudo certbot renew --dry-run

如果需要手動更新的話指令為：

     sudo certbot renew --v       

差別只在，"--dry-run" 這個選項主要是進行模擬更新，以確保更新過程能夠順利運作，同時也可以避免因錯誤設定而導致網站無法正常運作的問題。     
<!-- 會每個禮拜會去確認憑證狀態，如果效期低於一個月就會自動更新憑證，可輸入 systemctl list-timers 作確認。 -->
*** 
<!-- 
Let’s Encrypt 是一家新的證書頒發機構（Certificate Authority，簡稱 CA），其提供免費的 TLS/SSL 憑證再配合 Certbot 這個自動化工具，讓一般的網站可以很容易地使用 HTTPS 的安全加密網頁，設定很簡單，憑證的更新也可以自動處理。


我一開始也有這個疑問又是certbot，又是Let's Encrypt，倒底哪個是哪個，後來才知道，
 Let's Encrypt 是機構名稱。

GoDaddy ssl費用，
個人網站適合使用免費的ssl，
付費與免費的SSL，其實付費與免費的SSL主要的差異在賠償機制。 -->


<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla dui eu mi iaculis, sit amet congue lacus porta. Ut nec porta ex. Morbi nec massa sodales, finibus urna et, condimentum odio. Nulla ornare est ac egestas varius. Duis faucibus sapien non risus pretium vestibulum. Ut rutrum lorem ut euismod maximus. Vestibulum metus urna, ultrices nec sapien sit amet, malesuada tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ornare ipsum quis leo mattis, et tincidunt lacus feugiat. Aenean non vestibulum metus, vitae mattis sapien. Maecenas ut tortor viverra, finibus risus blandit, ultrices elit. Etiam cursus felis imperdiet ultrices ullamcorper. Ut diam nibh, porttitor at mauris laoreet, laoreet suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae blandit quam. -->