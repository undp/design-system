import './viewport';
import { breakpoints } from './global-variables';

export function parallaxlines() {
  $(window).scroll(() => {
    // variables
    var $sticky = $('.parallax .glide__slides');
    var stickyTop = $sticky.offset().top;
    var windowTop = $(window).scrollTop();
    var diff = windowTop + 500;
    // calculates the window width
    let windowWidth = $(window).width();
    $('.parallax .glide__slides').each(function () {
      if (windowWidth > breakpoints.small) {
        $('.parallax').removeClass('lines-background');
        if ($(this).isInViewport()) {
          if (stickyTop < diff) {
            $('.parallax').toggleClass('lines-background');
          }
        }
      }
    });
  });
}
