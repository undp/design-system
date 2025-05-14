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
        // Define empty array to use array.push().
        const holder = [];
        const $container = jQuery(container);
        const { length } = $container.find('.swiper-slide');
        if (container.querySelector('.swiper-wrapper') != undefined) {
          if ($container.find(selector).find(trigger).length < 1) {
            $container.find('.swiper-slide').each((index, element) => {
              holder.push(element);
              if (index === Math.floor((length - 1) / 2) || index === length - 1) {
                jQuery(holder).wrapAll('<div class="stats-card-parallax parallax-slide" />');
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
  jQuery(window).scroll(() => {
    // variables
    var $sticky = jQuery('.parallax .swiper-wrapper');
    var stickyTop = $sticky.offset().top;
    var windowTop = jQuery(window).scrollTop();
    var diff = windowTop + 500;
    // calculates the window width
    const windowWidth = jQuery(window).width();
    jQuery('.parallax .swiper-wrapper').each(function () {
      if (windowWidth > 767) {
        jQuery('.parallax').removeClass('lines-background');
        if (jQuery(this).isInViewport()) {
          if (stickyTop < diff) {
            jQuery('.parallax').toggleClass('lines-background');
          }
        }
      }
    });
  });
}
