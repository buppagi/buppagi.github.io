---
title: "[VS Code] 항상 git 자격증명 요구 해제방법"
excerpt: "VS Code git 자격증명 요구 해제방법을 알려드립니다."
date: 2019-05-31 09:14:35 +0900
header: 
  overlay_image: "/assets/images/posts/2019/05/vscode-logo.png"
categories: [개발도구]
tags: [UI 개발, 개발도구, 에디터]
comments: true
---

VS Code를 실행하면 저같은 경우는 bitbucket 자격증명하라고 계속 팝업창이 뜹니다.
처음에 한두번은 그냥 끄거나 로그인을 했는데요…

실행할 때마다 뜨니깐 은근 짜증이 나고 신경이 쓰이더군요.

{% include figure image_path="/assets/images/posts/2019/05/vscode-bitbucekt-login.png" alt="" caption="로그인 팝업창" %}

구글링한 결과 알아냈습니다. ㅎㅎ
![](/assets/images/posts/2019/05/git.autofetch.png){: .align-center}

기본설정이 들어갑니다. 검색에 ```autofetch```라고 검색하면 위의 이미지처럼 나옵니다. 체크해제를 하면 더이상 팝업창이 안뜹니다. 참 쉽죠?ㅋㅋ