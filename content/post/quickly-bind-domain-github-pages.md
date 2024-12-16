---
author: "andy"
title: "[GitHub]如何快速將自訂域名綁定到GitHubPages(適用於多數域名註冊商)"
image: "img/githubpage.webp"
url: /quickly-bind-domain-github-pages
draft: false
date: 2024-10-13
description: ""
tags: ["git"]
archives: ["2024/10"]
---



## 綁定申請好的網域

要將從域名註冊商購買的網域綁定到GithubPage，需要在DNS「網域名稱系統」(Domain Name System)管理這裡做一些設定。

一定要先將DNS「網域名稱系統」(Domain Name System)這邊的設定值設定好之後，再去綁定GitHubPages。不然容易出錯，我當時就等了一天一夜後，都一直沒又成功，後面重新設定之後才設定完成。


由於我是在Namecheap購買網域的，不管在哪裡購買網域，應該都會有一個DNS的地方，而Namecheap的是長這樣。

![namecheap](/img/blog/namecheap.webp)

這裡的值可以直接照抄，主要就是

    Host: @
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153


要注要的是最後一個 type <code>CNAME Record</code> Host www ，這裡要輸入的是，<code>你的 Github 帳號.github.io</code>不是專案名稱（repositories），更新完後儲存即可。


## 在 GitHub 上設置 GitHub Pages
一定要先設定DNS完在來設定GitHub Pages，步驟如下：

![githubpage](/img/blog/githubpage-1.webp)

![githubpage](/img/blog/githubpage-2.webp)

這邊需要確保，確保在 GitHub 儲存庫的設置中，Custom domain 部分正確設置為 你在域名註冊商買的網址，並且在 GitHub Pages 部分選擇了正確的分支來部署。

![githubpage](/img/blog/githubpage-3.webp)

這邊可能會跑一段時間，跑完之後只要出現以下畫面，點擊Visit site，就可以看到自己的網站了。

![githubpage](/img/blog/githubpage-4.webp)

## 總結


以下幾點都確認沒有錯就不會有問題了，

* 綁定申請好的網域
  * CNAME 記錄： DNS 設定當中需要<code>你的 Github 帳號.github.io</code>
  * A 記錄:綁定185.199.108.153、185.199.109.153、185.199.110.153、 185.199.111.153
* 在 GitHub 上設置 GitHub Pages
  * Custom domain為購買好的網址


使用GitHubPages，的好處就是免費，你完全不需要付server的錢，但是會有流量的限制，網站在建造初期的時候GitHubPages是一個非常好的選擇。

當然購買主機也是有不少好處，如何購買主機請參閱，日後會再更新其他主機商的購買教學。

* <a href="/post/nginx-multiple-domains-on-one-server" target="_blank">[Nginx設定]Virtual Host Nginx http server以及多個網域共用一台主機設定</a>



GitHubPages這邊會跟你說大約需要24-48小時，但是如果你真的都沒有設定錯的話，一般不需要這麼久。如果超過一天以上都沒有連線成功的話，可以直接重新設定了。若是有遇到問題歡迎詢問，若是真的有超過24小時才生效也歡迎留言給我。