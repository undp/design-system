$(window).on('scroll', () => {
  const $scrollAmount = $(window).scrollTop();
  const $documentHeight = $(document).height();
  const $windowHeight = ($(window).height() == $(document).height()) ? window.innerHeight : $(window).height();
  const $scrollPercent = ($scrollAmount / ($documentHeight - $windowHeight)) * 100;
  const $roundScroll = Math.round($scrollPercent);
  $('div.progress-bar').css('width', `${$roundScroll}%`);
  if ($roundScroll > 1) {
    $('div.progress-bar').addClass('progress-top');
  } else {
    $('div.progress-bar').removeClass('progress-top');
  }
});
