---
author: "andy"
title: "Highlight.js教學主題自定義：為你的程式碼區塊選擇和創建自定義配色方案"
image: "img/highlightcover.webp"
url: /highlightjs
draft: false
date: 2024-11-13
description: ""
tags: ["highlight.js"]
archives: ["2024/11"]
---
創建一個技術部落格需要剪貼大量的程式，但是多數佈景主題的code block幾乎都是黑底白字或是白底黑字。對於我們這些習慣於有語法突顯(Syntax Highlighting)，可能會不太習慣，於是在網路上找到一個非常強大的語法突顯工具，讓我們在網頁上也可以點亮我們寫在部落格當中的code。

## Getting Started with highlight.js

### 引入highlight.js CDN 

    <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <!-- Highlight.js 自動掃描頁面中的程式碼區塊並應用Syntax Highlighting -->
    <script>hljs.highlightAll();</script>

這幾個CDN只有包含特定幾個常見的程式語言的Syntax Highlighting，如果本身有需要包含go語言的話還需要引入

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script>

### npm install highlight.js 
    npm install highlight.js

## javascript 

    // JavaScript: todo list function
    const todos = [];

    function addTodo(task) {
        todos.push(task);
        console.log(`Task "${task}" added to the list.`);
    }

    function showTodos() {
        console.log("To-Do List:");
        todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
    }

    addTodo("Learn JavaScript");
    addTodo("Build a to-do app");
    showTodos();

## python 

    # Python: simple todo list function
    todos = []

    def add_todo(task):
        todos.append(task)
        print(f'Task "{task}" added to the list.')

    def show_todos():
        print("To-Do List:")
        for index, task in enumerate(todos, start=1):
            print(f"{index}. {task}")

    add_todo("Learn Python")
    add_todo("Build a to-do app")
    show_todos()

## Custom highlight.js樣式

如果想要其他的樣式的話，可以去到highlightjs的官網，這裡多達數十種主題。從github、xcode、vscode、甚至是obsidian都有。

![highlight.js demo](/img/blog/highlightjsdemo.webp)

如果還是沒找到，直接把CSS的CDN拿掉重新定義所有的顏色。或是引用自己喜歡的CSS CDN ，然後將特定幾個標籤給上important。


    .hljs {
        background: #282a36;
        color: #f8f8f2;
        padding: 0.5em;
        border-radius: 8px;
        font-family: 'Fira Code', monospace;
    }
    .hljs-keyword { color: #ff79c6 !important; font-weight: bold; }
    .hljs-string { color: #50fa7b; }
    .hljs-comment { color: #6272a4; font-style: italic; }
    .hljs-function { color: #8be9fd; }

打開網頁的檢查工具可以看到每一個字代表的HTML tag。

 ![highlight.js demo](/img/blog/highlightjs-1.webp)   

highlightjs 官網:<a href="https://highlightjs.org/demo" target="_blank">
https://highlightjs.org/demo
</a>
