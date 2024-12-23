---
author: "andy"
title: "chrome extension"
image: "img/stable-diffusion-cover.webp"
url: /stable-diffusion
draft: true
date: 2024-12-03
description: ""
tags: ["web","chrome-extension"]
archives: ["2024/12"]
---

將網頁打包成 Chrome Extension 是一個輕量且高效的選擇，特別適合需要與 Chrome 瀏覽器緊密結合的應用程式。以下是步驟和適合的方法：

1. 確定適合的 Chrome Extension 類型
Chrome Extension 的類型主要有以下幾種，根據需求選擇：

Popup Extension：一個按鈕，點擊時彈出一個小視窗顯示網頁內容。
Background Script Extension：在後台執行任務，如處理 API 請求或持續運行的服務。
Content Script Extension：嵌入到指定的網頁中，對該網頁進行修改或與之互動。
New Tab/Override Pages：將網頁內容設為新的標籤頁或覆蓋頁。

2. 基本文件結構
Chrome Extension 至少需要以下文件：

    my-extension/
    ├── manifest.json        # 必須的配置文件
    ├── popup.html           # 顯示的網頁內容（可選）
    ├── popup.js             # 對網頁的邏輯處理（可選）
    ├── background.js        # 背景腳本（可選）
    └── icons/               # 圖標文件夾（可選）
1. 建立 manifest.json 文件
manifest.json 是 Extension 的核心，配置基本信息。以下是一個典型的配置範例：

    {
    "manifest_version": 3,
    "name": "My Chrome Extension",
    "version": "1.0",
    "description": "這是一個將網頁內容包裝成 Chrome Extension 的範例。",
    "permissions": ["storage", "tabs"],

    "action": {
        "default_popup": "popup.html",
        "default_icon": {
        "16": "icons/icon16.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
        }
    },
    "background": {
        "service_worker": "background.js"
    },
    "content_scripts": [
        {
        "matches": ["https://*.example.com/*"],
        "js": ["content.js"]
        }
    ]
    }

關鍵字段解釋：
manifest_version: 必須是 3（最新版本）。
action: 設定擴展的按鈕行為，例如彈出頁面。
background: 定義後台腳本，處理持續運行的任務。
content_scripts: 定義要注入到特定網頁的腳本。
permissions: 定義需要的權限（如存取 Tabs 或儲存數據）。

1. 創建網頁相關文件
Popup 網頁
新增一個簡單的 popup.html：

html

    <!DOCTYPE html>
    <html>
    <head>
    <title>My Extension</title>
    </head>
    <body>
    <h1>Hello!</h1>
    <p>這是你的 Chrome Extension。</p>
    <script src="popup.js"></script>
    </body>
    </html>

### Popup 腳本
新增 popup.js，處理按鈕點擊或其他行為：

    document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = "點我!";
    document.body.appendChild(button);
    button.addEventListener('click', () => {
        alert('你好！這是你的擴展功能！');
    });
    });

1. 添加背景腳本（可選）
如果需要後台處理任務，新增 background.js：

    chrome.runtime.onInstalled.addListener(() => {
     console.log("Extension Installed");
    });

1. 加載你的 Extension
2. 打開 Chrome，輸入 chrome://extensions/。
3. 打開 開發者模式。
4. 點擊 加載已解壓的擴展程序。
5. 選擇你的專案資料夾。
### 適合的擴展方式

將網頁內容嵌入 Popup：如果你的網頁功能單一，適合將網頁的 HTML、CSS、JavaScript 文件直接嵌入到 popup.html。
使用 Content Scripts：如果你的網頁需要與其他網站互動，例如抓取或修改第三方網站內容。
New Tab/Override Pages：如果你的網頁是一個完整應用，可以將其設為 Chrome 新標籤頁。
工具建議
使用 Webpack 或 Vite 打包：如果你的網頁使用模組化代碼，可以使用這些工具打包輸出適合 Chrome Extension 的文件。
使用 Extension 開發框架：如 crxjs，簡化開發流程。
如果你有具體的需求或不確定如何選擇，可以提供更多細節，我可以幫你量身打造更適合的方案！