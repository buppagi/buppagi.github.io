---
title: "😄 Sublime Text 3 입력시 불필요한 공백 제거하기"
date: 2017-01-17 15:56:00 +0900
categories: [개발도구]
tags: [UI 개발, 개발도구, sublime text]
comments: true
---

메뉴 <u>Preferences => Browse Packages...</u> 탐색기를 엽니다.
폴더에 \CSS\ **<u>css_completions.py</u>** 파일을 엽니다.

※ 혹시나 이 파일을 없을 경우 일전에 글을 올린 `PackageResourceViewer` 플로그인 설치 후에 아래 그림처럼 커맨드창을 열어 플로그인을 실행하면 됩니다.

```json
l.append((prop, prop + ": "))
```

이 소스에서 `“: “`사이의 공백을 제거 하면 CSS자동 완성 기능에서 불필요한 공백이 없어집니다.