/* Function to chech if element is in viewport or not */
$.fn.isInViewport = function () {
  const elementTop = $(this).offset().top;
  const elementBottom = elementTop + $(this).outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

export default function viewport(ele) {
  $(window).on('resize scroll load', () => {
    if ($(ele).isInViewport()) {
      $(ele).addClass('inviewport');
    }
  });
}
