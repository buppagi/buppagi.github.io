---
title: "[VS Code] 프로젝트 관리하기"
excerpt: "중요한 프로젝트를 즐겨찾기 하여 프로젝트간에 쉽게 전환이 가능하게 해주는 확장 프로그램입니다."
date: 2019-03-28 10:21:11 +0900
tagline: "중요한 프로젝트를 즐겨찾기 하여 프로젝트간에 쉽게 전환이 가능하게 해주는 확장 프로그램입니다."
header:
  image: "/assets/images/posts/2019/03/vscode-project-manager-logo-readme.png"
  og_image: "/assets/images/posts/2019/03/vscode-project-manager-logo-readme.png"
categories: [개발도구]
tags: [개발도구, UI 개발, 확장프로그램]
comments: true
---


# 기능
- 어떤 프로젝트라도 즐겨찾기로 만들 수 있습니다.
- VSCode, Git, Mercurial or SVN 저장소 자동 검색
- 같은 창이나 새 창으로 프로젝트 열기 가능
- 현재 프로젝트를 식별하는 상태바 표시
- 전용 사이드바

# 특징
## 기본 명령어
- Project Manager: Save Project 현재 폴더를 새 프로젝트로 저장
- Project Manager: Edit Project 수동으로 프로젝트 수정 ( projects.json)
- Project Manager: List Projects to Open 저장/감지된 모든 프로젝트를 나열하고 하나를 선택 - 현재창 열기
- Project Manager: List Projects to Open in New Window 저장/감지된 프로젝트를 모두 나열하고 하나를 선택 - 새창 열기
- Project Manager: Refresh Projects 캐시된 프로젝트 새로고침

## 프로젝트 관리
### 프로젝트 저장하기
언제든지 프로젝트를 저장할 수 있습니다.
<kbd>ctrl+shift+p</kbd> 눌러서 ```pmsp``` 검색 후 엔터

![](/assets/images/posts/2019/03/vscode-project-manager-pmsp.png){: .align-center}

### 프로젝트 수정하기
프로젝트 목록을보다 쉽게 ​​사용자 정의 할 수 있도록 코드 내에서 직접 ```projects.json``` 파일을 편집 할 수 있습니다.

```Project Manager :``` 프로젝트 편집을 실행하면 ```projects.json``` 파일이 열립니다.

![](/assets/images/posts/2019/03/vscode-project-manager-projects.png){: .align-center}

```json
[
  {
      "name": "Pascal MI",
      "rootPath": "c:\\PascalProjects\\pascal-menu-insight",
      "paths": [],
      "group": "",
      "enabled": true
  },
  {
      "name": "Bookmarks",
      "rootPath": "$home\\Documents\\GitHub\\vscode-bookmarks",
      "paths": [],
      "group": "",
      "enabled": true
  },
  {
      "name": "Numbered Bookmarks",
      "rootPath": "$home\\Documents\\GitHub\\vscode-numbered-bookmarks",
      "paths": [],
      "group": "",
      "enabled": false
  }
]
```
현재는 <u>이름</u>, <u>rootpath</u>, 그리고 <u>enabled</u> 필드만 사용가능합니다. 기본적으로 상태바에 프로젝트 이름이 뜨게 되어있습니다.

```json
"projectManager.showProjectNameInStatusBar": true 
```
하단 상태 바에 프로젝트명 표시
![](/assets/images/posts/2019/03/vscode-project-manager-name.png){: .align-center}

### 사이드 바
프로젝트에 사이드바가 표시가 되어서 화면 창에 더 많은 여유공간을 확보 가능합니다.  사이드 바에서는 몇가지 명령을 사용할 수 있습니다.

- 프로젝트 항목을 클릭하면 프로젝트가 열립니다. (동일창에)
- 새 창으로 열고 싶다면 마우스 오른쪽버튼을 클릭하시면 됩니다.
- 현재 작업공간에서 프로젝트를 추가할 수 있습니다.

![](/assets/images/posts/2019/03/gitlens-preview.gif){: .align-center}

### 다운로드

- 마켓주소: [https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager){: target="_blank" rel="noopener noreferrer"}
- 깃 허브: [https://github.com/alefragnani/vscode-project-manager](https://github.com/alefragnani/vscode-project-manager){: target="_blank" rel="noopener noreferrer"}