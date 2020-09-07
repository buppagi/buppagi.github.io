---
layout: post
title: "HTML &lt;head&gt;태그에 알아보자."
subtitle: "&lt;head&gt;태그에 종류 및 기능들을 자세히 살펴보자."
date: 2017-05-31 22:41:35 +0900
background: ''
categories: [web tech, html]
tags: [html, uidev, tags, meta]
comments: true
---

<h1 id="table-of-contents">목차</h1>
- [개요](#개요)
- [최소 권장](#최소-권장)
- [요소들](#요소들)
- [메타(Meta)](#메타meta)
- [링크(Link)](#링크link)
  - [파비콘(Favicons)](#파비콘favicons)
- [소셜(Social)](#소셜social)
  - [페이스북 오픈 그래프](#페이스북-오픈-그래프)
  - [페이스북 인스던트 아티클](#페이스북-인스던트-아티클)
  - [트위터(Twitter)](#트위터twitter)
  - [Google+ / Schema.org](#google--schemaorg)
  - [Pinterest](#pinterest)
  - [OEmbed](#oembed)
- [브라우저 / 플랫폼](#브라우저--플랫폼)
  - [Apple iOS](#apple-ios)
  - [Apple Safari](#apple-safari)
  - [Google Android](#google-android)
  - [Google Chrome](#google-chrome)
  - [Google Chrome Mobile (Android Only)](#google-chrome-mobile-android-only)
  - [Microsoft Internet Explorer](#microsoft-internet-explorer)
- [App Links](#app-links)
- [Browsers (Chinese)](#browsers-chinese)
  - [360 Browser](#360-browser)
  - [QQ Mobile Browser](#qq-mobile-browser)
  - [UC Mobile Browser](#uc-mobile-browser)
- [노트](#노트)
  - [성능](#성능)
- [다른 자료](#다른-자료)
- [관련 프로젝트들](#관련-프로젝트들)
- [라이센스](#라이센스)
      - [참조 블로그](#참조-블로그)


# 개요
HTML을 사용하면서 `<meta>`태그를 사용하긴 하는데 대충 이해<sup>(자주 사용하는 요소만)</sup>만 하거나 아니면 전에 작성한 것을 <kbd>CTRL+C</kbd>, <kbd>CTRL+V</kbd>하기만 했었습니다. 그치만 근래 [Open Graph](http://ogp.me/)도 많이 사용 되면서 궁금증이 생겨났고, 좀 더 깊이 그리고 자세히 알고 싶어졌습니다.
혹시 나와 같은 사람들이 분명히 있을 듯하여 구글링 검색을 통해 알게 된 자료를 가지고 정리를 해보려고 합니다.

우선, 정리 하기전에`<meta>` 태그 보단 `<head>` 태그 영역에 들어가는 것을 좀 더 심도 있게 다뤄보려고 합니다.


# 최소 권장

다음은 웹 사이트에 필요한 기본적인 태그이다.
```html
<!-- 문서의 문자 인코딩 설정 -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 위의 3가지 메타 태그는 반드시 head 태그 속에 있어야 합니다. 다른 head 내용은 이 태그들 뒤에 오면 됩니다. -->
<title>Page Title</title>
```

# 요소들
```html
<!-- 문서의 제목 -->
<title>Page Title</title>

<!-- Base 요소는 문서에 포함된 모든 상대 URL들의 기준 URL을 나타냅니다. -->
<base href="https://example.com/page.html">

<!--  외부 CSS 포함하기 -->
<link rel="stylesheet" href="styles.css">

<!-- 문서 내의  CSS -->
<style>
    /* ... */
</style>

<!-- JavaScript -->
<script src="script.js"></script>
<noscript><!-- JS 없을 때--></noscript>
```
**[⬆ 위로 이동](#table-of-content)**

# 메타(Meta)
```html
<!-- 문서의 문자 인코딩 설정 -->
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- 위의 3가지 메타 태그는 반드시 head 태그 속에 있어야 합니다. 다른 head 내용은 이 태그들 뒤에 오면 됩니다.-->

<!-- 리소스가 로드 되는 곳의  요청을 허용. -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<!-- 가능한 한 문서 초기에 배치. -->
<!--이 태그 아래의 콘텐츠에만 적용됩니다. -->

<!-- 웹 응용 프로그램의 이름 (사이트가 응용 프로그램으로 사용되는 경우에만 사용됨) -->
<meta name="application-name" content="응용 프로그램 이름">

<!-- 페이지의 대한 간단한 설명 (최대 150자) -->
<!-- 일부 상황에서는 이 설명이 검색 결과에 표시된 조각의 일부로 사용됩니다. -->
<meta name="description" content="페이지 설명">

<!-- 검색 엔진의 크롤링 및 색인 생성 동작 제어 -->
<meta name="robots" content="index,follow"><!-- 모든 검색 엔진 -->
<meta name="googlebot" content="index,follow"><!-- Google에만 유효 -->

<!-- Google에 사이트 링크에 ​​대한 검색 창을 표시하지 않도록 합니다. -->
<meta name="google" content="nositelinkssearchbox">

<!-- 이 페이지에 대한 번역을 제공하지 않도록 Google에 알린다. -->
<meta name="google" content="notranslate">

<!-- Google Search Console의 소유권 확인 -->
<meta name="google-site-verification" content="verification_token">

<!-- Yandex 웹 마스터의 소유권 확인 -->
<meta name="yandex-verification" content="verification_token">

<!-- 네이버 웹 마스터의 소유권 확인 -->
<meta name="naver-site-verification" content="verification_token">

<!-- Bing Webmaster Center의 소유권 확인 -->
<meta name="msvalidate.01" content="verification_token">

<!-- Alexa Console의 소유권 확인 -->
<meta name="alexaVerifyID" content="verification_token">

<!-- Pinterest Console의 소유권 확인 -->
<meta name="p:domain_verify" content="code from pinterest">

<!-- Norton 보안 사이트의 소유권 확인 -->
<meta name="norton-safeweb-site-verification" content="norton code">

<!-- 웹 사이트 구축에 사용 된 소프트웨어의 이름을 짓는 데 사용됩니다. (즉, WordPress, Dreamweaver) -->
<meta name="generator" content="program">

<!-- 웹 사이트의 주제에 대한 간단한 설명 -->
<meta name="subject" content="웹 사이트 주제">

<!-- 사이트의 콘텐츠를 일반 연령 등급 기반으로 지정  -->
<meta name="rating" content="General">

<!-- 리퍼러 정보 전달 방식을 제어 할 수 있습니다. -->
<meta name="referrer" content="no-referrer">

<!-- 전화 번호 형식을 자동 감지 하지 않도록 설정 -->
<meta name="format-detection" content="telephone=no">
<!-- 전화 번호, 주소, 이메일 형식을 자동 감지 하지 않도록 설정 -->
<meta name="format-detection" content="telephone=no, address=no, email=no">
<!-- 포맷 감지 기능을 전부 안되게 설정 -->
<meta name="format-detection" content="no">

<!-- 'off'로 설정하여 DNS 프리 페치를 사용합니다. -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- 클라이언트 식별을 위해 클라이언트 웹 브라우저에 쿠키를 저장합니다. -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- 특정 프레임에 표시 할 페이지를 지정합니다. -->
<meta http-equiv="Window-Target" content="_value">

<!-- 지역 태그 -->
//국가 코드 (ISO 3166-1): 필수, 상태 코드 (ISO 3166-2):선택사항
//예: content="KR" / content="KR-11"
<meta name="geo.region" content="country[-state]">
<meta name="geo.placename" content="city/town"><!-- 예. content="Seoul" -->
<meta name="geo.position" content="latitude;longitude">
<meta name="ICBM" content="latitude, longitude">
```
* [구글이 이해하는 메타 태그](https://support.google.com/webmasters/answer/79812?hl=en)
* [WHATWG Wiki: 메타 확장 기능](https://wiki.whatwg.org/wiki/MetaExtensions)
* [ICBM - 위키 백과](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
* [위치 정보 태그 - 위키 백과](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

**[⬆ 위로 이동](#table-of-contents)**

# 링크(Link)
```html
<!-- CSS stylesheet -->
<link rel="stylesheet" href="https://example.com/styles.css">

<!-- 콘텐츠 중복 방지 도움말 -->
<link rel="canonical" href="https://example.com/2010/06/9-things-to-do-before-entering-social-media.html">

<!-- 현재 문서의 AMP HTML 버전에 대한 링크 -->
<link rel="amphtml" href="https://example.com/path/to/amp-version.html">

<!-- 웹 응용 프로그램의 "설치" 자격 증명을 지정하는 JSON 파일에 대한 링크 -->
<link rel="manifest" href="manifest.json">

<!-- 문서 작성자 링크 -->
<link rel="author" href="humans.txt">

<!-- 링크 내용에 적용되는 저작권 공지를 가리 킨다. -->
<link rel="license" href="copyright.html">

<!-- 다른 언어의 위치에 대한 참조 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 저자 또는 다른 사람에 대한 정보를 제공합니다. -->
<link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 역사적 기록에 링크, 역사적인 문서 또는 기타 자료의 설명 문서 컬렉션 -->
<link rel="archives" href="https://example.com/archives/">

<!-- 계층 적 구조에서 최상위 리소스에 대한 링크 -->
<link rel="index" href="https://example.com/">

<!-- 자체 참조 제공 - 문서에 가능한 여러 참조가있는 경우 매우 유용하다. -->
<link rel="self" type="application/atom+xml" href="https://example.com/atomFeed.php?page=3">

<!-- 일련의 문서에서 첫 번째, 다음, 이전 및 마지막 문서 -->
<link rel="first" href="https://example.com/atomFeed.php">
<link rel="next" href="https://example.com/atomFeed.php?page=4">
<link rel="prev" href="https://example.com/atomFeed.php?page=2">
<link rel="last" href="https://example.com/atomFeed.php?page=147">

<!-- 타사 서비스를 사용하여 블로그를 관리 할 때 사용됩니다. -->
<link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">

<!-- 다른 워드 프레스 블로그가 워드 프레스 블로그 또는 게시물에 링크되면 자동 주석을 사용합니다. -->
<link rel="pingback" href="https://example.com/xmlrpc.php">

<!-- 자신의 페이지에 있는 URL에 연결할 때 알려줍니다. -->
<link rel="webmention" href="https://example.com/webmention">

<!-- 외부 HTML 문서를 현재 파일에 호출 할 수 있습니다. -->
<link rel="import" href="/path/to/component.html">

<!-- 검색 열기 -->
<link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Search Title">

<!-- Feeds -->
<link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
<link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

<!-- Prefetching, preloading, prebrowsing -->
<link rel="dns-prefetch" href="//example.com/">
<link rel="preconnect" href="https://www.example.com/">
<link rel="prefetch" href="https://www.example.com/">
<link rel="prerender" href="https://example.com/">
<link rel="preload" href="image.png" as="image">
<!-- 더 많은 정보: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
```
**[⬆ 위로 이동](#table-of-contents)**

## 파비콘(Favicons)
```html
<!-- IE 10 이하는 -->
<!-- `favicon.ico`를 루트 디렉토리에 두면 태그가 필요 없다. -->

<!-- For IE 11, Chrome, Firefox, Safari, Opera -->
<link rel="icon" type="image/png" sizes="16x16" href="/path/to/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/path/to/favicon-96x96.png">
```
* [파비콘에 관한 모든 것(또는 터치 아이콘)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
* [파비콘 Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)

**[⬆ 위로 이동](#table-of-contents)**

# 소셜(Social)

## 페이스북 오픈 그래프
```html
<meta property="fb:app_id" content="123456789">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="">
```
*   [페이스북 오픈 그래프 마크업](https://developers.facebook.com/docs/sharing/webmasters#markup)
*   [오픈 그래프 프로토콜](http://ogp.me/)

**[⬆ 위로 이동](#table-of-contents)**

## 페이스북 인스던트 아티클
```html
<meta charset="utf-8">
<meta property="op:markup_version" content="v1.0">

<!-- 아티클의 웹 버전  -->
<link rel="canonical" href="http://example.com/article.html">

<!-- 아티클의 스타일에 적용됩니다. -->
<meta property="fb:article_style" content="myarticlestyle">
```
*   [페이스북 인스던트 아티클: 아티클 작성법](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
*   [인스던트 아티클 코드 샘플](https://developers.facebook.com/docs/instant-articles/reference)

**[⬆ 위로 이동](#table-of-contents)**

## 트위터(Twitter)
```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">
```
*   [Twitter Cards: 가이드 문서](https://dev.twitter.com/cards/getting-started)
*   [Twitter Card 검사기](https://cards-dev.twitter.com/validator)

**[⬆ 위로 이동](#table-of-contents)**

## Google+ / Schema.org
```html
<link href="https://plus.google.com/+YourPage" rel="publisher">
<meta itemprop="name" content="Content Title">
<meta itemprop="description" content="Content description less than 200 characters">
<meta itemprop="image" content="https://example.com/image.jpg">
```
**[⬆ 위로 이동](#table-of-contents)**

## Pinterest

Pinterest를 사용하면 [도움말 센터](https://help.pinterest.com/en/articles/prevent-people-saving-things-pinterest-your-site)에 따라 사람들이 웹 사이트에서 콘텐츠를 저장하지 못하게 할 수 있습니다.  
`description`은 선택 사항이다.
```html
<meta name="pinterest" content="nopin" description="Sorry, you can't save from my website!">
```
**[⬆ 위로 이동](#table-of-contents)**

## OEmbed
```html
<link rel="alternate" type="application/json+oembed"
    href="http://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
    title="oEmbed Profile: JSON">
<link rel="alternate" type="text/xml+oembed"
    href="http://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
    title="oEmbed Profile: XML">
```
*   [oEmbed format](http://oembed.com/)

**[⬆ 위로 이동](#table-of-contents)**

# 브라우저 / 플랫폼

## Apple iOS
```html
<!-- 스마트 앱 Banner -->
<meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">

<!-- 가능한 전화 번호의 자동 감지 및 형식을 사용하지 않도록 설정 -->
<meta name="format-detection" content="telephone=no">

<!-- 홈 화면에 추가 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="App Title">

<!-- Touch Icons -->
<!-- 대부분의 경우, <head>에있는 180x180x 크기의 터치 아이콘으로 충분합니다. -->
<link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">
<!-- 참고 : iOS 7의 Safari는 아이콘으로 작동하지 않습니다. -->
<!-- Safari의 이전 버전에서는 -precomposed.png 접미사로 이름이 지정된 아이콘 파일에 효과를 주지 않습니다. -->

<!-- iOS 앱 딥 링크 -->
<meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
<link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">
```
*   [Apple Meta 태그](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

**[⬆ 위로 이동](#table-of-contents)**

## Apple Safari
```html
<!-- 고정 된 사이트 -->
<link rel="mask-icon" href="/path/to/icon.svg" color="red">
```
**[⬆ 위로 이동](#table-of-contents)**

## Google Android
```html
<meta name="theme-color" content="#E64545">

<!-- 홈 화면에 추가 -->
<meta name="mobile-web-app-capable" content="yes">
<!-- 추가 정보: https://developer.chrome.com/multidevice/android/installtohomescreen -->

<!-- Android 앱 딥 링크 -->
<meta name="google-play-app" content="app-id=package-name">
<link rel="alternate" href="android-app://package-name/http/url-sample.com">
```
**[⬆ 위로 이동](#table-of-contents)**

## Google Chrome
```html
<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID">

<!-- 번역 프롬프트 사용 중지  -->
<meta name="google" content="notranslate">
```
**[⬆ 위로 이동](#table-of-contents)**

## Google Chrome Mobile (Android Only)

Chrome 31부터는 웹 앱을 Safari와 같은 '앱 모드'로 설정할 수 있습니다.
```html
<!-- 매니페스트에 연결하고 매니페스트 메타 데이터를 정의합니다. -->
<!-- manifest.json의 예는 아래 링크에서 찾을 수 있습니다. -->
<link rel="manifest" href="manifest.json">

<!-- 웹 응용 프로그램 용 웹 페이지 정의 -->
<meta name="mobile-web-app-capable" content="yes">

<!-- 기본 화면 아이콘  -->
<link rel="icon" sizes="192x192" href="highres-icon.png">
```
*   [Google Developer](https://developer.chrome.com/multidevice/android/installtohomescreen)

**[⬆ 위로 이동](#table-of-contents)**

## Microsoft Internet Explorer
```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="skype_toolbar" content="skype_toolbar_parser_compatible">

<!-- IE10: 탭 링크시 강조 표시 사용 중지 (https://blogs.windows.com/buildingapps/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10/) -->
<meta name="msapplication-tap-highlight" content="no">

<!-- 고정 사이트 (https://msdn.microsoft.com/en-us/library/dn255024(v=vs.85).aspx) -->
<meta name="application-name" content="Sample Title">
<meta name="msapplication-tooltip" content="A description of what this site does.">
<meta name="msapplication-starturl" content="http://example.com/index.html?pinned=true">
<meta name="msapplication-navbutton-color" content="#FF3300">
<meta name="msapplication-window" content="width=800;height=600">
<meta name="msapplication-task" content="name=Task 1;action-uri=http://host/Page1.html;icon-uri=http://host/icon1.ico">
<meta name="msapplication-task" content="name=Task 2;action-uri=http://microsoft.com/Page2.html;icon-uri=http://host/icon2.ico">
<meta name="msapplication-badge" value="frequency=NUMBER_IN_MINUTES;polling-uri=http://example.com/path/to/file.xml">
<meta name="msapplication-TileColor" content="#FF3300">
<meta name="msapplication-TileImage" content="/path/to/tileimage.jpg">

<meta name="msapplication-config" content="http://example.com/browserconfig.xml">
<meta name="msapplication-notification" content="frequency=60;polling-uri=http://example.com/livetile;polling-uri2=http://example.com/livetile2">
<meta name="msapplication-task-separator" content="1">
```
**[⬆ 위로 이동](#table-of-contents)**

# App Links
```html
<!-- iOS -->
<meta property="al:ios:url" content="applinks://docs">
<meta property="al:ios:app_store_id" content="12345">
<meta property="al:ios:app_name" content="App Links">
<!-- Android -->
<meta property="al:android:url" content="applinks://docs">
<meta property="al:android:app_name" content="App Links">
<meta property="al:android:package" content="org.applinks">
<!-- Web Fallback -->
<meta property="al:web:url" content="http://applinks.org/documentation">
<!-- More info: http://applinks.org/documentation/ -->
```
*   [App Links Docs](http://applinks.org/documentation/)

**[⬆ 위로 이동](#table-of-contents)**

# Browsers (Chinese)

## 360 Browser
```html
<!-- 렌더링 엔진 선택 -->
<meta name="renderer" content="webkit|ie-comp|ie-stand">
```
**[⬆ 위로 이동](#table-of-contents)**

## QQ Mobile Browser
```html
<!-- 화면을 지정된 방향으로 잠근다.(가로/세로) -->
<meta name="x5-orientation" content="landscape/portrait">
<!-- 이 페이지를 전체 화면으로 표시 -->
<meta name="x5-fullscreen" content="true">
<!-- 페이지가 "응용 프로그램 모드"로 표시된다 (전체 화면 등). -->
<meta name="x5-page-mode" content="app">
```
**[⬆ 위로 이동](#table-of-contents)**

## UC Mobile Browser
```html
<!-- 지정된 방향으로 화면 잠금 (가로 / 세로 화면 잠그기) -->
<meta name="screen-orientation" content="landscape/portrait">
<!-- 이 페이지를 전체 화면으로 표시. -->
<meta name="full-screen" content="yes">
<!-- "텍스트 모드"에서도 UC 브라우저는 그림을 표시합니다. -->
<meta name="imagemode" content="force">
<!-- 페이지가 "응용 프로그램 모드"로 표시됩니다. (전체 화면, 금지 된 제스처 등) -->
<meta name="browsermode" content="application">
<!-- 이 페이지에서 UC 브라우저의 "야간 모드"를 비활성화하시오. -->
<meta name="nightmode" content="disable">
<!-- 페이지 단순화 및 데이터 전송 감소 -->
<meta name="layoutmode" content="fitscreen">
<!-- UC 브라우저의 기능을 비활성화합니다. "글꼴을 확대 할 때이 페이지의 텍스트가 더 많을 때" -->
<meta name="wap-font-scale" content="no">
```
*   [UC Browser Docs](http://www.uc.cn/download/UCBrowser_U3_API.doc)

**[⬆ 위로 이동](#table-of-contents)**

# 노트

## 성능

GZIP이 활성화되면 `href` 속성이 `a`, `base` 및 `link` 태그에 사용되므로 `href` 속성이 요소의 시작 부분으로 이동하여 압축이 향상됩니다.

예제:
```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
```
**[⬆ 위로 이동](#table-of-contents)**

# 다른 자료

*   [HTML5 Boilerplate Docs: The HTML](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/html.md)
*   [HTML5 Boilerplate Docs: Extend and customize](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md)

# 관련 프로젝트들

*   [Atom HTML Head Snippets](https://github.com/joshbuchea/atom-html-head-snippets) - `HEAD` 사용자 코드에 대한 Atom 패키지
*   [Sublime Text HTML Head Snippets](https://github.com/marcobiedermann/sublime-head-snippets) - `HEAD` 사용자 코드에 대한 Sublime Text 패키지
*   [head-it](https://github.com/hemanth/head-it) - `HEAD` 사용자코드에 대한 CLI 인터페이스
*   [vue-head](https://github.com/ktquez/vue-head) - Vue.js에서 `head`태그 메타 정보 다루기

# 라이센스

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png){: width="88px" height="31px"}](https://creativecommons.org/publicdomain/zero/1.0/)


#### 참조 블로그

[<head> cheatsheet](http://gethead.info/#qq-mobile-browser)

**[⬆ 위로 이동](#table-of-contents)**