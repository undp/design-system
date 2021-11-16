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
    /* Each function used for if have same class more then 1.  
    To do smart resize */
    $(ele).each(function(){
      if ($(this).isInViewport()) {
        $(this).addClass('inviewport');
      }
    });
  });
}
