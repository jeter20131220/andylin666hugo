---
author: "andy"
title: "stable-diffusion模型 推薦"
image: ""
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
Stable Diffusion 模型的「核心」，能夠理解文本輸入（如 Prompt）並生成圖像。 是一個經過大規模數據集訓練的原始模型，具有最基礎的圖像生成能力。但是針對單一的主題、應用場景效果可能不會到非常理想。


* Stable diffusion v1.5
* Stable Diffusion XL
* Flux.1 dev

<!-- Flux.1 dev 需要用到 comfyui ，目前 AUTOMATIC1111 stable-diffusion-webui 還尚未支援 Flux.1 dev 。目前 -->


## CheckPoint

Checkpoint 是指模型訓練過程中的保存點。是基於Base Model 微調後完整模型文件，微調通常針對特定風格、特定主題或應用場景，進行額外訓練。所以在特定的主題跟場景效果會比一般的Base models好非常多。 

### CheckPoint使用方法

要說到哪裡可以下載到最多種類的Checkpoint，非civitai莫屬了。
* <a target= _blank href="https://civitai.com/models">civitai</a>

點進去civitai後點選右上角的，**"Fliters"**，然後在 **"Model type"** 這裡勾選，**"Checkpoint"**，就 civitai上搜尋所有的CheckPoint。

![civitai-checkpoint](/img/blog/civitai-checkpoint.webp)

這裡也可以根據不同的主題與應用場景去搜尋，例如：Background(場景)
Bulding(建築)、Colthing(服裝)、Style(風格)等等。

![civitai-checkpoint](/img/blog/civitai-tag2.webp)

點進去之後這邊可以看到，這個CheckPoint的資訊，類型、Base Model等的等，下載的按鈕也在這裡。

![civitai-checkpoint](/img/blog/civitai-detail.webp)

往下滑之後可以看到使用說明，所有的checkpoint使用方法都不太一樣，所以下載之前一定要看清楚，作者通常會在這裡說明用什麼參數、權重、以及需要可以什麼LoRA使用。

![civitai-checkpoint](/img/blog/civitai-readme.webp)

按下載之後先cd 到 stable-diffusion-webui 然後將下載好的檔案(.safetensors、.ckpt)丟到 **/models/stable-diffusion** 。在stable-diffusion-webui那邊按下，就可以使用了。

(圖片)

## Embedding
Embedding 是一種詞嵌入技術，主要針對 文本提示詞（Prompts） 進行調整或優化。檔案大小大約落在 KB-MB。

## LoRA
LoRA 是一種輕量化的模型微調方法。它不會改變 Base Model 本身的權重，而是透過額外的權重變換來調整模型行為。因此檔案會比較小大概落在幾百MB。

微模型

* 可利用權重值來調整畫作的風格
* 無法單獨使用 需要搭配 CheckPoint 
* 檔案小 運算資源消耗少
* 可以用少量圖片訓練自己的模型

檔案大小

### LoRA 使用方法

這邊一樣要前往civitai
<a target= _blank href="https://civitai.com/models">civitai</a>



每個LoRA都有可能有要搭配使用的CheckPoint，還有權重值要給多少，所以在下載之前要看清楚底下的使用説明。

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

![ChilloutMix](/img/blog/chilloutMix-1.webp)

▲ 這裡的圖是直接使用，ChilloutMix去生成圖象，並沒有包含LoRA，只有使用easynegative、bad-hands-5這兩個embeddings而已。算出來的結果會非常乾淨細節也不錯。

*  <a target="_blank" href="https://civitai.com/models/6424/chilloutmix">https://civitai.com/models/6424/chilloutmix</a>


![ChilloutMix](/img/blog/chilloutMix-3.webp)

▲ 不過如果覺得覺得膩了，ChilloutMix也可以搭配LoRA使用，這裡的圖我是搭配Cute_girl_mix4這個LoRA使用。會感受到臉型不太一樣，會更加可愛一點。

*  <a target="_blank" href="https://civitai.com/models/14171/cutegirlmix4">https://civitai.com/models/14171/cutegirlmix4</a>

![ChilloutMix](/img/blog/chilloutMix-2.webp)

▲  這裡我是使用了ChilloutMixss，這個LoRA，出來的妝感會比較重一點。但是這個LoRA的權重不要給太重，大概落在0.4～0.7就好，
`<lora:xiaoshazi:0.4>`，如果給太重會影響到面容。

*  <a target="_blank" href="https://civitai.com/models/10850/chilloutmixss">https://civitai.com/models/10850/chilloutmixss</a>


人物、亞洲、歐洲、二次元(還有其他你找得到的)賽博龐克

你以為Stable diffusion，生成式影像只能生成美女嗎，那你就太小看它了，這邊就推薦幾個不同領域的 models給各位參考。

部落格插圖使用，


* 二次元 Checkpoint https://blog.256pages.com/stable-diffusion-top3-anime-model/

這個也可以推，ReV Animated

* Background
* bulding
* InteriorDesign
* colthing
* Product Design

這幾張圖算完就可以更新這篇文章了，下一篇寫controlNet

## 場景

吉卜力風格背景
https://civitai.com/models/54233/ghiblibackground

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



    
相關參考連結：
* <a target="_blank" href="https://blog.256pages.com/stable-diffusion-basic-prompt-tutorial/">Stable Diffusion Prompt (基本篇)</a>


Hires. fix 參數

* 問題一 遇到手指很容易變形
* 安裝controlnet  webui有問題

ChilloutMix 可以搭配那些LoRA使用，有一個韓國人臉型的應該可以試試看。





## prompt 數字代表的意思-權重解析




## SD VAE(Variation autoencoder)
有些模型本身自帶VAE



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

