$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("[data-tag]").click((e) => {
    currentTag = e.target.dataset.tag;
    filterByTagName(currentTag);
  })

  function filterByTagName(tagName) {
    $('.hidden').removeClass('hidden');
    $('.post-wrapper').each((index, elem) => {
      if (!elem.hasAttribute(`data-${tagName}`)) {
        $(elem).addClass('hidden');
      }
    });
    $(`.tag`).removeClass('selected');
    $(`.tag[data-tag=${tagName}]`).addClass('selected');
  }

  let currentTag = "";
  const queryTag = getQuery().tag;
  if (queryTag) {
    currentTag = queryTag;
    filterByTagName(currentTag)
  }
});

function getQuery() {
  var params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
  return params;
}

function updateQueryString(tagName) {
  const path = `${location.protocol}//${location.host}${location.pathname}?tag=${tagName}`;
  window.history.replaceState({ path }, '', path);
}