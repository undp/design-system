/* Function to chech if element is in viewport or not */

// jQuery.fn.isInViewport = function () {
//   const $elementTop = jQuery(this).offset().top;
//   const $elementBottom = $elementTop + jQuery(this).outerHeight();

//   const $viewportTop = jQuery(window).scrollTop();
//   const $viewportBottom = $viewportTop + jQuery(window).height();

//   return $elementBottom > $viewportTop && $elementTop < $viewportBottom;
// };

// jQuery(window).on('resize scroll load', () => {
//   jQuery('[data-viewport=true]').each(function () {
//     if (jQuery(this).isInViewport()) {
//       jQuery(this).addClass('inviewport');
//     }
//   });
// });



jQuery(window).on('load', () => {

  const $objs = jQuery('[data-viewport=true]');
  if ($objs.length > 0) {

    const isElementInViewport = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          jQuery(entry.target).addClass('inviewport');
          isElementInViewport.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    $objs.each((i, element) => {
      isElementInViewport.observe(element);
    });

  }

});