---
author: "andy"
title: "Rwd css 斷點"
image: ""
url: /rwdcss
draft: true
date: 2024-10-13
description: ""
tags: ["css","scss"]
archives: ["2024/11"]
---
## CSS RWD Breakpoints
    /* 非常小的手機裝置 */
        @media (max-width: 320px) {
    /* 樣式 */
    }

    /* 小型手機 */
    @media (min-width: 321px) and (max-width: 480px) {
    /* 樣式 */
    }

    /* 平板電腦和某些手機 */
    @media (min-width: 481px) and (max-width: 768px) {
    /* 樣式 */
    }

    /* 小型桌上型螢幕或橫向平板 */
    @media (min-width: 769px) and (max-width: 1024px) {
    /* 樣式 */
    }

    /* 大型桌上型螢幕 */
    @media (min-width: 1025px) and (max-width: 1280px) {
    /* 樣式 */
    }

    /* 超寬螢幕或更大型的桌上型螢幕 */
    @media (min-width: 1281px) and (max-width: 1440px) {
    /* 樣式 */
    }

    /* 極大尺寸螢幕 */
    @media (min-width: 1441px) {
    /* 樣式 */
    }
