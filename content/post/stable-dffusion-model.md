---
author: "andy"
title: "stable-diffusion模型 推薦"
image: "img/stable-diffusion-cover.webp"
url: /stable-diffusion-model
draft: false
date: 2024-12-03
description: "本篇教學將指導你如何在 Google Colab 和本地端安裝 Stable Diffusion Web UI，輕鬆設置並運行 AI 圖像生成，快速創作高質量數位藝術作品。"
tags: ["stable-diffusion"]
archives: ["2024/12"]
---

## Stable diffusion 

簡單來說就是一個文字生成圖像的模型，diffusion 為擴散模型

* CLIP 模型
* Diffusion 模型
* VAE模型

利用CLIP模型，將文字轉向量作為輸入

什麼是CLIP 模型

* LoRA
* CheckPoint 
* Base Model



## Base models

* Stable diffusion v1.5
* Stable Diffusion XL
* Flux.1 dev

Flux.1 dev 需要用到 comfyui ，目前 AUTOMATIC1111 stable-diffusion-webui 還尚未支援 Flux.1 dev 

檔案大小


## CheckPoint

可以在 civitai上面來尋找自己想要的風格，按下載之後先cd 到 stable-diffusion-webui 然後將下載好的檔案丟到 /models/stable-diffusion就可以使用了。

## LoRA

微模型

* 可利用權重值來調整畫作的風格
* 無法單獨使用 需要搭配 CheckPoint 
* 檔案小 運算資源消耗少
* 可以用少量圖片訓練自己的模型

檔案大小

### 使用方法
需要前往 
<a target= _blank href="https://civitai.com/models">civitai</a>下載標籤為LoRA的。

將下載好的檔案，放在 **stable-diffusion-webui/models/LoRA**路經當中

使用方法也非常簡單，在我們要輸入prompt生成圖像時，加入 <lora:name:weight>

* name指得就是模型名稱
* weight指得就是權重值 0-1

example:
    <lora:chilloutmixss_xss10:0.7>

意思就是使用chilloutmixss_xss10這個LoRA，權重直0.7的意思

## Stable Diffusion Model 推薦

其實直接用base models去算圖結果可能並不會到非常理想，因為base models本身的涵蓋範圍很廣，他可以產出風景、建築、藝術、插畫等等，因此他在單一領域的表現可能不會比建立在他基礎底下建立的models還要好。


像有些模型就是專注於產出美女、人像、甚至專門是韓國偶像的models，因此如果有明確要產出的圖像目標，就可以去找那個領域的models來使用效果會更好。

這邊舉個例子：我用差不多的提示詞在Stable diffusion v1.5 跑出來的結果與我用ChilloutMix這個models跑出來的品質就有差。


Stable diffusion v1.5，跑出來的圖較為僵硬，就會比較假一點。那當然他的下一代 Stable Diffusion XL 就會好很多，但是如果要和專門產人物的models ChilloutMix比起來的話還是差蠻多的。



### 人物領域

#### ChilloutMix  

類型CheckPoint

剛剛有提到過的ChilloutMix這個CheckPoint，專門來生成高擬真人物的models，尤其是亞洲臉孔的美女，真的是蠻不錯的，prompt給的簡短的 beauty asian girl，都可以跑出非常不錯的人物。

![ChilloutMix](/img/blog/ChilloutMix-1.webp)

這裡的圖是直接使用，ChilloutMix去生成圖象，並沒有包含LoRA，只有使用easynegative、bad-hands-5這兩個embeddings而已。算出來的結果會非常乾淨細節也不錯。

* https://civitai.com/models/6424/chilloutmix


![ChilloutMix](/img/blog/ChilloutMix-3.webp)

不過如果覺得感覺膩的，ChilloutMix也可以搭配LoRA使用，這裡的圖我是搭配Cute_girl_mix4這個LoRA使用。會感受到臉型不太一樣，會更加可愛一點。

