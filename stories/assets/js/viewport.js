/* Function to chech if element is in viewport or not */
$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

export default function viewport(ele) {
  $(window).on('resize scroll load', function() {
    if ($(ele).isInViewport()) {
      $(ele).addClass('inviewport')
    }
  });
}
