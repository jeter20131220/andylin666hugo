---
author: "andy"
title: "什麼是AI Agent"
image: "img/what-is-ai-agent.webp"
url: /what-is-ai-agent
draft: true
date: 2025-01-10
description: ""
tags: ["ai","agent"]
archives: ["2025/1"]
---
根據OpenAI 制定了實現通用人工智慧 (AGI) 的路線圖，其中包括五個關鍵階段 <a target="_blank" href="https://www.bloomberg.com/news/articles/2024-07-11/openai-sets-levels-to-track-progress-toward-superintelligent-ai">彭博新聞</a> ，而我們熟知的Chargpt大約都只能屬於Level1 （Chatbots）、還有Level2 (Reasoners)。

![OpenAI Imagines Our AI Future — AGI ](/img/blog/OpenAI-Imagines.png)

<p style="text-align: center;">▲ OpenAI Imagines Our AI Future — AGI [bloomberg news]</p>

#### **Level 1: Chatbots:(聊天機器人)**
  * **描述**: 最基礎的 AI 功能，專注於自然語言處理，提供與人類的基本對話交互。
  * **能力**:理解和生成語言。回答問題、提供信息或執行簡單指令。
  * **應用**:客戶服務（如 ChatGPT）。聊天機器人和語音助理（如 Siri, Alexa）。


####  **Level 2: Reasoners (推理者)**
  * **描述**: 能夠進行邏輯推理和解決問題的 AI 系統，接近人類的問題解決能力。
  * **能力**:分析複雜的數據和情境、執行多步推理任務、提出清晰的解釋和建議。
  * **應用**:研究助手（如協助進行數學推導或科學分析、企業決策支持（如分析財務數據或業務風險）。

####  **Level 3: Agent Systems (代理)**
  * **描述**: 可以主動採取行動並完成複雜任務的 AI 系統，類似於具備執行能力的智能代理。
  * **能力**:感知環境，理解上下文、自主規劃和執行任務、與其他系統交互協作
  * **應用**: 自動化運營系統（如 IT 運維 AI）、智能工作流協調（如自動化辦公助手）。

####  **Level 4: Innovators (創新者)**
  * **描述**: 具備創新能力的 AI 系統，能幫助人類進行創造性工作，例如發明新技術或解決前所未有的挑戰。
  * **能力**: 開發新概念、新方法、創造性地組合已有知識來解決問題、協助人類在科學、藝術和工程領域創新。
  * **應用**:藥物研發（如生成潛在的新藥物分子、工程設計（如新材料的創造）。

####  **Level 5: Organizations (組織)**
  * **描述**: 可以模擬一個完整組織的 AI 系統，執行從決策制定到資源管理的所有職能。
  * **能力**:統籌規劃和管理多個子系統或代理、協調多任務目標和資源分配、長期學習和適應，持續優化運營。
  * **應用**: 自主運行的虛擬公司或實體、全球協調的社會問題解決（如應對氣候變化或災害管理）。



而我們現在所提到的Agent 是屬於Level3 的Agent。

<!-- ### 這只是一個概念性的東西 簡單解釋一下就好，舉幾個例子，然後看看能否實作。 -->

## 什麼是 AI Agent？

人工智慧代理人（AI Agent）是指 **一種能夠自主地感知、思考和執行任務的軟體系統。** 這些代理人通常以人工智慧技術為核心，結合感知、推理、決策和行動能力，目的是在特定環境中執行任務，並對外部刺激作出適當的反應。

AI Agent 的概念源於人工智慧與代理人技術的結合，常見於自動化系統、虛擬助理、推薦系統，以及更複雜的應用如機器人和自駕車等。


![AI Agent](/img/blog/AI-Agent.webp)

## AI Agent 的核心組成

一個 AI Agent 通常由以下幾個主要部分組成：

###  感知（Perception）

* 感知模組負責從環境中收集資料，例如來自攝像頭的影像、傳感器的數據，或是用戶的語音指令。

* 例如：語音助理通過麥克風捕捉語音，並使用語音辨識技術將其轉換為文字。

### 推理與決策（Reasoning and Decision-Making）

* 推理模組負責分析感知到的數據，理解環境或問題，並選擇適當的行動。

* 使用技術包括機器學習模型、規則系統、知識圖譜等。

###  行動（Action）

* 行動模組根據決策採取具體行動，例如生成語音回覆、控制機器人的運動，或操作其他系統。

### 學習（Learning）

* AI Agent 通常具有學習能力，你也可以通過經驗的積累或使用新數據來改進自身表現。

* 深度學習和強化學習是常見的學習方法。


為了更了解什麼是Ai agent 我們就來動手做一個簡單又實用的Agent項目吧！


<!-- ## AI Agent 項目- AI筆記生成器

我這邊先叫他 ai_note_generator，你可以取一個你喜歡的名字，目的就是透過提供網頁連結，讓他幫妳生成筆記並且存成md檔。

為什麼選擇做這項目呢？因為這項目可以展現多種Agent 協作的能力，也就是所謂的Multi-Agent-System。

而這個項目也不算白做，因為我們每日都在閱讀大量繁瑣的網頁，如果由AI 來幫生成重點整理也有節省了一部分的時間。而透過這個間單的項目，也能夠更容易解整個AI Agent的運作方式。讓我們開始吧！

項目目標:
1. 接收用戶提供的網頁連結。
2. 搜索目標網頁，提取相關信息。
3. 編輯與生成筆記，總結重點內容。
4. 將筆記彙整為 Markdown 格式的報告，方便分享或存檔。 -->

<!-- Zapier、replit agent

openai ai feature level 1 to 5

chatgpt and copilot

what are ai agent?

ai agent 未來展望

24小時工作的客服

提示詞工程 -->

## AI agent應用


https://ithelp.ithome.com.tw/articles/10341149





