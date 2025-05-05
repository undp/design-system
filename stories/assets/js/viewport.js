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