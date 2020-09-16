---
layout: post
title: "👨‍💻 jekyll serve 의존성 오류"
description: "jekyll serve 실행시 sitemap 의존성 오류 해결방법"
date: 2020-09-02 13:22:02 +0900
background: '/img/bg-frontend-dev-unsplash.jpg'
categories: [Web Tech]
tags: [jekyll, plugin, blog]
comments: true
---

![jekyll serve에서 fail](/img/posts/2020/09/jeykll-sitemap-fail.jpg)

jekyll-sitemap을 설치하려면: `gem install jekyll-sitemap`을 실행 한 다음 Jekyll 서버를 다시 실행하면 됩니다.

다른 옵션 ```Gemfile```이라는 파일이있는 경우 기본 폴더에 ```gem jekyll-sitemap```이 있는지 확인하고, ```bundle install```을 실행 한 다음 ```bundle exec jekyll serve```를 실행합니다.

![jekyll serve에서 fail](/img/posts/2020/09/jeykll-sitemap-gemfile.jpg)

간단하게 요약하면:
1. `jekyll-sitemap` 설치
2. `Gemfile`에 가서 `gem jekyll-sitemap` 추가하고
3. 다시 `bundle exec jekyll serve` 실행