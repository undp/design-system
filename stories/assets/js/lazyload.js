document.addEventListener('DOMContentLoaded', () => {
  const lazyloadImages = document.querySelectorAll('img.lazy');
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(() => {
      const SCROLL_TOP = window.pageYOffset;
      lazyloadImages.forEach((img) => {
        if (img.parentElement.parentElement.offsetTop < (window.innerHeight + SCROLL_TOP)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationChange', lazyload);
      }
    }, 20);
  }

  window.addEventListener('load', lazyload);
  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
});
