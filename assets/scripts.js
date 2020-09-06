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

   $('#tipue_search_input').tipuesearch({
    'wholeWords': false, //한글 검색을 가능하게 하는 옵션
    'showTime': false, //검색이 완료되기 까지 소요된 시간을 표시하는 옵션
    'minimumLength': 1 //최소 검색 글자수에 대한 설정으로 필자는 한단어 이상이면 검색가능하게 설정
  });
});