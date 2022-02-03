/* Function to chech if element is in viewport or not */
$.fn.isInViewport = function () {
  const $elementTop = $(this).offset().top;
  const $elementBottom = $elementTop + $(this).outerHeight();

  const $viewportTop = $(window).scrollTop();
  const $viewportBottom = $viewportTop + $(window).height();

  return $elementBottom > $viewportTop && $elementTop < $viewportBottom;
};

$(window).on('resize scroll load', () => {
  $('[data-viewport=true]').each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass('inviewport');
    }
  });
});