* https://civitai.com/models/14171/cutegirlmix4?ref=blog.256pages.com

![ChilloutMix](/img/blog/ChilloutMix-2.webp)

這裡我是使用了ChilloutMixss，這個LoRA，出來的妝感會比較重一點。

* https://civitai.com/models/10850/chilloutmixss


你以為Stable diffusion，生成式影像只能生成美女嗎，那妳就太小看它了，這邊就推薦幾個不同領域的 models給各位參考。

LoRA，

人物、亞洲、歐洲、二次元(還有其他你找得到的)賽博龐克

* 二次元 Checkpoint https://blog.256pages.com/stable-diffusion-top3-anime-model/

這個也可以推，ReV Animated


## 場景
### Bilgewater

模型类别：LoRA 模型

下载地址： https://civitai.com/models/23344?modelVersionId=27879

模型说明：场景风格模型。

触发词：bilgewater

## LyCORIS使用方法

### Concept Scenery Scene

模型类别：LoRA 模型

下载地址： https://civitai.com/models/23682/conceptsceneryscenev2

模型说明：风景场景模型。

### Howls Moving Castle

模型类别：LoRA 模型

下载地址： https://civitai.com/models/14605?modelVersionId=19998

模型说明：风景场景模型。


### Miniture world style 微缩世界风格

模型类别：LoRA - LYCORIS 模型

下载地址： https:/civiai.com/models/28531/miniature-world-style

模型说明：微缩世界风格模型。

触发词：mini\(ttp\)、miniature、isometric、landscape


### Style of HOPA Games

模型类别：TEXTUAL INVERIO

下载地址： https://civitai.com/models/18424/style-of-hopa-games-landscapes-and-scenery-concept-art-in-style-of-video-games-hoppagames

模型说明：游戏场景风格。

触发词：hoppagames


向量圖

有宮崎駿迷的!一定要玩這個(吉卜力)

Studio Ghibli Style

模型类别：LoRA 模型

下载地址： https:/civita.com/odels/6526/studio-ghibli-style-lora

模型说明：吉卜力风格模型。


新海誠風格
### Makoto Shinkai

模型类别：LoRA 模型

下载地址：https://civitai.com/models/10626/makoto-shinkai-substyles-style-lora

模型说明：新海诚画风模型。

原神風格

