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
        const $container = $(container);
        const { length } = $container.find('.swiper-slide');
        if (container.querySelector('.swiper-wrapper') != undefined) {
          if ($container.find(selector).find(trigger).length < 1) {
            $container.find('.swiper-slide').each((index, element) => {
              holder.push(element);
              if (index === Math.floor((length - 1) / 2) || index === length - 1) {
                $(holder).wrapAll('<div class="stats-card-parallax parallax-slide" />');
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
            start,
            end,
            scrub: true,
            ease: 'SlowMo',
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
  }

  // ScrollTrigger Internal MatchMedia Function.
  // This is useful as we do not need to use any window resize event observer.
  ScrollTrigger.matchMedia({
    // ScrollTrigger will match the below mediaQueries and incase if there is no match then it will kill itself.
    // Desktop.
    '(min-width: 768px)': function () {
      if (device == 'desktop') {
        initParallax();
      }
    },
    // Mobile
    '(max-width: 768px)': function () {
      // Kill on mobile otherwise.
    },
    // Will run both on Desktop and Mobile.
    all() {
      // We need to explicitly pass the `device` argument for this to work.
      if (device == 'all') {
        initParallax();
      }
    },
  });
};

// parallaxlines Function.
export function parallaxlines() {
  $(window).scroll(() => {
    // variables
    var $sticky = $('.parallax .swiper-wrapper');
    var stickyTop = $sticky.offset().top;
    var windowTop = $(window).scrollTop();
    var diff = windowTop + 500;
    // calculates the window width
    const windowWidth = $(window).width();
    $('.parallax .swiper-wrapper').each(function () {
      if (windowWidth > 767) {
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
