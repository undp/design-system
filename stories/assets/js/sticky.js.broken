import * as utility from './resize';

// stickyScroll handler function.
export function sticky(stickyArea, stickyMovingSide, StickyScrollBar) {
  const stickyScroll = (state) => {
    const $sticky = jQuery(stickyArea);
    const $relatedPublication = jQuery(stickyMovingSide);
    if (jQuery($sticky).length && jQuery($relatedPublication).length) {
      if (state) {
        // Calculate values only if stickyScroll enabled.
        const $stickyTop = jQuery($sticky).offset().top;
        const $headerHeight = jQuery('.header').innerHeight() + 15 || 130;
        const $footerTop = jQuery('.footer').offset().top;

        jQuery(window).on('scroll', () => {
          // Calculate this inside scroll after image loads.
          const $stickyHeight = jQuery($sticky).innerHeight();
          const $stickyReleaseHeight = jQuery($relatedPublication).innerHeight();
          const $stickyReleaseOffset = jQuery($relatedPublication).offset().top;

          let windowTop = Math.round(jQuery(window).scrollTop());
          let startPoint = Math.round($stickyTop - $headerHeight) < windowTop;
          let $stickyScrollUp = Math.round(($stickyReleaseOffset + $stickyReleaseHeight) - $stickyHeight);
          let stopPoint = windowTop > $stickyScrollUp - $headerHeight;
          if (startPoint && !stopPoint) {
            jQuery($sticky).css({ position: 'fixed', top: $headerHeight, width: 'inherit' });
          } else if (stopPoint) {
            jQuery($sticky).css({ position: 'absolute', top: $stickyScrollUp, width: 'inherit' });
          } else {
            jQuery($sticky).css({ position: 'absolute', top: 'initial', width: 'inherit' });
          }
        });
      } else {
        // Unbind window scroll event and Reset sticky position if stickyScroll disabled.
        jQuery(window).on('scroll', () => {
          jQuery($sticky).css({ position: '', top: '', width: '100%' });
        });
      }
    }
  };

  // stickyScrollBar add on Sidebar,if sidebar content is more than [window screen - header Height].
  const stickyScrollBar = () => {
    // initialize stickyScrollBar
    const $sidebarWrapper = jQuery(StickyScrollBar);

    // stickyScrollBar length check
    if (jQuery($sidebarWrapper).length) {
      const $sidebarHeight = $sidebarWrapper.innerHeight();
      const $windowHeight = jQuery(window).innerHeight();
      const $headerHeight = jQuery('.header').height();

      // stickyScrollBar function condition check.
      if ($sidebarHeight > ($windowHeight - $headerHeight)) {
        $sidebarWrapper.addClass('scrollbar');
      } else {
        $sidebarWrapper.removeClass('scrollbar');
      }
    }
  };

  // initialize stickyScrollBar function.
  jQuery(window).on('load', () => {
    stickyScrollBar();
  });

  // initialize stickyScroll function and enable/disable based on mediaQuery breakpoint.
  const initStickyScroll = (params) => {
    const $windowWidth = jQuery(window).width();
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
  jQuery(document).ready(() => {
    let init = false;
    if (!init) {
      initStickyScroll();
      init = true;
    }
  });

  // Custom windowResize;
  utility.windowResize(jQuery(window), (e) => {
    initStickyScroll();
    stickyScrollBar();
  });
}