* [DDicon](https://civitai.com/models/38511/ddicon?modelVersionId=44447)
* [ddicon lora](https://civitai.com/models/38558/ddiconlora) 

* [ReV Animated]( https://civitai.com/models/7371?modelVersionId=46846)

## 室內設計

### XSarchitectral-InteriorDesign-ForXSLora

模型类别：Checkpoint 模型

下载地址：https://civitai.com/models/28112/xsarchitectural-interiordesign-forxslora

模型说明：室内设计模型，建议配合 LoRA 使用： https://civitai.com/models/25383/xsarchitectural-7modern-interior。

### architectural design sketches with markers

模型类别：Checkpoint 模型

下载地址： https://civitai.com/models/34384/architectural-design-sketches-with-markers

模型说明：建筑设计草图模型 。触发词：marker painting、handsketch



OS:
    先挑幾個，然後再去civitai找一些風格很酷的再補幾個

OS:
    每一個領域都弄幾張，就可以在部落格寫一篇長文，可以把這些圖放ig。controlNet應該可以單獨寫一篇，
OS:
    看多了應該也是可以提升自己的美感，反正我本來就喜歡跟外貌相關的東西，AI平面設計師應該也不錯。不知道有沒有生成網頁設計稿的models真讓人好奇。

其實今天的進度還行啦，先把簡單的不同風格模型都完一次，然後再去好好研究ControlNet。        




相關參考連結：
* <a target="_blank" href="https://blog.256pages.com/stable-diffusion-basic-prompt-tutorial/">Stable Diffusion Prompt (基本篇)</a>


Hires. fix 參數

* 問題一 遇到手指很容易變形
* 安裝controlnet  webui有問題

ChilloutMix 可以搭配那些LoRA使用，有一個韓國人臉型的應該可以試試看。

## Checkpoint
Checkpoint 是指模型訓練過程中的保存點。

## ControlNet 
ControlNet 的作用：控制生成圖像的結構或風格，增強模型的可控性。

* 介紹如何使用 Web UI（例如 AUTOMATIC1111）來整合 ControlNet。
* 必要的 Python 套件安裝步驟（如 torch, diffusers, controlnet 等）。

在使用 Stable Diffusion 生成人物圖片時，手部細節（尤其是手指）經常出現以下問題：

[](https://stable-diffusion-art.com/controlnet/#Installing_Stable_Diffusion_ControlNet)

## prompt 數字代表的意思

### 安裝ControlNet 

Installform URL

以管理員身分執行終端機

下載ControlNet的時候base model是否也需要放在資料夾當中。

下載完的model 要放置在 **extensions/sd-webui-controlnet/models**

### ControlNet 功能介紹 oponesoe
使用ControlNet來修復變形手指

* 手指過於纖細或畸形。
* 手指數量錯誤（如六指）。
* 手部結構與人體解剖學不符。

可以提共一些範例圖片，讓user練習

對比其他的修復方式，突顯 ControlNet 的優勢。

ControlNet DWPose 修復手部

DWPose 是 ControlNet Openpose 的強大預處理器，它可以提取人體姿勢，包括手部，您將需要 ControlNet 擴充功能和 OpenPose ControlNet 模型才能應用此方法修復手部。

ControlNet Editor

[ControlNet: A Complete Guide](https://stable-diffusion-art.com/controlnet/)

[fix-hands](https://stable-diffusion-art.com/fix-hands/#Basic_Inpainting)

### canny

* openpose
* Hand Refiner

## SD VAE(Variation autoencoder)
有些模型本身自帶VAE





##

## stable-diffusion 自動儲存 prompt 

在圖片旁邊產生一個txt檔案，


1.使用 Stable Diffusion 基本修復功能修復手部

Stable Diffusion 產生的圖片透過點擊圖片下方的傳送到Inpaint 按鈕將此圖片傳送到Inpainting，或點擊img2img – Generation – Inpaint 標籤遮蓋您想要再生的區域，為了讓修復效果更好，一次只固定一隻手，將修復區域設定為整個圖片，將降噪強度設定為0.5。



3、HandRefiner 修復手部

HandRefiner 是用於修復手部的 ControlNet 模型。

參考連結
* [Stable Diffusion基礎 -- 局部重繪（inpaint）](https://vocus.cc/article/64770591fd89780001729605)

## Stable Diffusion 目錄架構

    ├── .venv  
    │   ├── bin
    │   ├── include
    │   ├── lib
    │   └── share
    ├── data
    │   └── diffusion
    │       ├── checkpoints
    │       ├── samples
    │       └── training
    ├── stable_diffusion
    │   ├── __init__.py
    │   ├── config.py
    │   ├── diffusion.py
    │   ├── loss.py
    │   ├── model.py
    │   └── trainer.py
    └── README.md

## 阮一峰

[如何用 Cloudflare 重定向 URL](https://codethoughts.io/posts/2024-07-31-redirecting-urls-with-cloudflare/)   

[一个 JS 网页库，将 JSON 数据转成可视化的树状图。 jsontr.ee](https://jsontr.ee/)

[免费的 AI 图像生成网站。（@aaamomo64 投稿）](https://bylo.ai/)

[從頭開始學習Stable Diffusion：一個初學者指南](https://chrislee0728.medium.com/從頭開始學習stable-diffusion-一個初學者指南-ec34d7726a6c)


很多人寫得很細，甚至是直接寫一連串的使用手冊，但是閱讀起來太多文章不太好入門，我目前的定位是要做一篇就購得這種文章，就是文章內容不要太多，幾乎都是重點。


