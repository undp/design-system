jQuery(window).on('scroll', () => {
  const $scrollAmount = jQuery(window).scrollTop();
  const $documentHeight = jQuery(document).height();
  const $windowHeight = (jQuery(window).height() == jQuery(document).height()) ? window.innerHeight : jQuery(window).height();
  const $scrollPercent = ($scrollAmount / ($documentHeight - $windowHeight)) * 100;
  const $roundScroll = Math.round($scrollPercent);
  jQuery('div.progress-bar').css('width', `${$roundScroll}%`);
  if ($roundScroll > 1) {
    jQuery('div.progress-bar').addClass('progress-top');
  } else {
    jQuery('div.progress-bar').removeClass('progress-top');
  }
});
