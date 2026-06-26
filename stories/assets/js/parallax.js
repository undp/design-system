import './viewport';

// SlowMo easing approximation (ease-in then ease-out, peaks at midpoint)
const slowMo = (t) => {
  if (t < 0.5) {
    return 2 * t * t;
  }
  return -1 + 4 * t - 2 * t * t;
};

// Parse a GSAP-style ScrollTrigger position string to the rect.top value at which
// that trigger fires. Format: "[triggerPos[+=offset[%|px]]] [viewportPos]"
// Examples: 'top bottom', 'top center', 'bottom+=15% center', 'bottom top'
// Returns: rect.top value when the trigger fires (i.e. rect.top == viewportY - triggerOffset)
const parseGSAPPosition = (posStr, containerHeight, vh) => {
  const parts = (posStr || '').trim().split(/\s+/);
  const triggerPart = parts[0] || 'top';
  const viewportPart = parts[1] || 'top';

  // Viewport-side anchor → pixel Y inside viewport
  let viewportY;
  if (viewportPart === 'top') viewportY = 0;
  else if (viewportPart === 'center') viewportY = vh / 2;
  else if (viewportPart === 'bottom') viewportY = vh;
  else viewportY = parseFloat(viewportPart) || 0;

  // Trigger-side anchor → offset from rect.top (distance from top of element to anchor)
  // Handles: 'top', 'center', 'bottom', 'bottom+=15%', 'top-=20px', etc.
  const m = triggerPart.match(/^(top|center|bottom)(?:([+-]=)(\d+\.?\d*)(px|%)?)?$/);
  let triggerOffset = 0;
  if (m) {
    if (m[1] === 'center') triggerOffset = containerHeight / 2;
    else if (m[1] === 'bottom') triggerOffset = containerHeight;
    if (m[2] && m[3]) {
      const sign = m[2] === '-=' ? -1 : 1;
      const amount = parseFloat(m[3]);
      triggerOffset += sign * (m[4] === '%' ? (amount / 100) * containerHeight : amount);
    }
  }

  // rect.top + triggerOffset == viewportY  →  rect.top == viewportY - triggerOffset
  return viewportY - triggerOffset;
};

