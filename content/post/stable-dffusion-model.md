---
author: "andy"
title: "探索 Stable Diffusion WebUI 模型分類：推薦的各領域 Checkpoint與LoRA"
image: "img/stable-diffusion-checkpoint.webp"
url: /stable-diffusion-model
draft: false
date: 2024-12-18
description: "大幅提升 Stable Diffusion 創作效果！深入了解 Checkpoint 與 LoRA 的使用方法，探索各領域最佳推薦模型，全面升級影像品質！"
tags: ["stable-diffusion"]
archives: ["2024/12/18"]
---
如果還沒有安裝AUTOMATIC1111 stable-diffusion-webui的話可以參考:

*  <a target= _blank href="/stable-diffusion">完整 Stable Diffusion 教學：從 Colab 到本地端，快速上手 Web UI 生成精美圖像</a>
  
  

## Stable diffusion 

簡單來說就是一個文字生成圖像的模型，diffusion 為擴散模型，而我們再算圖會比較常使用到，LoRA、Checkpoint、Base Model。

<!-- * CLIP 模型
* Diffusion 模型
* VAE模型

利用CLIP模型，將文字轉向量作為輸，什麼是CLIP 模型 -->

* LoRA： 一種輕量化的模型微調技術，用於添加特定風格或主題調整。
* Checkpoint： Stable Diffusion 的核心模型檔案，決定生成影像的風格與效果。
* Base Model： 未經微調的原始模型，適合作為創作的通用基礎。




## Base models
Stable Diffusion 模型的「核心」，能夠理解文本輸入（如 Prompt）並生成圖像。 是一個經過大規模數據集訓練的原始模型，具有最基礎的圖像生成能力。但是針對單一的主題、應用場景效果可能不會到非常理想。

檔案大小:4-10+GB不等

* Stable diffusion v1.5
* Stable Diffusion XL
* Flux.1 dev

<!-- Flux.1 dev 需要用到 comfyui ，目前 AUTOMATIC1111 stable-diffusion-webui 還尚未支援 Flux.1 dev 。目前 -->


## CheckPoint

Checkpoint 是指模型訓練過程中的保存點。是基於Base Model 微調後完整模型文件，微調通常針對特定風格、特定主題或應用場景，進行額外訓練。所以在特定的主題跟場景效果會比一般的Base models好非常多。 

檔案大小:2-7+GB

### CheckPoint使用方法

要說到哪裡可以下載到最多種類的Checkpoint，非civitai莫屬了。
* <a target= _blank href="https://civitai.com/models">civitai</a>

點進去civitai後點選右上角的，**"Fliters"**，然後在 **"Model type"** 這裡勾選，**"Checkpoint"**，就可以在 civitai上搜尋所有的CheckPoint。

![civitai-checkpoint](/img/blog/civitai-checkpoint.webp)

這裡也可以根據不同的主題與應用場景去搜尋，例如：Background(場景)
Bulding(建築)、Colthing(服裝)、Style(風格)等等。

![civitai-checkpoint](/img/blog/civitai-tag2.webp)

點進去之後這邊可以看到，這個CheckPoint的資訊，類型、Base Model等的等，下載的按鈕也在這裡。

![civitai-checkpoint](/img/blog/civitai-detail.webp)

往下滑之後可以看到使用說明，所有的checkpoint使用方法都不太一樣，所以下載之前一定要看清楚，作者通常會在這裡說明用什麼參數、權重、以及需要可以什麼LoRA使用。

![civitai-checkpoint](/img/blog/civitai-readme.webp)

按下載之後先cd 到 stable-diffusion-webui 然後將下載好的檔案(.safetensors、.ckpt)丟到<br> `stable-diffusion-webui/models/stable-diffusion` 。在stable-diffusion-webui模型旁邊，按下重新整理，再點選那個CheckPoint就可以使用了。

![sdwebui-checkpoint](/img/blog/sdwebui-checkpoint.png)

## Embedding(Textual inversion)
Embedding 是一種詞嵌入技術，主要針對 文本提示詞（Prompts） 進行調整或優化。簡單來說就是將非常多常用的提示詞變成文字合集。

檔案大小：KB-MB。

比較常用的就是easynegative、bad-hands-5，這兩個都是作為負面提示詞(negative prompt)使用，easynegative是由許多算壞圖片負面提示詞合集，bad-hands-5是針對手指變形的負面提示詞。

* <a target="_blank" href="https://civitai.com/models/7808/easynegative">easynegative</a>
* <a target="_blank" href="https://civitai.com/models/116230/bad-hands-5">bad-hands-5</a>

下載下來之後(.pt)，要放在**stable-diffusion-webui\embeddings**，然後打開stable-diffusion-webui，點選 **"Textual inversion"**，再點選旁邊的 **"refresh箭頭"**，就可以看到自己剛剛丟進去的embedding了。然後再輸入Negative prompt得時候點一下embedding，就會帶入到Negative prompt裡面了。

![embeding](/img/blog/embeding.png)



