import './viewport';

// parallaxEffect
export const parallaxEffect = (trigger, selector, start, end, direction, device, percent) => {
  // Register GSAP required plugins and effects.
  gsap.registerPlugin(ScrollTrigger, SlowMo);

  // Save Initial ScrollTrigger Styles.
  ScrollTrigger.saveStyles(selector);
  // Set Parallax Trigger to Array
  const parallaxContainer = gsap.utils.toArray(trigger);
  // Set Defaults.
  start = start || 'top bottom';
  end = end || 'bottom top';
  direction = direction || 'horizontal';
  device = device || 'desktop';
  percent = percent || 'pixels';

  // RTL Fix for Storybook.
  let rtl = document.dir || 'ltr';
  if (window.location.href.indexOf('direction=rtl') > -1) {
    rtl = 'rtl';
  }

  const num = (rtl == 'rtl') ? 1 : 0;

  // Parallax Init Function
  function initParallax() {
    parallaxContainer.forEach((container, index) => {
      if (direction == 'horizontal') {
        const slides = Array.from(container.querySelectorAll('.swiper-slide'));
        const wrapSlideGroup = (slideGroup) => {
          if (!slideGroup.length) {
            return;
          }

          const wrapper = document.createElement('div');
          wrapper.className = 'stats-card-parallax parallax-slide';
          slideGroup[0].parentNode?.insertBefore(wrapper, slideGroup[0]);
          slideGroup.forEach((slideElement) => {
            wrapper.appendChild(slideElement);
          });
        };

        if (container.querySelector('.swiper-wrapper') !== undefined) {
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
          // Set the new selector and trigger for wrapped items.
          selector = '.parallax-slide';
          container = container.querySelector('.swiper-wrapper');
        }
      }

      // Define ScrollTrigger within Timeline.
      container.querySelectorAll(selector).forEach((element, i) => {
        const odd = (i + 1) % 2 != num;
        const timeline = gsap.timeline({
          // Define scrollTrigger options.
          scrollTrigger: {
            trigger: container,
            start: start,
            end: end,
            scrub: true,
          },
        });

        // Timeline Init
        if (direction == 'horizontal') {
          // Define timeline from and to parameters. x means horizontal and y means vertical.
          timeline.from(element, {
            xPercent: 70 * (odd ? -1 : 1), duration: 1, ease: 'SlowMo',
          }).to(element, {
            xPercent: 10 * (odd ? 1 : -1), duration: 1, ease: 'SlowMo',
          });
        } else if (percent == 'percent') {
          timeline.from(element, {
            yPercent: 10 * (odd ? 1 : -1), duration: 1, ease: 'SlowMo',
          }).to(element, {
            yPercent: 10 * (odd ? -1 : 1), duration: 1, ease: 'SlowMo',
          });
        } else {
          timeline.from(element, {
            y: 85 * (odd ? -1 : 1), duration: 1, ease: 'SlowMo',
          }).to(element, {
            y: 85 * (odd ? 1 : -1), duration: 1, ease: 'SlowMo',
          });
        }
      });
    });

    window.addEventListener('resize', () => {
      ScrollTrigger.getAll().forEach(t=>t.refresh());
    });

  }

  if (device == 'all') {
    initParallax();
  } else {
    // GSAP Internal MatchMedia Function.
    // This is useful as we do not need to use any window resize event observer.
    const mm = gsap.matchMedia();
    mm.add("(min-width: 48em)", () => {
      if (device == 'desktop') {
        initParallax();
      }
    });
  }
};

// parallaxlines Function.
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
