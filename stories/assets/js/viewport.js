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

const isElementInViewport = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inviewport');
      isElementInViewport.unobserve(entry.target);
      if (isElementInViewport.takeRecords().length === 0) {
        isElementInViewport.disconnect();
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-viewport=true]').forEach((element) => {
    isElementInViewport.observe(element);
  });
});