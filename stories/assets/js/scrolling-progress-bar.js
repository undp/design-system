if (jQuery('.progress-container .progress-bar').length > 0) {
  jQuery(window).on('scroll', () => {
    const $windowHeight = (jQuery(window).height() == jQuery(document).height()) ? window.innerHeight : jQuery(window).height();
    const $scrollPercent = (jQuery(window).scrollTop() / (jQuery(document).height() - $windowHeight)) * 100;
    const $roundScroll = Math.round($scrollPercent);
    jQuery('.progress-container .progress-bar').css('width', `${$roundScroll}%`).toggleClass('progress-top', $roundScroll > 1);
  });
}
