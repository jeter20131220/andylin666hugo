---
author: "andy"
title: "[hugo]簡單易懂的 Hugo 入門教學：從安裝到基本使用 - 輕鬆打造個人網站"
image: "img/hugo-addfunction.webp"
url: /hugo-basic-get-started
draft: false
date: 2023-05-01
description: "學習如何安裝 Hugo、創建靜態網站，以及發布您的網站。這個入門教學將帶您深入了解這個快速、簡單的靜態網站生成器。"
tags: ["hugo"]
archives: ["2023/05"]
annotations: false
---
{{< hide >}}
<!-- 
架設網站的方法千方百種，功能強大的有Wordpress、Wix，個人部落格的有Medium、Strikingly等等有沒有誰更好，只有適不適合自己。

若是以個人網站來說，如果你本身會一點程式語言，我強烈推薦使用hugo。除了佈景主題多、速度快以外，除了有佈景主題的樣式可以選，還可以大幅度的客製化你的網站。

## Wordpress vs Hugo

### Wordpress:

先說說大家耳熟能詳的Wordpress，wordpress是一種 內容管理系統，Content Management System, CMS，架設wordpress不需要會程式語言也可以完成。


使用過wordpress的都知道，客製化的幅度有限，而且本身是動態架構網站，雖然有很多的外掛，但是除了速度慢以外重點是有漏洞、不安全。

架設 WordPress 你不需要寫任何程式，且官網提到說「整個網路有 38% 的網站使用 WordPress 架設」 -->
{{< /hide >}}

## hugo介紹


### 什麼是 Hugo??

hugo是最流行的靜態頁面生成器(Static Site Generator)之一，連官方都直接跩起來的聲稱自己是世界上最快的架站框架「The world’s fastest framework for building websites」。

* 純靜態架構非常安全
* 速度快 
* 對於SEO友善

近幾年來，也越來越多人開始將自己的wordpress個人網站或部落格轉成純靜態架構。
{{< hide >}}

<!-- 會寫程式真的有非常多好處，不得不說，程式語言真的是非常值得耕耘的領域，舉個例子如果你會寫程式的話，基本上你可以完全的客製化自己的網站，看到其他的網站有一些很酷又很實用的功能，你馬上就可以為自己的網站新增一個。 -->



<!-- 在介紹什麼是 Hugo 之前，我想先對 Hugo 做一些描述，讓我們先有個初步印象：

A Framework, 一種框架工具
It's open-source, 開放原始碼
A static site generator written in Go, 靜態網頁生成器，或稱靜態站點產生器，用 Go 寫的
Build a site easily and quickly by yourself, 你可以輕鬆迅速的構建自己的網站
Hugo 是基於 JAM stack 來建置網站的

wordpress可以客製化得程度還是非常有限
(雖然說WordPress中有不少的快取外掛，就是用來減少對資料庫的請求，讓網站開啟的速度更快速。)

hugo 靈活性非常高， -->
{{< /hide >}}

### hugo 優勢
hugo有一個超級大的優勢，就是超快，不是只有快而已，無論是打包速度、載入速度、建置速度真的都是非常快，曾經在網路上看到一張很有意思的圖。

