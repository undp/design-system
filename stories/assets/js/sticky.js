import * as utility from './resize';

// stickyScroll handler function.
export function sticky() {
  const stickyScroll = (state) => {
    const $sticky = $('.sticky');
    const $relatedPublication = $('.related-publication');
    if ($($sticky).length && $($relatedPublication).length) {
      if (state) {
        // Calculate values only if stickyScroll enabled.
        const $stickyTop = $($sticky).offset().top;
        const $headerHeight = $('.header').innerHeight() +15 || 130
        const $footerTop = $('.footer').offset().top;

        $(window).on("scroll", () => {
          // Calculate this inside scroll after image loads.
          const $stickyHeight = $($sticky).innerHeight();
          const $stickyReleaseHeight = $($relatedPublication).innerHeight();
          const $stickyReleaseOffset = $($relatedPublication).offset().top;

          let windowTop = Math.round($(window).scrollTop());
          let startPoint = Math.round($stickyTop - $headerHeight) < windowTop;
          let $stickyScrollUp = Math.round(($stickyReleaseOffset + $stickyReleaseHeight) - $stickyHeight);
          let stopPoint = windowTop > $stickyScrollUp  - $headerHeight;
          if (startPoint && !stopPoint) {
            $($sticky).css({ position: 'fixed', top: $headerHeight, width: 'inherit'});
          } else if (stopPoint) {
            $($sticky).css({ position: 'absolute', top: $stickyScrollUp , width: 'inherit' });
          } else {
            $($sticky).css({ position: 'absolute', top: 'initial', width: 'inherit'});
          }
        });
      } else {
        // Unbind window scroll event and Reset sticky position if stickyScroll disabled.
        $(window).on('scroll', function () {
          $($sticky).css({ position: '', top: '', width: '100%' });
        });
      }
    }
  }

  // initialize stickyScroll function and enable/disable based on mediaQuery breakpoint.
  const initStickyScroll = (params) => {
    const $windowWidth = $(window).width();
    const breakpoint = window.UNDP.breakpoints.LARGE || 1024;
    if ($windowWidth >= breakpoint) {
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