// parallaxEffect - Create scroll-scrubbed parallax transforms.
// Progress (0→1) is derived directly from scroll position, mapped to transforms.
export const parallaxEffect = (trigger, selector, start, end, direction, device, percent) => {
  // Set Defaults
  start = start || 'top bottom';
  end = end || 'bottom top';
  direction = direction || 'horizontal';
  device = device || 'desktop';
  percent = percent || 'pixels';

  // RTL Fix for Storybook
  let rtl = document.dir || 'ltr';
  if (window.location.href.indexOf('direction=rtl') > -1) {
    rtl = 'rtl';
  }
  const num = (rtl === 'rtl') ? 1 : 0;

  // Convert trigger string to element array
  const parallaxContainers = Array.from(
    typeof trigger === 'string' ? document.querySelectorAll(trigger) : [trigger],
  ).filter(Boolean);

  if (parallaxContainers.length === 0) {
    return;
  }

  const initParallax = () => {
    // Slide grouping for horizontal mode (same logic as before)
    parallaxContainers.forEach((container) => {
      if (direction === 'horizontal') {
        const slides = Array.from(container.querySelectorAll('.swiper-slide'));
        const wrapSlideGroup = (slideGroup) => {
          if (!slideGroup.length) return;
          const wrapper = document.createElement('div');
          wrapper.className = 'stats-card-parallax parallax-slide';
          slideGroup[0].parentNode?.insertBefore(wrapper, slideGroup[0]);
          slideGroup.forEach((el) => wrapper.appendChild(el));
        };

        if (container.querySelector('.swiper-wrapper') != null) {
          if (container.querySelectorAll(`${selector} ${trigger}`).length < 1) {
            const holder = [];
            slides.forEach((slideElement, slideIndex) => {
              holder.push(slideElement);
              if (slideIndex === Math.floor((slides.length - 1) / 2) || slideIndex === slides.length - 1) {
                wrapSlideGroup(holder.slice());
                holder.length = 0;
              }
            });
          }
        }
      }
    });

    // Build a list of {container, element, oddSign} to animate
    const animTargets = [];
    parallaxContainers.forEach((originalContainer) => {
      let activeContainer = originalContainer;
      let activeSelector = selector;

      if (direction === 'horizontal' && originalContainer.querySelector('.swiper-wrapper') != null) {
        activeSelector = '.parallax-slide';
        activeContainer = originalContainer.querySelector('.swiper-wrapper');
      }

      activeContainer.querySelectorAll(activeSelector).forEach((element, i) => {
        const odd = (i + 1) % 2 !== num;
        animTargets.push({ container: activeContainer, element, odd });
      });
    });

    // Detect whether the trigger is its own scroll container (e.g. the parallax-gallery
    // section uses overflow-y:scroll to be self-contained, hiding the page scrollbar).
    const triggerEl = parallaxContainers[0];
    const triggerStyle = window.getComputedStyle(triggerEl);
    const isInternalScroll =
      (triggerStyle.overflowY === 'scroll' || triggerStyle.overflowY === 'auto') &&
      triggerEl.scrollHeight > triggerEl.clientHeight;
    const scrollSource = isInternalScroll ? triggerEl : window;

    const applyParallax = () => {
      animTargets.forEach(({ container, element, odd }) => {
        const vh = window.innerHeight;
        let rectTop;
        let containerHeight;

        if (isInternalScroll && container === triggerEl) {
          // Progress is driven by the container's own scrollTop instead of window scroll
          rectTop = -container.scrollTop;
          containerHeight = container.scrollHeight;
        } else {
          const rect = container.getBoundingClientRect();
          rectTop = rect.top;
          containerHeight = rect.height;
        }

        // Compute the rect.top values at which the animation starts (progress=0) and ends (progress=1).
        // Equivalent to GSAP ScrollTrigger scrub with the given start/end position strings.
        const startRectTop = parseGSAPPosition(start, containerHeight, vh);
        const endRectTop = parseGSAPPosition(end, containerHeight, vh);
        const rawProgress = (startRectTop - rectTop) / (startRectTop - endRectTop);
        const progress = Math.max(0, Math.min(1, rawProgress));
        const eased = slowMo(progress);

        // Map eased 0→1 to from→to
        // Horizontal: wave effect (columns enter from opposite sides)
        // Vertical: both columns scroll upward faster than the page, at slightly different speeds
        const sign = odd ? -1 : 1;

        if (direction === 'horizontal') {
          // from xPercent: 70*sign, to xPercent: -10*sign
          const fromX = 70 * sign;
          const toX = -10 * sign;
          const x = fromX + (toX - fromX) * eased;
          element.style.transform = `translateX(${x}%)`;
        } else if (percent === 'percent') {
          // Column 2 is pulled up ~27% of viewport height so different images
          // show at the top border (stagger). Both columns scroll upward faster
          // than the page; column 1 (odd) moves ~3x more than column 2 (even).
          const stagger = odd ? 0 : -(vh * 0.27);
          const fromY = stagger;
          const toY = fromY + (odd ? -(vh * 0.55) : -(vh * 0.18));
          const y = fromY + (toY - fromY) * progress;
          element.style.transform = `translateY(${y}px)`;
        } else {
          // Column 2 is pulled up ~27% of viewport height so different images
          // show at the top border (stagger). Both columns scroll upward faster
          // than the page; column 1 (odd) moves ~3x more than column 2 (even).
          const stagger = odd ? 0 : -(vh * 0.27);
          const fromY = stagger;
          const toY = fromY + (odd ? -(vh * 0.55) : -(vh * 0.18));
          const y = fromY + (toY - fromY) * progress;
          element.style.transform = `translateY(${y}px)`;
        }
      });
    };

    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        applyParallax();
        rafId = null;
      });
    };

    scrollSource.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Apply on init
    applyParallax();

    return () => {
      scrollSource.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  };

  // Responsive device filtering using matchMedia
  if (device === 'all') {
    initParallax();
  } else {
    const desktopMQ = window.matchMedia('(min-width: 48em)');
    let cleanup = null;

    const handleMQ = (mq) => {
      if (mq.matches && device === 'desktop') {
        if (!cleanup) cleanup = initParallax();
      } else if (cleanup) {
        cleanup();
        cleanup = null;
      }
    };

    handleMQ(desktopMQ);
    desktopMQ.addEventListener('change', handleMQ);
  }
};

// parallaxlines Function - toggles CSS class based on viewport visibility
export function parallaxlines() {
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.parallax .swiper-wrapper');
    const parallaxSection = document.querySelector('.parallax');
    if (!sticky || !parallaxSection) {
      return;
    }

    const stickyTop = sticky.getBoundingClientRect().top + window.scrollY;
    const windowTop = window.scrollY;
    const diff = windowTop + 500;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 767) {
      return;
    }

    parallaxSection.classList.remove('lines-background');
    const wrappers = Array.from(document.querySelectorAll('.parallax .swiper-wrapper'));
    const shouldShowLines = wrappers.some((wrapperElement) => isInViewport(wrapperElement) && stickyTop < diff);
    parallaxSection.classList.toggle('lines-background', shouldShowLines);
  });
}
