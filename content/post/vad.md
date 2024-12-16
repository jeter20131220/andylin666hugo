---
author: "andy"
title: "Vad js教學"
image: ""
url: /how-to-use-vadjs-eventListener-web-voice-activity
draft: true
date: 2024-10-13
description: ""
tags: ["git"]
archives: ["2024/11"]
---
## 什麼是VAD.js
VAD(Voice Activity Detection)語音活動監測，顧名思義就是**一項用於檢測語音信號是否存在語音處理的技術。**

## 如何安裝 vad.js

    https://github.com/ricky0123/vad.git

### 使用 CDN 引入
    <script src="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.19.2/dist/ort.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.19/dist/bundle.min.js"></script>
    
    <script>
        async function main() {
            const myvad = await vad.MicVAD.new({
            onSpeechStart: () => {
            console.log("Speech start detected")
        },
        onSpeechEnd: (audio) => {
            // do something with `audio` (Float32Array of audio samples at sample rate 16000)...
        }
        })
        myvad.start()
        }
        main()
    </script>

### 使用 npm 安装（適合Vue、React等框架）

    npm install @ricky0123/vad-web

<br>

    import vad from '@ricky0123/vad-web';

    export default {
        mounted() {
                const myvad = await vad.MicVAD.new({
                positiveSpeechThreshold: 0.8,
                minSpeechFrames: 5,
                preSpeechPadFrames: 10,
                // 其他配置
            });
        }
    }



[live demo](https://www.vad.ricky0123.com/)

廢話不多說直接上程式。
<br>

    const myvad = await vad.MicVAD.new({
          positiveSpeechThreshold: 0.8,
          minSpeechFrames: 5,
          preSpeechPadFrames: 10,
          onFrameProcessed: (probs) => {
            const indicatorColor = interpolateInferno(probs.isSpeech / 2)
            document.body.style.setProperty("--indicator-color", indicatorColor)
          },
          onSpeechEnd: (arr) => {
            const wavBuffer = vad.utils.encodeWAV(arr)
            const base64 = vad.utils.arrayBufferToBase64(wavBuffer)
            const url = data:audio/wav;base64,${base64}
            const el = addAudio(url)
            const speechList = document.getElementById("playlist")
            speechList.prepend(el)
          },
        })

## VAD.js 參數介紹:       

* positiveSpeechThreshold: 0.8

這個值控制語音檢測的靈敏度。值範圍通常在 0 到 1 之間。
0.8 意味著概率高於 0.8 的片段會被認為是語音。越高的值表示對語音檢測的要求更嚴格，降低此值則會更容易檢測到語音。

* minSpeechFrames: 5

設置被認為是語音片段的最小幀數。只有連續檢測到至少 5 幀的語音時，才會確定為語音。
這有助於避免短暫的噪音被誤認為語音事件。

* preSpeechPadFrames: 10

在語音檢測開始之前，保留的「預處理」幀數。此參數有助於在語音事件之前添加一些緩衝，以捕捉語音片段開始前的背景音或安靜時間。設置為 10 意味著語音開始之前會包含 10 幀的資料。

* onFrameProcessed: (probs) => {...}

此回調函數在每個幀被處理後觸發，並接收一個參數 probs。
probs.isSpeech 表示當前幀是否檢測到語音（值範圍為 0 到 1）。
interpolateInferno(probs.isSpeech / 2) 則通過一種視覺化映射函數生成一個顏色值，用來動態改變頁面上的指示器顏色。

* onSpeechEnd: (arr) => {...}

當語音結束時觸發的回調。參數 arr 包含語音片段的音訊數據。
回調函數的處理步驟如下：
使用 vad.utils.encodeWAV(arr) 將音訊數據轉換為 WAV 格式。
使用 vad.utils.arrayBufferToBase64(wavBuffer) 將 WAV 編碼為 base64 字符串。
創建一個 data:audio/wav;base64,${base64} 格式的 URL 並傳遞給 addAudio 函數，以便在網頁上播放該音訊。