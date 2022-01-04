$(document).on('scroll', () => {
  var $pixels = $(document).scrollTop();
  var $pageHeight = $(document).height() - $(window).height();
  var progress = 100 * $pixels / $pageHeight;
  $('div.progress-bar').css('width', `${progress}%`);
  if (progress > 1) {
    $('div.progress-bar').addClass('progress-top');
  } else {
    $('div.progress-bar').removeClass('progress-top');
  }
});
