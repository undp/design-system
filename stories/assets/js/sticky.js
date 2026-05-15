// import * as utility from './resize';

// stickyScroll handler function.
export function sticky(stickyArea, stickyMovingSide) {
  let scrollHandler = null;

  const stickyScroll = (state) => {
    const stickyElement = document.querySelector(stickyArea);
    const relatedPublication = document.querySelector(stickyMovingSide);
    if (!stickyElement || !relatedPublication) {
      return;
    }

    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler = null;
    }

    if (state) {
      const stickyTop = stickyElement.getBoundingClientRect().top + window.scrollY;
      const headerElement = document.querySelector('.header');
      const headerHeight = (headerElement ? headerElement.offsetHeight : 115) + 15;

      scrollHandler = () => {
        const stickyHeight = stickyElement.offsetHeight;
        const stickyReleaseHeight = relatedPublication.offsetHeight;
        const stickyReleaseOffset = relatedPublication.getBoundingClientRect().top + window.scrollY;

        const windowTop = Math.round(window.scrollY);
        const startPoint = Math.round(stickyTop - headerHeight) < windowTop;
        const stickyScrollUp = Math.round((stickyReleaseOffset + stickyReleaseHeight) - stickyHeight);
        const stopPoint = windowTop > stickyScrollUp - headerHeight;

        if (startPoint && !stopPoint) {
          stickyElement.style.position = 'fixed';
          stickyElement.style.top = `${headerHeight}px`;
          stickyElement.style.width = 'inherit';
        } else if (stopPoint) {
          stickyElement.style.position = 'absolute';
          stickyElement.style.top = `${stickyScrollUp}px`;
          stickyElement.style.width = 'inherit';
        } else {
          stickyElement.style.position = 'absolute';
          stickyElement.style.top = 'initial';
          stickyElement.style.width = 'inherit';
        }
      };

      window.addEventListener('scroll', scrollHandler);
      scrollHandler();
      return;
    }

    stickyElement.style.position = '';
    stickyElement.style.top = '';
    stickyElement.style.width = '100%';
  };

  // stickyScrollBar add on sidebar if sidebar content is more than [window screen - header height].
  // const stickyScrollBar = () => {
  //   const sidebarWrapper = document.querySelector(StickyScrollBar);
  //   if (sidebarWrapper) {
  //     const sidebarHeight = sidebarWrapper.offsetHeight;
  //     const windowHeight = window.innerHeight;
  //     const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
  //     if (sidebarHeight > (windowHeight - headerHeight)) {
  //       sidebarWrapper.classList.add('scrollbar');
  //     } else {
  //       sidebarWrapper.classList.remove('scrollbar');
  //     }
  //   }
  // };

  // initialize stickyScroll function and enable/disable based on mediaQuery breakpoint.
  const initStickyScroll = () => {
    const windowWidth = window.innerWidth;
    const breakpoint = 1024;
    if (windowWidth >= breakpoint) {
      // Enable Sticky Scroll.
      stickyScroll(true);
    } else {
      // Disable Sticky Scroll.
      stickyScroll(false);
    }
  };

  initStickyScroll();

  window.addEventListener("resize", initStickyScroll);

}
