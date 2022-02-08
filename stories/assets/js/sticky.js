import * as utility from './resize';

// stickyScroll handler function.
export function sticky() {
  const stickyScroll = (state) => {
    const $sticky = $('.sticky');
    if ($($sticky).length) {
      if (state) {
        // Calculate values only if stickyScroll enabled.
        const $stickyTop = $($sticky).offset().top;
        const $headerHeight = $('.header').innerHeight() || 115
        const $footerTop = $('.footer').offset().top;
        $(window).on("scroll", () => {
          // Calculate this inside scroll after image loads.
          const $stickyHeight = $($sticky).innerHeight();
          let windowTop = Math.round($(window).scrollTop());
          let startPoint = Math.round($stickyTop - $headerHeight) < windowTop;
          let diff = Math.round($footerTop - $stickyHeight) - 20;
          let stopPoint = windowTop > diff - $headerHeight;
          if (startPoint && !stopPoint) {
            $($sticky).css({ position: 'fixed', top: $headerHeight });
          } else if (stopPoint) {
            $($sticky).css({ position: 'absolute', top: diff });
          } else {
            $($sticky).css({ position: 'absolute', top: 'initial' });
          }
        });
      } else {
        // Unbind window scroll event and Reset sticky position if stickyScroll disabled.
        $(window).off("scroll");
        $($sticky).css({ position: '', top: '' });
      }
    }
  }

  // initialize stickyScroll function and enable/disable based on mediaQuery breakpoint.
  const initStickyScroll = (params) => {
    const $windowWidth = $(window).width();
    const breakpoint = window.UNDP.breakpoints.TABLET || 834;
    if ($windowWidth > breakpoint) {
      // Enable Sticky Scroll.
      stickyScroll(true);
    } else {
      // Disable Sticky Scroll.
      stickyScroll(false);
    }
  }

  // Run on doc ready.
  $(document).ready(() => {
    let init = false;
    if (!init) {
      initStickyScroll();
      init = true;
    }
  });

  // Custom windowResize;
  utility.windowResize($(window), (e) => {
    initStickyScroll();
  });
}
