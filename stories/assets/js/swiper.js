// import Swiper JS
import * as utility from './resize';
import arrowright from '../icons/arrow-right.svg';
import arrowleft from '../icons/arrow-left.svg';
import chevronRightWhite from '../icons/chevron-right-circle.svg';
import chevronLeftWhite from '../icons/chevron-left-circle.svg';

// Swiper Slider
export const swiper = (selector, arrowsSelector, options) => {
  // Get Swiper Selector.
  let $swiperSelector = jQuery(selector);
  let dragsize = 'auto';

  // data-swiper-device="mobile" // will work only on mobile
  // data-swiper-device="desktop" // will work only on desktop
  // Get device type
  const getDeviceType = () => {
    let device;
    let mobile = 'only screen and (min-width: 0px) and (max-width: 767px)';
    let potrait = 'only screen and (min-width: 768px) and (max-width: 1023px) and (orientation:portrait)';
    let landscape = 'only screen and (min-width: 768px) and (max-width: 1023px) and (orientation:landscape)';
    let desktop = window.matchMedia('(min-width: 768px)');
    if (window.matchMedia(mobile).matches) {
      device = 'mobile';
    } else if (window.matchMedia(potrait).matches || window.matchMedia(landscape).matches) {
      device = 'tablet';
    } else {
      device = 'desktop';
    }
    return device;
  };

  // Incase of multiple swiper sliders.
  $swiperSelector.each((index, element) => {
    // Add class based on index incase of multiple sliders.
    jQuery(element).addClass(`swiper-slider-${index}`);

    // Default options
    let defaults = {
      // Let us init (element) after loading custom configs.
      init: false,
      // Optional parameters
      speed: jQuery(element).data('swiper-speed') ? jQuery(element).data('swiper-speed') : 500,
      slidesPerView: jQuery(element).data('swiper-slides-view-mobile') ? jQuery(element).data('swiper-slides-view-mobile') : 1,
      spaceBetween: jQuery(element).data('swiper-gutterspace') ? jQuery(element).data('swiper-gutterspace') : 20,
      loop: jQuery(element).data('swiper-loop') ? jQuery(element).data('swiper-loop') : false,
      // We need to set this to 0 as we don't need extra classes on slides.
      loopAdditionalSlides: 0,
      autoplay: false,
      // Accessibility
      a11y: true,
      keyboardControl: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        showOn: 'tablet',
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: dragsize,
      },
      // Breakpoints work on mobile first approach. (Eg. min-width >= 768)
      breakpoints: {
        // This will be enabled on Desktop Breakpoint.
        768: {
          slidesPerView: jQuery(element).data('swiper-slides-view-tablet') ? jQuery(element).data('swiper-slides-view-tablet') : 1,
          slidesOffsetBefore: jQuery(element).data('swiper-offset') ? jQuery(element).data('swiper-offset') : 0,
          slidesOffsetAfter: jQuery(element).data('swiper-offset') ? -jQuery(element).data('swiper-offset') : 0,
        },
        1024: {
          slidesPerView: jQuery(element).data('swiper-slides-view-desktop') ? jQuery(element).data('swiper-slides-view-desktop') : 1,
          slidesOffsetBefore: jQuery(element).data('swiper-offset') ? jQuery(element).data('swiper-offset') : 0,
          slidesOffsetAfter: jQuery(element).data('swiper-offset') ? -jQuery(element).data('swiper-offset') : 0,
        },
      },
    };

    // Extend options.
    options = options || {};

    // Merge options into defaults, recursively with `true` option, without modifying defaults.
    const settings = jQuery.extend(true, {}, defaults, options);

    // Get scrollbar track width.
    const getTrackSize = () => jQuery(element).find('.swiper-scrollbar').width();

    // Get number of the slides.
    const getSliderLength = () => jQuery(element).find('.swiper-slide').length;

    // Get the Slider Bound in case of perView is more than 1.
    const getSliderBound = () => (getSliderLength() - settings.slidesPerView);

    // Get the scrollbar drag width based on the number of slides in the slider track.
    // Set drag size to fixed number if slidesPerView is more than 1.
    const getDragSize = () => {
      const trackSize = getTrackSize();
      const sliderLength = getSliderLength();
      const sliderBound = getSliderBound();
      // Get the dragsize round to 2 decimal points.
      if (settings.slidesPerView > 1) {
        dragsize = Number(`${Math.round(parseFloat(`${trackSize / sliderBound}e2`))}e-2`) - (settings.spaceBetween * settings.slidesPerView);
      } else {
        dragsize = Number(`${Math.round(parseFloat(`${trackSize / sliderLength}e2`))}e-2`);
      }
      return dragsize;
    };

    const swiperArrow = () => {
      const arrows = `<div class="slider-arrows"><button class="swiper-button-prev"><img src=${chevronLeftWhite} alt="Next" /></button><button class="swiper-button-next"><img src=${chevronRightWhite} alt="Next" /></button></div>`;
      return arrows;
    };

    const swiperDestroyMouseEvents = () => {
      const events = jQuery._data(jQuery(element).find('.swiper-wrapper')[0], 'events');
      if (events) {
        if (events.click.length > 0) {
          jQuery(element).find('.swiper-wrapper').off('click');
        }
        if (events.mousemove.length > 0) {
          jQuery(element).find('.swiper-wrapper').off('mousemove');
        }
        jQuery(element).find('.swiper-wrapper').css('cursor', 'auto');
      }
    };

    // Define Swiper Element
    let swiper = new Swiper(element, settings);

    // Before mount
    const beforeSwiperMount = (swiper) => {
      // Update dragSize.
      if (swiper.params.scrollbar) {
        let dragsize = getDragSize();
        swiper.params.scrollbar.dragSize = dragsize;
      }
      swiper.on('beforeInit', () => {
        jQuery(element).find('.stats-card-parallax .swiper-slide').unwrap();
        if (swiper.params.navigation.showOn == getDeviceType() && jQuery(element).find(arrowsSelector).length) {
          jQuery(element).find(arrowsSelector).append(swiperArrow);
        }
      });
    };

    // Swiper Enable Callback
    const swiperEnable = () => {
      if (swiper.destroyed) {
        const newSwiper = new Swiper(element, settings);
        swiper = newSwiper;
        beforeSwiperMount(swiper);
        swiper.init();
      } else {
        beforeSwiperMount(swiper);
        swiper.init();
      }
      if (!jQuery(element).find('.swiper-scrollbar').is(':visible')) {
        jQuery(element).find('.swiper-scrollbar').show();
      }
    };

    // Swiper Destroy Callback
    const swiperDisable = () => {
      if (!swiper.destroyed) {
        swiper.scrollbar.destroy();
        // Remove any events bound on the Swiper wrapper.
        swiper.on('beforeDestroy', () => {
          swiperDestroyMouseEvents();
        });
        swiper.destroy();
      }
      // Hide the scrollbar if swiper destroyed.
      jQuery(element).find('.swiper-scrollbar').hide();
    };

    // Initialise Swiper
    if (!swiper.initialized) {
      swiperEnable();
    }

    // Define swiperInit.
    const swiperInit = () => {
      const elemData = jQuery(element).data();
      if (elemData) {
        jQuery.each(elemData, function (key, val) {
          if (key == 'swiperDesktop' || key == 'swiperTablet' || key == 'swiperMobile' || key == 'swiperAll') {
            if ((key == 'swiperDesktop') && getDeviceType() == "desktop") {
              if (!swiper.initialized) {
                swiperEnable();
              }
              return false;
            } else if ((key == 'swiperTablet') && getDeviceType() == "tablet") {
              if (!swiper.initialized) {
                swiperEnable();
              }
              return false;
            } else if ((key == 'swiperMobile') && getDeviceType() == "mobile") {
              if (!swiper.initialized) {
                swiperEnable();
              }
              return false;
            } else if (key == 'swiperAll') {
              if (!swiper.initialized) {
                swiperEnable();
              }
              return false;
            } else {
              swiperDisable();
            }
          }
        });
      } else {
        if (!swiper.initialized) {
          swiperEnable();
        }
      }

      if (swiper !== undefined) {
        // Update arrows callback.
        const updateArrow = (e) => {
          const sliderWidth = jQuery(element).outerWidth();
          const sliderOffset = jQuery(element).offset();
          const ePageXOffset = e.pageX - sliderOffset.left;
          const sliderCenter = sliderWidth / 2;
          let leftCursor = `url(${arrowleft}), auto`;
          let rightCursor = `url(${arrowright}), auto`;
          if (swiper.isBeginning) {
            leftCursor = swiper.rtl ? `url(${arrowleft}), auto` : `url(${arrowright}), auto`;
            rightCursor = swiper.rtl ? `url(${arrowleft}), auto` : `url(${arrowright}), auto`;
          }
          if (swiper.isEnd) {
            leftCursor = swiper.rtl ? `url(${arrowright}), auto` : `url(${arrowleft}), auto`;
            rightCursor = swiper.rtl ? `url(${arrowright}), auto` : `url(${arrowleft}), auto`;
          }
          if (!swiper.initialized || swiper.destroyed) {
            jQuery(element).find('.swiper-wrapper').css('cursor', 'auto');
          } else {
            if (sliderCenter > ePageXOffset) {
              jQuery(element).find('.swiper-wrapper').css('cursor', leftCursor);
            } else {
              jQuery(element).find('.swiper-wrapper').css('cursor', rightCursor);
            }
          }
        };

        // Set the elements that do not require `click` and `mousemove` events.
        const ignoreClick = 'a, [class*="swiper-button"]';

        // Swiper slides click eventlistner.
        jQuery(element).find('.swiper-wrapper').off('click').on('click', (e) => {
          e.preventDefault();
          const sliderWidth = jQuery(element).outerWidth();
          const sliderOffset = jQuery(element).offset();
          const ePageXOffset = e.pageX - sliderOffset.left;
          const sliderCenter = sliderWidth / 2;
          if (!swiper.initialized) return false;
          if (sliderCenter > ePageXOffset) {
            if (swiper.isBeginning) {
              swiper.slideNext();
            } else if (swiper.isEnd) {
              swiper.slidePrev();
            } else {
              swiper.rtl ? swiper.slideNext() : swiper.slidePrev();
            }
          } else {
            if (swiper.isBeginning) {
              swiper.slideNext();
            } else if (swiper.isEnd) {
              swiper.slidePrev();
            } else {
              swiper.rtl ? swiper.slidePrev() : swiper.slideNext();
            }
          }
          updateArrow(e);
        }).find(ignoreClick).on('click', (e) => {
          e.stopPropagation();
        });

        // Swiper slides mousemove eventlistner.
        jQuery(element).find('.swiper-wrapper').off('mousemove').on('mousemove', (e) => {
          e.preventDefault();
          updateArrow(e);
        });

        // Disable mouse events on Tablet and Mobile
        if (getDeviceType() == 'mobile' || getDeviceType() == 'tablet') {
          swiperDestroyMouseEvents();
        }
      }
    };

    // Call Swiper Enable on Page load.
    swiperInit();

    // Custom windowResize;
    utility.windowResize(jQuery(window), (e) => {
      swiperInit();
    });
  });
};
