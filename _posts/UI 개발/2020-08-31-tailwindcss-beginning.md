---
title: "🐪 TailwindCSS 시작하기!"
excerpt: "Tainwindcss 초보라를 위해서 하나씩 올려보겠습니다. (저도 처음하는 사용자입니다.)"
date: 2020-08-31 14:22:40 +0900
background: '/img/posts/2020/08/bg-gulp-width-tailwindcss.jpg'
categories: [UI 개발]
tags: [css, tailwindcss, framework, frontend, gulpjs]
comments: true
---
## TailwindCSS 입문
> TailwindCSS 초보자를 위해서 만들어졌습니다. gulp를 이용해 테일윈드를 사용법을 설명할 예정입니다. 이 내용은 @manjumjn의 [gulp-with-tailwindcss](https://github.com/manjumjn/gulp-with-tailwindcss)를 바탕으로 번역 및 편집 되었습니다.

### TailwindCSS은 무엇?

- tailwindcss는 화면 디자인을 위한 프레임워크입니다.
- 사용자 맞춤 디자인을 유틸리티 우선으로 빠르게 구축하는 CSS **프레임워크**

### NPM 명령어
1. NPM 설치
```
npm install
``` 
2. 실시간 미리보기를 위해 개발 및 서버 실행
```
npm run dev
```
3. 라이브 서버용으로 최소화되고, 최적화 된 파일을 생성하기
```
npm run build
```

## tailwindcss 설치하기
### 1.NPM을 통해 Tailwind 설치하기
```
# Using npm
npm install tailwindcss
```

### 2.CSS에 Tailwind 추가
`@tailwind` 지시문을 사용하여 Tailwind의 기본, 구성 요소 및 유틸리티 스타일을 CSS에 삽입합니다.
```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```
### 3.Tailwind 구성 파일 만들기 (선택 사항)
Tailwind 설치를 사용자 지정하려는 경우 `tailwindcss npm 패키지`를 설치할 때 포함 된 Tailwind CLI 유틸리티를 사용하여 프로젝트에 대한 구성 파일을 생성 할 수 있습니다.
```
npx tailwindcss init
```
그러면 프로젝트 루트에 최소한의 `tailwind.config.js` 파일이 생성됩니다
```js
// tailwind.config.js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
[configuration documentation](https://tailwindcss.com/docs/configuration)에서 Tailwind 구성에 대해 자세히 보시면 됩니다.

### 4. taiwind로 CSS 적용

#### Options
##### Paths
파일 경로 및 대상 / 빌드 폴더 또는 글꼴 두께를 변경하려면 **package.json** 파일을 확인하십시오.
```bash
"options": {
    ...
    "paths": {
        "root": "./",
        "src": {
            "base": "./src",
            "css": "./src/css",
            "js": "./src/js",
            "img": "./src/img"
        },
        "dist": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
        "build": {
            "base": "./dist",
            "css": "./dist/css",
            "js": "./dist/js",
            "img": "./dist/img"
        },
    }
    ...
}
```

#### Tailwind 및 PostCSS 설정
```
const { src, dest, task, watch, series, parallel } = require('gulp');
const postcss = require('gulp-postcss'); //tailwind 유티릴리티 컴파일링
const purify = require('gulp-purifycss'); //사용하지 않는 CSS제거하기
```
#### gulp
[gulp-postcss](https://github.com/postcss/gulp-postcss)에 전달하는 플러그인 목록에 `tailwindcss`를 추가하기
```
//Compiling styles
task('dev-styles', ()=> {
    var tailwindcss = require('tailwindcss'); 
    return src(options.paths.src.css + '/**/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss(options.config.tailwindjs),
            require('autoprefixer'),
        ]))
        .pipe(concat({ path: 'style.css'}))
        .pipe(dest(options.paths.dist.css));
});

//Compiling styles
task('build-styles', ()=> {
    return src(options.paths.dist.css + '/**/*')
    .pipe(purgecss({
        content: ["src/**/*.html","src/**/.*js"],
        extractors: [{
            extractor: TailwindExtractor,
            extensions: ['html']
        }]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest(options.paths.build.css));
});
```

#### PostCSS와 함께 Tailwind 사용
일반적으로 이것은 `postcss.config.js` 파일에 Tailwind를 플러그인으로 추가하기:
```
module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}
```
일반적으로 PostCSS를 시작하는 방법에 대한 지침은 [PostCSS documentation](https://github.com/postcss/postcss#usage)를 참조하십시오.

## CDN을 통해 Tailwind 사용
CDN 빌드를 사용하면, Tailwind CSS를 더 좋은 기능은 Tailwind를 빌드 프로세스에 통합하지 않고는 사용할 수 없습니다.

- Tailwind의 기본 테마를 사용자 지정할 수 없습니다. 
- `@apply, @variants` 등과 같은 [지시문](https://tailwindcss.com/docs/functions-and-directives)을 사용할 수 없습니다. 
- [***group-hover***](https://tailwindcss.com/docs/pseudo-class-variants#group-hover)와 같은 기능을 활성화 할 수 없습니다. 
- 타사 플러그인을 설치할 수 없습니다. 

빠른 데모를 위해 Tailwind를 가져 오거나 프레임 워크를 실행하려면 CDN을 통해 최신 기본 구성 빌드를 가져올 수 있습니다.

```html
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```

## Google Fonts를 포함하는 방법
tailwind 구성 파일에 글꼴을 포함하고 `<link>` 태그를 사용하여 링크하려면이 [tailwind 문서](https://tailwindcss.com/docs/fonts/#font-families)를 따르면 됩니다.

## 사용 도구 
- [VS Code](https://code.visualstudio.com/) 에디터
- VS Code에서 자동 완성을 위한 [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
      

