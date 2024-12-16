---
author: "andy"
title: "[linux]如何在Linode VPS上架設Ubuntu與安裝Nginx server (含帳號申請購買教學)"
image: "img/linode-linux-ubuntu-install-nginx.webp"
url: /linode-ubuntu-linux-install-nginx
draft: false
date: 2023-04-08
description: "架設網頁一般都會使用虛擬私有伺服器（VPS）來架設，而Linode是一家提供虛擬私有伺服器（VPS）主機服務的公司，如何在Linode VPS上架設Ubuntu與安裝Nginx(含Linode帳號申請購買教學)"
foreword: "架設網頁一般都會使用虛擬私有伺服器（VPS）來架設，Linode 是一家提供虛擬私有伺服器（VPS）主機服務的公司，成立於2003年，算是非常老的牌子了，但是服務算是非常穩定。Linode 提供的 VPS 主機服務，可以讓用戶在網路上租用虛擬的 Linux 伺服器，用來架設網站、部署應用程式、儲存資料等。"
tags: ["linux","nginx"]
archives: ["2023/04"]
---

<!-- 架設網頁一般都會使用虛擬私有伺服器（VPS）來架設，當然也會有人把網頁的服務架設在自己電腦上，但是考量網路穩定度，電費、硬體，或是停電那你架在自家的電腦的網頁服務也隨之而停。

因此就會需要VPS，也就是虛擬專用伺服器，每個月只要付上幾百元租金，24小時不會停止運做，即使家裡斷電了，網頁依然持續運作。因此使用VPS會是以較低的成本來架設網頁的方法之一。 -->

<!-- Linode 是一家提供虛擬私有伺服器（VPS）主機服務的公司，成立於2003年，算是非常老的牌子了，但是服務算是非常穩定。Linode 提供的 VPS 主機服務，可以讓用戶在網路上租用虛擬的 Linux 伺服器，用來架設網站、部署應用程式、儲存資料等。 -->


## Linode帳號註冊

### Step1 點擊下方連結👇

* <a href="https://login.linode.com/login" target="_blank">Linode註冊連結</a>

### Step2 點擊Sign up here註冊

![linode-signup](/img//blog/linode-signup.webp)

### Step3 使用google帳戶註冊

![linode-signup-google](/img//blog/linode-signup-google.webp)

### Step4 手機簡訊認證

![linode-phone-number-verification](/img//blog/linode-phone-number.webp)


### Step5 新增付款資料與帳單

這邊要注意的是地址跟姓名都要使用英文哦，新增信用卡後不會先扣款請放心。<br>
郵局中文轉英文字地址的工具：

* <a href="https://www.post.gov.tw/post/internet/SearchZone/index.jsp?ID=130112" target="_blank">郵局中文地址英譯</a>

![linode-add-payment](/img//blog/linode-add-payment.webp)

### Step6 註冊完成

![linode-account-success](/img//blog/linode-account-success.webp)



## 購買虛擬主機

註冊完成後回到後台，可以看見Create Linode的按鈕。
![create-linode](/img//blog/create-linode.webp)


這邊如果以前沒買過VPS的可以參考我的設定，選擇Ubuntu 18.04 LTS LTS版本（Long-term support長期支援）。會選擇Ubuntu是除了資源較多以外對新手比較友善，當然如果有其他熟悉操作的系統也都可以直接去做選擇。

<!-- 如果對於Ubuntu18.04. LTS vs Ubuntu18.10的比較有興趣，可以參考以下文章。 -->

**Region:**<br>
這邊主要選擇機房位置，這邊會根據你的所在地去做選擇，如果你是住在台灣選擇日本會比較好，因為距離比較近。若住在亞洲地區的話，則選擇日本或是新加坡。

![linode-distributions](/img//blog/linode-distributions.webp)

**Linode Plan：**<br>
這邊我們先點選Shared CPU，可以看到標準的話是Linode 2 GB ，這邊如果是要練習的話其實5 USD/月 就夠了，後續不夠用都可以進行升級。

當然如果你的網站本身需要架設資料庫、跑一些比較大型的服務可以選擇更大的Linode 2 GB、或是Linode 4 GB，主要差別在於RAM (隨機存取記憶體) 、儲存空間等等。

![linode-plan](/img//blog/linode-plan.webp)

**Linode Label:** <br>
這台主機的名稱，可以取專案名稱，未來你可以能會有好幾台VPS非常容易搞混，所以要輸入一個你可以清楚分辨的名稱，這邊要注意一下，這裏不支援 . 這個符號。

Root密碼這邊要注意的就是不要取態簡單的密碼，root就是超級使用者最高權限。盡量包含大小寫然後密碼長一點，然後記住這個密碼，我們每次ssh連線都會用到。


![linode-label-root-password](/img//blog/linode-label-root-password.webp)

**Optional Add-ons:**<br>
這邊看你自己有沒有備份需求，如果後面有需求都可以再做加購，確認規格跟方案都沒問題後就可以按下Create Linode。

![linode-add-oons](/img//blog/linode-add-oons.webp)

完整的設定請看👇
![buy-linode-vps](/img//blog/create-linode-page.webp)


按下Create Linode之後，他會需要一點時間安裝Ubuntu，看到轉圈圈轉完之後亮綠燈就完成了。這邊要記住妳個剛夠買的Linode ip位置，一般都是172.xxx.xxx.xxx之類的組合，這就是Server 的Ip位置。可以先複製起來，我們接下來要ssh連線過去安裝nginx。  


## 安裝Nginx

拿到IP位置之後，我們要透過終端機ssh連線過去過去。

    ssh 帳號@剛剛購買Linode的IP位置


假設剛剛購買的IP位置是172.123.123.123，就輸入

    ssh root@172.123.123.123


然後輸入密碼，這邊的密碼就是剛剛在購買Linode虛擬主機時，那邊設定的root密碼，輸入密碼直到看到這個畫面之後。

![ssh-to-server](/img//blog/ssh-2.webp)

然後再輸入apt-get update，這個指定主要是新 Ubuntu Linux 套件庫資訊，更新會稍微跑一下。

    apt-get update

更新完成後，就可以輸入apt-get install nginx，正式開始安裝nginx網頁司服器，沒錯nginx一行裝完了。

    apt-get install nginx

之後在瀏覽器輸入自己的server ip位置後，看到以下畫面就代表成功了。

![welcome-to-nginx](/img//blog/welcome-to-nginx.webp)



延伸閱讀：
* <a href="/post/nginx-multiple-domains-on-one-server" target="_blank">[Nginx設定]Virtual Host Nginx http server以及多個網域共用一台主機設定</a>
* <a href="/post/nginx-certbot-lets-encrypt-addssh" target="_blank">[SSL]Ubuntu＋Nginx透過 Certbot 免費取得 Let's Encrypt SSL憑證</a>