## LoRA
LoRA 是一種輕量化的模型微調方法。它不會改變 Base Model 本身的權重，而是透過額外的權重變換來調整模型行為，因此檔案會比較小大概落在幾百MB。不過這邊要注意的是，LoRA無法單獨使用，需要搭配CheckPoint。

檔案大小:幾百MB



<!-- 微模型
* 可利用權重值來調整畫作的風格
* 無法單獨使用 需要搭配 CheckPoint 
* 檔案小 運算資源消耗少
* 可以用少量圖片訓練自己的模型 -->



### LoRA 使用方法

這邊一樣要前往
* <a target= _blank href="https://civitai.com/models">civitai</a>

點進去civitai後點選右上角的，**"Fliters"**，然後在 **"Model type"** 這裡勾選，**"LoRA"**，就可以在 civitai上搜尋所有的LoRA。

![LoRA](/img/blog/civitai-lora.webp)

挑選一個自己喜歡的點進去。由於每個LoRA都有可能有要搭配使用的CheckPoint，還有權重值要給多少，所以在下載之前要看清楚底下的使用説明。

將下載好的檔案，放在 **stable-diffusion-webui/models/LoRA**路經當中後，打開stable-diffusion-webui。先點選 **":Lora"**，再點選旁邊的 **"refresh箭頭"**，就可以看到自己剛剛丟進去的Lora了。
![LoRA](/img/blog/lorause.png)



使用方法也非常簡單，在我們要輸入prompt生成圖像時prompt欄位，加入 <lora:name:weight>

* name指得就是模型名稱
* weight指得就是權重值 0-1

Example:
    `<lora:chilloutmixss_xss10:0.7>`

意思就是使用chilloutmixss_xss10這個LoRA，權重直0.7的意思

也可以直接在prompt的時候直接點Lora，stable-diffusion-webui會自己把Lora的名稱帶進去prompt裏面，跟Embedding的使用方法一樣。

## Stable Diffusion Model 推薦

其實直接用base models去算圖結果可能並不會到非常理想，因為base models本身的涵蓋範圍很廣，他可以產出風景、建築、藝術、插畫等等，因此他在單一領域的表現可能不會比建立在他基礎底下建立的models還要好。


有些模型就是專注於產出美女、人像、甚至是可以產出韓國偶像的model，因此如果有明確要產出的圖像目標，就可以去找那個領域的models來使用效果會更好。
<!-- 
這邊舉個例子：我用差不多的提示詞在Stable diffusion v1.5 跑出來的結果與我用ChilloutMix這個models跑出來的品質就有差。 -->


<!-- Stable diffusion v1.5，跑出來的圖較為僵硬，就會比較假一點，特定領域、應用場景上使用已經訓練好的CheckPoint去算圖也是不錯的選擇。 -->

雖然Stable diffusion v1.5的下一代 Stable Diffusion XL非常厲害，但是基於Stable diffusion v1.5 訓練出來的CheckPoint在特定領域下，也可以生成不下於Stable Diffusion XL的影像品質哦。這邊我會推薦幾個我有使用過的CheckPointt。

### ChilloutMix (亞洲臉孔美女)

**模型類型**：CheckPoint

**下載地址**：<a target="_blank" href="https://civitai.com/models/6424/chilloutmix">chilloutmix</a>

CheckPoint專門來生成高擬真人物的models，尤其是亞洲臉孔的美女，真的是蠻不錯的，prompt給的簡短的 beauty asian girl，都可以跑出非常不錯的人物。

![ChilloutMix](/img/blog/chilloutMix-1.webp)

▲ 這裡的圖是直接使用，ChilloutMix去生成圖象，並沒有包含LoRA，只有使用easynegative、bad-hands-5這兩個embeddings而已。算出來的結果會非常乾淨細節也不錯。


![ChilloutMix](/img/blog/chilloutMix-3.webp)

▲ 不過如果覺得覺得膩了，ChilloutMix也可以搭配LoRA使用，這裡的圖我是搭配Cute_girl_mix4這個LoRA使用。會感受到臉型不太一樣，會更加可愛一點。

*  <a target="_blank" href="https://civitai.com/models/14171/cutegirlmix4">cutegirlmix4</a>

![ChilloutMix](/img/blog/chilloutMix-2.webp)

▲  這裡我是使用了ChilloutMixss，這個LoRA，出來的妝感會比較重一點。但是這個LoRA的權重不要給太重，大概落在0.4～0.7就好，
`<lora:xiaoshazi:0.4>`，如果給太重會影響到面容。

*  <a target="_blank" href="https://civitai.com/models/10850/chilloutmixss">chilloutmixss (LoRA)</a>



### Realistic Vision (真人風格)
**模型說明**:Realistic Vision 是Stable Diffusion 1.5 訓練的模型，能夠產生高度擬真風格、高細節的圖片，非常擅長動物與人像。

**模型類型**：CheckPoint

**下载地址：**：<a target="_blank" href="https://civitai.com/models/4201?modelVersionId=501240">Realistic Vision</a>


![Realistic Vision](/img/blog/realistic-vision-1.webp)

▲ 算完真的有被嚇到....這真的是AI嗎！？真的不是傳一張世界某個角落的人像照片給我？
![Realistic Vision](/img/blog/realistic-vision-2.webp)

