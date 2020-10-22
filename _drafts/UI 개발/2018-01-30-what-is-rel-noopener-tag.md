---
title: "Tabnabbing 공격의 원리 그리고 rel=noopener 속성"
excerpt: "Tabnabbing의 동작 원리와 공격에 대해서 알아보고 대응하는 방법도 알려드립니다."
date: 2018-01-30 15:23:29 +0900
categories: [UI 개발]
tags: [UI 개발, HTML, Tabnabbing, rel]
---

# Tabnabbing(탭내빙)
> HTML 문서 내애에서 링크(target이 `_blank`인 Anchor 태그)를 클릭 했을 때, 새롭게 열린 탭(또는 페이지)에서 기존의 문서의 location을 피싱사이트로 변경해 정보를 탈취하는 공격 기술을 뜻한다. 이 공격은 메일이나 오픈 커뮤니티에서 쉽게 사용될 수 있습니다.


참고블로그
https://blog.jxck.io/entries/2016-06-12/noopener.html
https://tech.lezhin.com/2017/06/12/tabnabbing
https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
https://blog.coderifleman.com/2017/05/30/tabnabbing_attack_and_noopener/
https://searchenginelaws.com/seo/what-is-rel-noopener-noreferrer-tag/