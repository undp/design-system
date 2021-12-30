import { breakpoints } from './global-variables';

$(document).ready(() => {
  var $sticky = $('.sticky');
  var $stickyrStopper = $('.footer');
  if ($sticky.offset()) {
    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 70;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - (generalSidebarHeight + stickOffset);
    var diff = stopPoint - ($('footer').innerHeight() / 1.7);
    console.log(breakpoints.tablet);
    $(window).scroll(() => {
      var windowTop = $(window).scrollTop();
      if ($(window).width() > breakpoints.tablet) {
        if ($('.footer').isInViewport()) {
          $sticky.css({ position: 'absolute', top: diff });
        } else if (stickyTop < windowTop + stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset });
        } else {
          $sticky.css({ position: 'absolute', top: 'initial' });
        }
      }
    });
  }
});
