import * as utility from './resize';

// stickyScroll handler function.
export function sticky(stickyArea, stickyMovingSide, StickyScrollBar) {
  const stickyScroll = (state) => {
    const $sticky = $(stickyArea);
    const $relatedPublication = $(stickyMovingSide);
    if ($($sticky).length && $($relatedPublication).length) {
      if (state) {
        // Calculate values only if stickyScroll enabled.
        const $stickyTop = $($sticky).offset().top;
        const $headerHeight = $('.header').innerHeight() + 15 || 130;
        const $footerTop = $('.footer').offset().top;

        $(window).on('scroll', () => {
          // Calculate this inside scroll after image loads.
          const $stickyHeight = $($sticky).innerHeight();
          const $stickyReleaseHeight = $($relatedPublication).innerHeight();
          const $stickyReleaseOffset = $($relatedPublication).offset().top;

          let windowTop = Math.round($(window).scrollTop());
          let startPoint = Math.round($stickyTop - $headerHeight) < windowTop;
          let $stickyScrollUp = Math.round(($stickyReleaseOffset + $stickyReleaseHeight) - $stickyHeight);
          let stopPoint = windowTop > $stickyScrollUp - $headerHeight;
          if (startPoint && !stopPoint) {
            $($sticky).css({ position: 'fixed', top: $headerHeight, width: 'inherit' });
          } else if (stopPoint) {
            $($sticky).css({ position: 'absolute', top: $stickyScrollUp, width: 'inherit' });
          } else {
            $($sticky).css({ position: 'absolute', top: 'initial', width: 'inherit' });
          }
        });
      } else {
        // Unbind window scroll event and Reset sticky position if stickyScroll disabled.
        $(window).on('scroll', () => {
          $($sticky).css({ position: '', top: '', width: '100%' });
        });
      }
    }
  };

  // stickyScrollBar add on Sidebar,if sidebar content is more than [window screen - header Height].
  const stickyScrollBar = () => {
    // initialize stickyScrollBar
    const $sidebarWrapper = $(StickyScrollBar);

    // stickyScrollBar length check
    if ($($sidebarWrapper).length) {
      const $sidebarHeight = $sidebarWrapper.innerHeight();
      const $windowHeight = $(window).innerHeight();
      const $headerHeight = $('.header').height();

      // stickyScrollBar function condition check.
      if ($sidebarHeight > ($windowHeight - $headerHeight)) {
        $sidebarWrapper.addClass('scrollbar');
      } else {
        $sidebarWrapper.removeClass('scrollbar');
      }
    }
  };

  // initialize stickyScrollBar function.
  $(window).on('load', () => {
    stickyScrollBar();
  });

  // initialize stickyScroll function and enable/disable based on mediaQuery breakpoint.
  const initStickyScroll = (params) => {
    const $windowWidth = $(window).width();
    const breakpoint = 1024;
    if ($windowWidth >= breakpoint) {
      // Enable Sticky Scroll.
      stickyScroll(true);
    } else {
      // Disable Sticky Scroll.
      stickyScroll(false);
    }
  };

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
    stickyScrollBar();
  });
}
