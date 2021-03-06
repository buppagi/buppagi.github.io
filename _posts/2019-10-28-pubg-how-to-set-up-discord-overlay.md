---
layout: post
title: "🎮 [배틀그라운드] 디스코드 오버레이 설정방법"
description: "게임화면 위에 디스코드 사람들 표시하는 방법입니다."
date: 2019-10-28 22:12:40 +0900
background: '/img/posts/2019/10/discord-logo.jpg'
categories: []
tags: [IT정보, 디스코드, 배틀그라운드]
comments: true
---

안녕하세요~!

요즘 배틀그라운드 및 다른 게임을 하면서 디스코드를 많이 사용하게 되죠 ㅎㅎ

디스코드를 모르면 검색해보셔야할 거 같고 홈페이지 주소는 아래와 같습니다.
디스코드 간단히 설명하면 게이머를 위한 무료 음성 및 텍스트 채팅 메신저입니다.

![디스코드](/img/posts/2019/10/discord-download.png)

이 글에서는 게임을 하면서 누가 말하는지 모를 때도 있습니다.
(모르는 사람들과 할 때입니다.)
카카오배틀그라운드 및 스팀 배틀그라운드에서 디스코드 설정법입니다.

## 스팀설정
![디스코드01](/img/posts/2019/10/discord01.png)

스팀메신저에서 `Steam -> 설정`에 들어갑니다.

![디스코드02](/img/posts/2019/10/discord02.png)

게임 중 탭에 보면 게임 내 Steam 오버레이 사용이 있습니다. 여기에 체크를 하시면됩니다.

![디스코드 설정방법](/img/posts/2019/10/discord03.png)

위의 그림은 디스코드 설정입니다.
저는 계속 오버레이가 게임위에 나오는 게 싫어서 말하는 사람만 나타나게 해놓았습니다.

## 카카오배그 설정
`윈도우 10` 기준으로 설명을 드리겠습니다. `카카오배그`에서 오버레이를 하려면 디스코드를 관리자 권한으로 실행을 해야합니다.

![window 검색을 이용하여 디스코드 앱(프로그램) 찾기](/img/posts/2019/10/discord04.png)

윈도우 10에서 <kbd>Win + S</kbd>키를 누르면 상단 이미지처럼 뜹니다. dis을 검색하면 디스코드 앱이 나올 것입니다. dis 들어간 다른 프로그램이 많이 나와도 디스코드를 선택해주시면 됩니다.
오른쪽 버튼을 눌러서 관리자 권한으로 실행하시면 됩니다.

![디스코드 오른쪽 버튼을 눌러서 나온 화면](/img/posts/2019/10/discord05.png)

2번째 방법은 디스코드 아이콘에서 오른쪽 버튼을 누릅니다. 그럼 상단 이미지와 같이 메뉴가 나옵니다.
관리자 권한으로 실행을 하면 됩니다. 그리고 바로 카카오배그 위에 실행이 됩니다.

이렇게 실행하면 가능하지만 프로그램 실행할 때마다 관리자 권한으로 해야하는 불편사항이 있습니다.

그래서 디스코드를 실행할 때 항상 관리자 권한으로 실행되게 하는 방법을 안내하겠습니다.
![속성 화면](/img/posts/2019/10/discord06.png)

![속성안에 호환성 탭 화면 갈무리](/img/posts/2019/10/discord07.png)
1. 속성 화면으로 들어오면 위의 이미지처럼 나옵니다.
2. 호환성 탭을 클릭 후에 아래쪽을 보시면 관리자 권한으로 이 프로그램 실행 체크하는 곳이 있습니다.
3. 여기에 체크를 하면 디스코드를 실행할 때마다 관리자 권한으로 실행이 가능합니다.

*간략설명:*
1. 디스코드 아이콘 
2. 마우스 오른쪽 버튼
3. 속성 메뉴 클릭
4. 호환성 탭으로 이동
5. 관리자 권한으로 이프로그램 실행 체크

![바탕화면에서 관리자로 실행](/img/posts/2019/10/discord08.gif)
혹시 바탕화면에서 오른쪽버튼 눌렀는데 위의 화면 처럼 나오지 않으면 윈도우 탐색기 경로에서 아래 코드를 넣어보세요.

```
%userprofile%\Appdata\local\discord
```
설치된 경로로 이동됩니다. 여러버전이 있을경우 최신버전으로 들어가서 Discord.exe에서 속성에 들어가시면 됩니다.

![디스코드 오버레이 설정된 화면](/img/posts/2019/10/discord09.png)
오버레이를 적용한 하면입니다. 왼쪽 상단에 말할 때만 나타납니다.
위에 언급했듯이 저는 말할때만 나오게 디스코드에서 설정을 했습니다.
