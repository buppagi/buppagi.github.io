$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  // 이미지 alt 속 내용을 캡션으로 만들어줌
  $('.container .row p > img[alt]').replaceWith(function () {
    return '<figure>'
      + '<a href="' + $(this).attr('src') + '" class="mg-link">'
      + '<img src="' + $(this).attr('src') + '"/></a>'
      + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
      + '</figure>';
  });

  // 이미지를 magnific popup image viewer에 연결시킴
  $('.mg-link').magnificPopup({
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true
    },
    retina: {
      ratio: 1, 
      replaceSrc: function (item, ratio) {
        return item.src.replace(/\.\w+$/, function (m) { return '@2x' + m; });
      }
    },
    closeOnContentClick: true
  });

  $('.search-toggle').on('click', function(){
    if (!$(this).hasClass('active')) {
      $(this).addClass("active");
      $('body').css('overflow', 'hidden');
      $('header.masthead').addClass('on');
      $(".header-search-block").fadeIn();
      $(".header-search-block .tipue_search_input").focus().select();
    }
    return false;
  });

  $('.header-search-block').on('click', '.search-close', function(){
    $(".header-search-block .tipue_search_input").blur();
    $('body').removeAttr('style');
    $('header.masthead').removeClass('on');
    $(".header-search-block").fadeOut();
    $('.search-toggle').removeClass('active');
  });

  // 검색
  $('#tipue_search_input').tipuesearch({
    'wholeWords': false, //한글 검색을 가능하게 하는 옵션
    'showTime': false, //검색이 완료되기 까지 소요된 시간을 표시하는 옵션
    'minimumLength': 1 //최소 검색 글자수에 대한 설정으로 필자는 한단어 이상이면 검색가능하게 설정
  });
  // 지운 후 input로 포커스 이동
  $('.search-form__reset').on('click', function(){
    $('#tipue_search_input').focus();
  });
});

/* 테마 모드 변경 */
function changeTheme() {
  if (localStorage.getItem('theme') === "dark") {
    localStorage.setItem('theme', '');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  location.reload();
}
// 하단 버튼
if (window.theme !== 'dark') {
  $('#btn-theme').attr('aria-pressed', false).find('i').removeClass('fa-sun').addClass('fa-moon');
  $('#btn-theme-txt').text('다크 모드로 보기');
} else {
  $('#btn-theme').attr('aria-pressed', true).find('i').removeClass('fa-moon').addClass('fa-sun');
  $('#btn-theme-txt').text('라이트 모드로 보기');
}

// 스크롤
(function (registerScrollPercent) {
  var THRESHOLD = 50;
  var backToTop = document.querySelector('.back-to-top');
  var readingProgressBar = document.querySelector('.reading-progress-bar');
  // For init back to top in sidebar if page was scrolled after page refresh.
  window.addEventListener('scroll', () => {
    var scrollPercent;
    if (backToTop || readingProgressBar) {
      var docHeight = document.querySelector('.container').offsetHeight;
      var winHeight = window.innerHeight;
      var contentVisibilityHeight = docHeight > winHeight ? docHeight - winHeight : document.body.scrollHeight - winHeight;
      var scrollPercentRounded = Math.round(100 * window.scrollY / contentVisibilityHeight);
      scrollPercent = Math.min(scrollPercentRounded, 100) + '%';
    }
    if (backToTop) {
      backToTop.classList.toggle('back-to-top-on', window.scrollY > THRESHOLD);
      backToTop.querySelector('span').innerText = scrollPercent;
    }
    if (readingProgressBar) {
      readingProgressBar.style.width = scrollPercent;
    }
  });

  backToTop && backToTop.addEventListener('click', () => {
    window.anime({
      targets: document.scrollingElement,
      duration: 500,
      easing: 'linear',
      scrollTop: 0
    });
  });
})();