Realistic Vision 可以搭配這個LoRA使用
*  <a target="_blank" href="https://civitai.com/models/58390/detail-tweaker-lora-lora">Detail Tweaker LoRA </a>
  
主要是增加圖片的細節以及降低對比，參數可能要多條幾次才會出來比較理想得圖片，我是給大約-1~1。

`<lora:add detail:-1>`





但是Realistic Vision 再生成純背景的時候，例如自然景觀的時候就比較不適合了。

<!-- 你以為Stable diffusion，生成式影像只能生成美女嗎，那你就太小看它了，這邊就推薦幾個不同領域的 models給各位參考。 -->


### AnythingElse V4 (二次元)
**模型說明**:是專門針對動漫風格的圖像生成進行訓練的模型，可以產出非常高細節、高質量的動漫風格圖像。

**模型類型**：CheckPoint<br>

**下載地址**：<a target="_blank" href="https://civitai.com/models/4855/anythingelse-v4">AnythingElse V4 </a>

![anythingelsev4](/img/blog/anythingelsev4-1.webp)


![anythingelsev4](/img/blog/anythingelsev4-2.webp)

<!-- * 二次元 Checkpoint https://blog.256pages.com/stable-diffusion-top3-anime-model/ -->


#### 吉卜力
宮崎駿迷一定要玩玩看這個LoRA，這邊我有搭配這個LoRA去使用，二次元風格有超級多的LoRA，尤其是知名的動漫。

**模型類型**：LoRA

**下載地址**： <a target="_blank" href="https://civitai.com/models/6526?modelVersionId=7657"> Studio Ghibli Style LoRA </a>
<!-- Studio Ghibli Style -->

![anythingelsev4](/img/blog/anythingelsev4-3lora.webp)

不過這邊要注意的是，要給得非常具體，才有辦法出來最精準的形象哦。例如:

**prompt:**

ghibli style, san \(mononoke hime\), 1girl, armlet, bangs, black hair, black undershirt, breasts, cape, circlet, earrings, facepaint, floating hair, forest, fur cape, green eyes, jewelry, looking at viewer, medium breasts, nature, necklace, outdoors, parted bangs, shirt, short hair, sleeveless, sleeveless shirt, solo, tooth necklace, tree, upper body, white shirt , ((masterpiece)) 

最好是把外觀描述得越詳細越好，然後前面還要提到動漫名稱以及角色名稱。san \(mononoke hime\)

### Fantasy World
**模型說明：** 二次元遊戲場景。

**模型類型**：CheckPoint

**下載地址**： <a target="_blank" href="https://civitai.com/models/11031?modelVersionId=13069"> Fantasy World </a>


![fantasyworld](/img/blog/fantasyworld-1-3.webp)
![fantasyworld](/img/blog/fantasyworld-1.webp)
![fantasyworld](/img/blog/fantasyworld-2.webp)
![fantasyworld](/img/blog/fantasyworld-4.webp)

(持續更新)




<!-- 下载地址： https:/civita.com/odels/6526/studio-ghibli-style-lora

模型说明：吉卜力风格模型。 -->

<!-- 吉卜力風格背景
https://civitai.com/models/54233/ghiblibackground -->

<!-- 
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


向量圖 -->






<!-- ### Makoto Shinkai

新海誠風格
模型类别：LoRA 模型

下载地址：https://civitai.com/models/10626/makoto-shinkai-substyles-style-lora

模型说明：新海诚画风模型。

原神風格

* [DDicon](https://civitai.com/models/38511/ddicon?modelVersionId=44447)
* [ddicon lora](https://civitai.com/models/38558/ddiconlora) 

* [ReV Animated]( https://civitai.com/models/7371?modelVersionId=46846)


### XSarchitectral-InteriorDesign-ForXSLora

模型类别：Checkpoint 模型

下载地址：https://civitai.com/models/28112/xsarchitectural-interiordesign-forxslora

模型说明：室内设计模型，建议配合 LoRA 使用： https://civitai.com/models/25383/xsarchitectural-7modern-interior。

### architectural design sketches with markers

模型类别：Checkpoint 模型

下载地址： https://civitai.com/models/34384/architectural-design-sketches-with-markers

模型说明：建筑设计草图模型 。触发词：marker painting、handsketch
 -->


    






## 結論
以上就是幾個我玩過效果比較好的CheckPoint、和LoRA。這篇文章會持續更新，因為模型跟LoRA進步的速度很快，可能每幾週又有新的CheckPoint可以玩了。

<!-- 
## prompt 數字代表的意思-權重解析




## SD VAE(Variation autoencoder)
有些模型本身自帶VAE -->






<!-- 相關參考連結：
* <a target="_blank" href="https://blog.256pages.com/stable-diffusion-basic-prompt-tutorial/">Stable Diffusion Prompt (基本篇)</a>
*  -->
Stable Diffusion：
*    <a target= _blank href="/stable-diffusion">完整 Stable Diffusion 教學：從 Colab 到本地端，快速上手 Web UI 生成精美圖像</a>
