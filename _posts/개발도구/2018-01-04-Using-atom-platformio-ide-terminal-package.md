---
title: "🧰 Atom platformio ide terminal 패키지 이용하기"
excerpt: "아톰 에디터로 패키지 이용하는 방법 간단하게 설명합니다."
date: 2018-01-04 22:15:35 +0900
background: ''
categories: [개발도구]
tags: [개발도구, UI 개발, Atom, 에디터]
comments: true
toc: true
---

![](/assets/images/posts/2018/01/Platformio-Ide-Terminal-screen.gif){: .align-center}
프론트단에서 npm, gulp, grunt, yarn 등 사용을 하려면 터미널을 사용해야하는데 Atom(아톰) 에디터에서도 터미널을 사용할 수 있다.  
기본적으로 [terminal-plus](https://atom.io/packages/terminal-plus){: target="_blank" rel="noopener noreferrer"} 패키지를 많이 사용했지만 호환이 제대로 안되서 그런건지 몰라도 [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal){: target="_blank" rel="noopener noreferrer"}를 많이 사용하여 이것을 다운받아서 사용했다.

## 설치

setting -> install에서 platformio-ide-terminal를 검색하여 설치를 하면된다.  
![](/assets/images/posts/2018/01/platformio-ide-terminal-install.png){: .align-center}
이미 필자는 설치를 했기 때문에 Uninstall이 나오는 것입니다. 아직 설치를 안했다면 Install 버튼이 있으니 그것을 클릭하시면 됩니다.

## 사용방법

<kbd>ctrl+`</kbd>를 눌러서 터미널 창을 토글할 수 있습니다.

## 특성

### 전체 터미널

모든 터미널에는 시스템의 기본 초기화 파일이 로드 됩니다. 이렇게하면 표준 터미널에서와 동일한 명령 및 별칭에 액세스 할 수 있습니다.

### 테마 변경하기

사용자에 따라서 터미널 테마를 변경할 수 있습니다.
```css
.platformio-ide-terminal .xterm {
  background-color: ;
  color: ;

  ::selection {
    background-color: ;
  }

  .terminal-cursor {
    background-color: ;
  }
}
```
사용자 입장에 맞게 변경을 하려면 위 코드처럼 넣으면 됩니다.

![](/assets/images/posts/2018/01/Platformio-Ide-Terminal-theme-change-screen-capture.jpg){: .align-center}
그러나 코드 넣는 것이 귀찮고 어렵다 하시는 분들은 Settings에서 위의 그림처럼 테마를 선택하시면 됩니다.

### 터미널 이름넣기

코딩을 하다보면 터미널을 한개만 사용하는 것이 아니라 여러가지 사용할 때가 있는데 터미널 이름이 똑같으면 헷갈릴 때가 많습니다. 그래서 아래의 그림처럼 터미널에 이름을 넣어서 구분할 수 있습니다.  
![](https://i.github-camo.com/054cd203b042f12a41ee8e938292da21fc2b40ab/68747470733a2f2f6769746875622e636f6d2f706c6174666f726d696f2f706c6174666f726d696f2d61746f6d2d6964652d7465726d696e616c2f7261772f6d61737465722f7265736f75726365732f7374617475732d69636f6e5f72656e616d652d6469616c6f672e706e67)

### 터미널 아이콘 색상변경

![](https://i.github-camo.com/ae5b5bd4a258fdf0c3922667e1af0171ee810f86/68747470733a2f2f6769746875622e636f6d2f706c6174666f726d696f2f706c6174666f726d696f2d61746f6d2d6964652d7465726d696e616c2f7261772f6d61737465722f7265736f75726365732f7374617475732d69636f6e5f636f6c6f725f636f64696e672e706e67)  
이름을 변경만 가능한 것이 아니라 색상을 변경하여 터미널마다 구분 되게 할 수 있습니다.

### 정렬

열려있는 터미널을 드래그 앤 드롭으로 정렬이 가능합니다.  
![](https://i.github-camo.com/7678a3a409da584cddc31363a8f2bcb82bc4bef0/68747470733a2f2f6769746875622e636f6d2f706c6174666f726d696f2f706c6174666f726d696f2d61746f6d2d6964652d7465726d696e616c2f7261772f6d61737465722f7265736f75726365732f736f7274696e672e676966)
