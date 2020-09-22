---
title: "워드프레스 'Post-processing of the image failed' 해결방법"
excerpt: "워드프레스 용량이 큰 이미지가 업로드가 안되는 것을 올리는 방법을 안내합니다."
date: 2020-01-29 22:15:35 +0900
background: ''
categories: [개발도구]
tags: [워드프레스, UI 개발, 개발도구]
comments: true
---


워드프레스를 사용하면서 처음 겪는 일이 생겼다. 이미지 업로드하는데 ‘Post-processing of the image failed’라는 메세지와 함께 사진 또는 큰 이미지인 경우 2500픽셀이하로 저장을 해서 다시 업로드 해보라는 메세지다.

그래서 찾아봤더니 여러방법들이 나왔다.
우선 나온 것이 브라우저 캐쉬를 지우라는 것이였고, 또 다른 방법은 워드프레스 버전을 5.3이하버전으로 다운그레이드를 하라는 것이였다.

이것 저것 다 귀찮고 믿지못하는 얘기들인거 같아서…좀 더 찾아봤었는데 아래와 같이 해결방법이 있었다.

```php
add_filter( 'big_image_size_threshold', '__return_false' );
```
이 코드를 function.php에 넣으면 WordPress 5.3에 도입 된 이미지 스케일링이 해제가 되어 업로드가 가능해졌다.
# 참조

[찾은링크](https://wordpress.org/support/topic/unable-to-upload-images-67/page/2/){: target="_blank"}