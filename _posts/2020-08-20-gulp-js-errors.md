---
layout: post
title: "⚠️ Gulp.js 설치 오류 정리"
description: "gulp.js에 관련 오류를 정리해놓았습니다."
date: 2020-08-20 16:45:35 +0900
background: '/img/posts/2020/08/gulpjs.jpg'
categories: []
tags: [gulpjs, javascript, npm]
comments: true
---

제가 새로 버전을 받고 설치하면서 버전이 3.9.1에서 4.0 이상 올라가 변화되면서 몇가지 오류가 나는 것을 발견하였습니다.

제가 알고 있는 오류를 정리하고 해결했던 방안을 공유합니다.

- [1.self signed certificate in certificate chain](#1self-signed-certificate-in-certificate-chain)
- [2.unable to verify the first certificate](#2unable-to-verify-the-first-certificate)
- [3.task function must be specified](#3task-function-must-be-specified)
- [4.primordials is not defined](#4primordials-is-not-defined)


## 1.self signed certificate in certificate chain
이건 버전 업 되면서 보기보단 보안인증때문에 나는 것으로 쉽게 해결이 됩니다. Gulp.js 설치시 self signed certificate in certificate chain 에러 수정 후 설치하는 방법 에서 확인할 수 있습니다.

## 2.unable to verify the first certificate
```
npm config set registry http://registry.npmjs.org/ --global
```

## 3.task function must be specified
gulp 4.0이상 버전이 되면서 task룰에 gulp.series, gulp.parallel 추가 되었다고 합니다. series는 직렬방식(순차적으로 진행)이고, parallel는 병렬방식(나란히 진행)이라고 합니다

```
gulp.task('default', gulp.series('uglify', 'watch')); gulp.task('default', gulp.parallel('uglify', 'watch'));
```

## 4.primordials is not defined
gulp가 3버전으로 버전 4로 업그레이드 하시면됩니다. 3에 대한 이슈사항은 아래 링크를 참고하시면됩니다.   
[https://github.com/gulpjs/gulp/issues/2324](https://github.com/gulpjs/gulp/issues/2324)

혹시 더 오류를 알고 있거나 제보를 받으면 아는대로 업데이트 하겠습니다.