![hugo-faster](https://i.imgur.com/hpsYu6R.jpg)


除了快以外還包含了以下優勢:

* 安全：由於每個頁面都是獨一無二的，從而減少了可能出現的安全漏洞
* 快速：減少網站訪問載入時間
* 周全：會把代管主機前端的 Varnish 網頁快取系統考慮在內
* 經濟：減少使用網頁代管主機的資源（CPU/RAM）
* 暫存：可以在發布內容到網站之前測試和修改 


### 誰會需要 Hugo
由於hugo畢竟是靜態頁面生成器，並不像Wordpress有提供使用者後台管理讓不太會寫程式的人也能夠架站，因此在操作Hugo時還是要會基本的html、css、javascript才能夠完全客製化自己的網站哦。

![html-css-js](/img//blog/html-css-js.webp)

## hugo安裝教學

由於不同的系統對於hugo安裝方法都不太一樣，以下是在 Windows、Mac 和 Linux 上安裝 Hugo 的基本步驟：

### 在Windows上安裝 Hugo
請前往 Hugo 的官方網站下載最新版本的 Hugo。
解壓縮下載的文件，將 hugo.exe 文件放在一個易於訪問的地方，例如 C:\hugo。
將 C:\hugo 添加到您的 PATH 環境變量中。您可以在 此處 找到詳細的步驟。
現在您可以在命令提示符中運行 hugo 命令。

{{< youtube G7umPCU-8xc >}}


### 在Mac上安裝 Hugo
使用 Homebrew 安裝 Hugo。在終端中輸入以下命令：

    brew install hugo

安裝完成後，運行以下命令以確認 Hugo 是否已成功安裝：

    hugo version

如果成功安裝，您將看到 Hugo 的版本信息。

### 在Linux上安裝 Hugo

    sudo apt install hugo

前往 Hugo 的官方網站下載最新版本的 Hugo。解壓縮下載的文件，將 hugo 文件放在一個易於訪問的地方，例如 /usr/local/bin 、 /usr/bin，運行以下命令以確認 Hugo 是否已成功安裝：

    hugo version

如果成功安裝，將看到 Hugo 的版本信息。

    hugo v0.91.2+extended darwin/arm64 BuildDate=unknown

## 創建 Hugo 網站
安裝好後就要來新增我們第一個hugo網站。 一定要確保有新增到hugo的環境，輸入hugo verison可以看得到版本資訊。

快速開始創建hugo網站：

* Create a site 創建新網站
* hugo themes 安裝佈景主題
* Add content 創建內容
* Publish the site 發布網站


### Create a site :創建新網站
如果要創建一個乾淨的hugo網站，只需要cd到你想要的指定路徑之後。輸入以下指令

    hugo new site 網站的名稱

例如我要新增一個叫做exampleSite的網站，指令則為：

      hugo new site exampleSite

輸入完指令後，看到以下的畫面就代表成功了。

    Congratulations! Your new Hugo site is created in /Users/andy/Desktop/hugodemo/exampleSite.

    Just a few more steps and you're ready to go:

    1. Download a theme into the same-named folder.
       Choose a theme from https://themes.gohugo.io/ or
       create your own with the "hugo new theme <THEMENAME>" command.
    2. Perhaps you want to add some content. You can add single files
       with "hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>".
    3. Start the built-in live server via "hugo server".

### Hugo Themes:安裝佈景主題
我們新建立出來的hugo new site  非常的乾淨，乾淨到什麼都沒有，因此我們可以到以下連結去找一個自己喜歡的主題:


* <a href="https://themes.gohugo.io/" target="_blank">hugo 主題列表</a>
{{< hide >}}
<!-- 使用主題的好處在於可以快速地地為自己的網站添加一個專業的外觀和感覺，而不必自己從頭開始設計和編寫 CSS 和 HTML。

一定會比從頭到尾寫一個網站來得快。而hugo支援的主題非常多種，功能也非常強大，輪播圖、文章分類、文章分頁，文章標籤等等幾乎包含了所有的部落格功能都有。 -->

<!-- 可以直接到github得連結去下載zip，也可以從終端機用git clone的方式複製到你想要的路徑，準備好主題後我們要放到themes的目錄底下。 -->
{{< /hide >}}




![hugo-faster](/img//blog/hugo-themes.webp)




我這裡選擇的主題為hugo-universal-theme，這是一個功能非常完全的主題，做為練習也可以跟我選一樣的主題，當然你也可以選擇自己喜歡的。

* <a href="https://themes.gohugo.io/themes/hugo-universal-theme/" target="_blank">hugo-universal-theme</a>

選擇完主題後要套用在 **themes/** 的目錄底下，這邊我就用git的方是來操作，如果你本身有安裝Vscdoe等等的編譯器也可以下載完解完壓縮，再放入 **themes/** 的目錄底下。

安裝hugo-universal-theme，佈景主題一共會需要以下4個指令:

    #Step1
    git clone https://github.com/devcows/hugo-universal-theme.git themes/hugo-universal-theme

    #Step2
    cp themes/hugo-universal-theme/exampleSite/config.toml ./

    #Step3
    cp -R themes/hugo-universal-theme/exampleSite/data ./   

    #Step5
    cp -R themes/hugo-universal-theme/exampleSite/content ./

    #Step4
    cp -R themes/hugo-universal-theme/exampleSite/static ./

#### 指令說明

**Step1:** <br>下載佈景主題到themes資料夾，輸入以下指令：

     git clone https://github.com/devcows/hugo-universal-theme.git themes/hugo-universal-theme

上述指令的意思跟先cd到 **themes/** 目錄在git clone 意思是一樣的。輸入完指令後會看到 **themes/** 底下多非常多的檔案。

**Step2:**  <br>把主題當中的config.toml檔(hugo主要配置檔案)，取代我們根目錄外層得config.toml檔。

    cp themes/hugo-universal-theme/exampleSite/config.toml ./

除了config.toml之外我們還要移動以下三個資料夾，主題才能完全正常顯示
* **data:** 存放 YAML、JSON 或 TOML 格式的資料
* **content:** 存放文章的內容
* **static:** 存放靜態資源，如圖片、JavaScript 和 CSS

由於cp指令是針對個別檔案去複製取代，而 **data** 、 **content** 、 **static** 都是目錄，因此要將指令改為：

    cp -R #複製整個目錄以及該目錄下的所有子目錄與檔案

**Step3複製並取代外層data資料夾：**

    cp -R themes/hugo-universal-theme/exampleSite/data ./   

**Step4複製並取代外層content資料夾：**

    cp -R themes/hugo-universal-theme/exampleSite/content ./

**Step5複製並取代外層static資料夾：**

    cp -R themes/hugo-universal-theme/exampleSite/static ./

我們將這些 **exampleSite/** 目錄下的這些檔案複製到最外層的目錄並取代原有的 **data** 、 **content** 、 **static** 後這時候只要輸入

    hugo server 


就會發現你的hugo網頁已經正常顯示為佈景主題的樣式了。

![hugo-universal-theme](/img//blog/hugo-universal-theme.webp)

以上就是hugo套用主題的部分，當然有一些步驟會根據下載不同的佈景主題而有所變動，不過步驟幾乎都是大同小異。

###  Add content: 創建內容
架設好了hugo網站，最重要的就是要知道如何創建網站的內容。

如果剛在安裝主題的時候，你有跟我一起輸入:<br><code>cp -R themes/hugo-universal-theme/exampleSite/content ./</code>

把 **exampleSite/content** 的內容搬出來，那我們的 **content/** 會有這些檔案：

    .
    ├──content/ 
        ├── blog        
            ├─ categories-post.md
            ├─ creating-a-new-theme.md
            ├─ hugo-is-for-lovers.md
            ├─ linked-post.md
            └─ migrate-from-jekyll.md
        ├── contact.md
        └─ faq.md

那如果我們現在要新增內容，我們在終端機輸入創建內容檔案的指令為

    hugo new 資料夾/檔名.md

假設我要在 **content/blog/** 目錄下新增一個test1.md，指令為：

     hugo new blog/test1.md



當我們新增完檔案後我們 **content/** 的目錄將會變成：

    .
    ├──content/ 
        ├── blog        
            ├─ categories-post.md
            ├─ creating-a-new-theme.md
            ├─ hugo-is-for-lovers.md
            ├─ linked-post.md
            ├─ migrate-from-jekyll.md
            └─ test1.md
        ├── contact.md
        └─ faq.md                

而打開剛剛新增test2.md後會發現呈現如下：

    ---
    title: "Test1"
    date: 2023-04-27T14:13:35+08:00
    draft: true
    ---

這樣內容就更新成功了，draft是草稿的意思。如果將<br>
 <code>draft: true</code>改成 <code>draft: false</code>，就可以在前台看到我們剛剛新增的文章囉。

![hugo-add-content](/img//blog/addcontent.webp)

{{< hide >}}

<!-- (放一張文章內容更新的照片) -->
<!-- 而常規的hugo文章，在Front Matter都會包含以下的元素：

    ---
    author: "andy"
    title: "test2"
    image: "img/test.webp"
    draft: false
    date: 2023-04-27
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    tags: ["test2"]
    ---

    ##前言
    Lorem Ipsum is simply dummy text of the printing and typesetting industry1.

    ##標題一
    Lorem Ipsum is simply dummy text of the printing and typesetting industry2.

    ##標題二
    Lorem Ipsum is simply dummy text of the printing and typesetting industry3.

然而難道我們每次新增完檔案後，都要重新輸入這些格式嗎？為了讓使用者在輸入<br><code> hugo new 資料夾/檔名.md</code>新增內容時，不用再重新設定格式，因此這就會談到 **archetypes**目錄的功能。 -->

{{< /hide >}}

### Publish the site 發布網站

在輸入指令前記得先cd到根目錄，發布網站指令：

    hugo

當我們對著資料夾輸入hugo後，會看到自己的根目錄底下多了一個public資料夾，而裡面就是hugo將所有網站的元件都打包成純靜態網站。

純靜態網站包含圖片、html、javascript等等。所有用md檔新增的文章也都變成了html，而且只花了不到一秒鐘的時間。

這就是官方敢稱自己為The world’s fastest framework for building websites(世界上用來建立網站的最快的框架)。除了打包的速度以外，從0開始建立一個hugo的網站也是非常快速。


![gohugoio](/img//blog/gohugoio.webp)


打包完的public就是純靜態檔案，只要丟到nginx server跑服務可以正常顯示了，如果還不會安裝與設定nginx server 可以參考以下文章:

* <a href="/linode-ubuntu-linux-install-nginx" target="_blank">[linux]如何在Linode VPS上架設Ubuntu與安裝Nginx server</a>
{{< hide >}}

<!-- 我想其他的目錄結構，都比較容易明白，這邊針對archetypes的目錄做一點簡短的介紹。 -->




<!-- *  **archetypes:**
*  **content:** 存放文章的內容
*  **data:** 存放 YAML、JSON 或 TOML 格式的資料
*  **layouts:** 存放模板
*  **static:** 存放靜態資源，如圖片、JavaScript 和 CSS
*  **themes:** 存放主題
*  **config.toml:** Hugo 的設定檔案 -->



<!-- ### 網站架構 -->
<!-- ### 創建內容 -->

{{< /hide >}}

## 補充說明

###  Directory Structure: 目錄架構

創建完網站後會看到這個目錄下多了一個叫exampleSite的目錄裡面會有幾個資料夾。這就是最標準的hugo架構下的目錄。這幾個目錄分別代表著什麼呢？

    .
    ├── archetypes/ #定義content內容檔案的元資料
    ├── content/ #存放文章的內容
    ├── data/ #存放 YAML、JSON 或 TOML 格式的資料
    ├── layouts/ #存放模板
    ├── static/ #存放靜態資源，如圖片、JavaScript 和 CSS
    ├── themes/ #存放主題
    └── config.toml #Hugo 的設定檔案

### Archestypes是什麼

**Archestypes**的功能是創建新內容時使用的模板。

Exampele:

假設在<code>archetypes/</code> 有這二個檔案分別是<code>default.md</code> 、<code>category1.md</code>：

    .
    ├── archetypes
        └── default.md
        └── category1.md


而這二個檔案點開分別為:

**default.md:**

    ---
    title: "Test2"
    date: 2023-04-27T14:13:35+08:00
    draft: true
    ---

**category1.md:**

    ---
    author: "category1"
    title: "category1"
    image: "img/test.webp"
    draft: false
    date: 2023-04-27
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry1."
    tags: ["category1"]
    ---

     ##標題：category1


此時的archetypes目錄的狀態為:

    .
    ├── archetypes
        └── default.md
        └── category1.md

這時我們在輸入 <code> hugo new category1/test2.md</code>


**content/category1/test2.md:** 打開檔案後呈現如下：

    ---
    author: "category1"
    title: "category1"
    image: "img/test.webp"
    draft: false
    date: 2023-04-27
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry1."
    tags: ["category1"]
    ---

     ##標題：category1


你會發現這個新的 **test2.md** 檔案，會和 **archetypes/category1.md**，的檔案長得一模一樣。這是怎麼回事呢？

這是因為當我們在輸入<code> hugo new category1/test2.md</code>指令時，由於有指定 **category1** 資料夾。

所以他會優先去 **archetypes/** 目錄下找尋是否有與 **category1**這格名稱相符的模板，如果有與 **category1** 名稱相符則會按照 **archetypes/category1.md** 模板中的內容去新增.md檔。

那如果沒有呢？則會按照 **archetypes**目錄下的 **default.md**，內容去新增也就是預設模板。


{{< hide >}}

<!-- 我們在前面輸入創建內容指令時，新增完的md檔的上方應該會是長這樣子的。

    ---
    title: "Test2"
    date: 2023-04-27T14:13:35+08:00
    draft: true
    --- -->

    {{< /hide >}}

由於我們沒有特別更改 **archetypes/** 目錄當中的 **default.md** 檔案，所以當你打開 **archetypes/default.md** 當中的檔案應該會是這樣呈現。

    ---
    title: "{{ replace .Name "-" " " | title }}"
    date: {{ .Date }}
    draft: true
    ---

 **archetypes/** 主要就是可以去設定我們根據不同類別的文章，在創建內容時想要呈現出的文章模板，如果還有不了解的看影片的運作方式可能會比較清楚哦。
 {{< hide >}}
<!-- 文章上方的Front Matter，Front matter 是一種在Markdown 文件的開頭的一個設定區塊。

在Front Matter可以用各種的欄位例如：image(文章精選圖片)、url(文章網址)、author(作者)、description(文章描述)、tags(標籤)等等的都是在這進行設定。

輸入hugo new site指令完後，剛創建的hugo site當中，**archetypes/** 目錄下只會有**default.md**這個檔案，因此如果沒有做特別的設定，新增出來的文章Front matter都會呈現這個方式。 -->
{{< /hide >}}





{{< youtube bcme8AzVh6o >}}

 {{< hide >}}
<!-- ### Configure the site 配置常用功能

以下是我針對比較常用的config.toml的功能，做了一個基本的配置。

    baseURL = 'http://example.org/' #網站的基本 URL
    languageCode = 'zh-tw'  #網站使用的語言
    title = 'My New Hugo Site' #網站的標題
    theme = "hugo-universal-theme" #網站使用的主題名稱 
    DefaultContentLanguage = "zh-tw" 
    enableInlineShortcodes = true  #是否啟用內嵌短代碼的功能
    enableRobotsTXT = true #產生 robots.txt

    
    [menu] #用於設置網站選單的選項。
    [[menu.main]]
      name = "Home" #網站選單的名稱
      url = "/" #網站選單的連結
      weight = 1 #選單權重 用於調整先後順序

    [[menu.main]]
      name = "About"
      url = "/about/"
      weight = 2

    [[menu.main]]
      name = "Contact"
      url = "/contact/"
      weight = 3

    [params]

    [markup] #配置頁面樣式和標記語言的選項
        [markup.goldmark.renderer] #Goldmark 是 Hugo 默認的 Markdown 解析器之一
            unsafe=true #在解析md檔的時候是否顯示html 將這個欄位設置為true後
                        #等於是可以在md檔當中插入任何html標籤
        [markup.tableOfContents]
            endLevel = 3
            startLevel = 2   


如果有修改到config.toml的話，有些屬性需要重新啟動hugo server 才會生效。 -->

 {{< /hide >}}

## 結論
這篇文章，主要是針對從0開始接觸hugo的使用者，如何透過hugo架設一個屬於自己的個人站。當中有許多還未提到的部分都會在後續的文章做更近一步地講解。

包括config.toml有哪些功能、模板語法當中哪些常用的指令、如何新增留言能(Comments)、新增聯絡表單(contact form)、hugo SEO套件工具有哪些功能。


**參考資料：**

* <a href="https://ithelp.ithome.com.tw/articles/10269253" target="_blank">Jekyll vs Hexo vs Hugo</a>
* <a href="https://gohugo.io/" target="_blank">hugo</a>
* <a href="https://rickhw.github.io/2020/01/20/Blog/Hello-Hugo/" target="_blank">hello hugo</a>




 {{< hide >}}

<!-- ## hugo目錄架構

* _index.md代表的意思相關說明

* archetypes 目錄  

I. 介紹
A. 什麼是 Hugo
B. Hugo 的優點
C. 誰會需要 Hugo

II. 安裝 Hugo
A. 系統要求
B. 安裝 Hugo
C. 測試 Hugo

III. 創建 Hugo 網站
A. 創建新網站
B. 主題選擇
C. 網站架構
D. 創建內容
E. 創建頁面

IV. 發布網站
A. 測試網站
B. 部署網站
C. 發布網站

V. Hugo 的高級功能
A. Hugo 模板語言
B. 自定義主題
C. Hugo 的其他功能

VI. 結論
A. Hugo 的優勢
B. 如何學習更多關於 Hugo
C. 結論

Hugo 常用指令大集合，讓你也可快速上手


可以新增讓文章連結url自動等於生成的md黨的檔名，

如果新增單純用 hugo new 檔名.md 的話他會自動在content裡面並不會跑到/post資料夾

當你輸入hugo new 資料夾/檔名.md指令來新增檔案時，他會進去archetypes/目錄下搜尋是否有與資料夾名稱相同的md檔，如果有那就會按照與資料夾相同名稱的檔名，去跑一樣的Front Matter 的格式。


那如果在archetypes目錄下找不到與新增的md檔一樣名稱的md檔，那他就會預設跑default.md的格式。 -->
 {{< /hide >}}