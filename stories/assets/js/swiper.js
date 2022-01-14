// import Swiper JS
import Swiper from 'swiper/swiper-bundle';
import * as utility from './resize';
import arrowright from '../icons/arrow-right.svg';
import arrowleft from '../icons/arrow-left.svg';
import chevronRightWhite from '../icons/circle-right.svg';
import chevronLeftWhite from '../icons/circle-left.svg';

// Swiper Slider
export const swiper = (selector, arrowsSelector, options) => {
  // Get Swiper Selector.
  let swiperSelector = $(selector);
  let dragsize = 'auto';

  // data-swiper-device="mobile" // will work only on mobile
  // data-swiper-device="desktop" // will work only on desktop
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let desktop = window.matchMedia('(min-width: 768px)');

  // Incase of multiple swiper sliders.
  swiperSelector.each((index, element) => {
    // Add class based on index incase of multiple sliders.
    $(element).addClass(`swiper-slider-${index}`);

    // Get data-swiper-parallax
    // let swiperParallax = $(element).data('swiper-parallax') ? $(element).data('swiper-parallax') : false;
    // Default options
    let defaults = {
      // Let us init (element) after loading custom configs.
      init: false,
      // Optional parameters
      speed: $(element).data('swiper-speed') ? $(element).data('swiper-speed') : 500,
      slidesPerView: $(element).data('swiper-slides-view-mobile') ? $(element).data('swiper-slides-view-mobile') : 1,
      spaceBetween: $(element).data('swiper-gutterspace') ? $(element).data('swiper-gutterspace') : 20,
      loop: $(element).data('swiper-loop') ? $(element).data('swiper-loop') : false,
      // We need to set this to 0 as we don't need extra classes on slides.
      loopAdditionalSlides: 0,
      autoplay: false,
      // Swiping allowed on mobile
      noSwiping: false,
      noSwipingClass: 'swiper-slide',
      // Accessibility
      a11y: true,
      keyboardControl: true,
      // Navigation arrows
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
          noSwiping: true,
          slidesPerView: $(element).data('swiper-slides-view-tablet') ? $(element).data('swiper-slides-view-tablet') : 1,
        },
        1024: {
          noSwiping: true,
          slidesPerView: $(element).data('swiper-slides-view-desktop') ? $(element).data('swiper-slides-view-desktop') : 1,
        }
      },
    };

    // Extend options
    options = options || {};
    for (let name in defaults) {
      if (options[name] === undefined) {
        options[name] = defaults[name];
      }
    }

    // Get scrollbar track width.
    const getTrackSize = () => $(element).find('.swiper-scrollbar').width();

    // Get number of the slides
    const getSliderLength = () => $(element).find('.swiper-slide').length;

    // Get the Slider Bound in case of perView is more than 1.
    const getSliderBound = () => (getSliderLength() - options.slidesPerView);

    // Get the scrollbar drag width based on the number of slides in the slider track.
    // Set drag size to fixed number if slidesPerView is more than 1.
    const getDragSize = () => {
      const trackSize = getTrackSize();
      const sliderLength = getSliderLength();
      const sliderBound = getSliderBound();
      // Get the dragsize round to 2 decimal points.
      if (options.slidesPerView > 1) {
        dragsize = Number(`${Math.round(parseFloat(`${trackSize / sliderBound}e2`))}e-2`) - (options.spaceBetween * options.slidesPerView);
      } else {
        dragsize = Number(`${Math.round(parseFloat(`${trackSize / sliderLength}e2`))}e-2`);
      }
      return dragsize;
    };

    // Define Swiper Element
    let swiper = new Swiper(element, options);

    // Before mount
    const beforeSwiperMount = (swiper) => {
      swiper.on('beforeInit', () => {
        $(element).find('.stats-card-parallax .swiper-slide').unwrap();
      });
    };

    // Swiper Enable Callback
    const swiperEnable = () => {
      // Update dragSize.
      let dragsize = getDragSize();
      if (swiper.destroyed) {
        const newSwiper = new Swiper(element, options);
        swiper = newSwiper;
        swiper.params.scrollbar.dragSize = dragsize;
        beforeSwiperMount(swiper);
        swiper.init();
      } else {
        swiper.params.scrollbar.dragSize = dragsize;
        beforeSwiperMount(swiper);
        swiper.init();
      }
      if (!$(element).find('.swiper-scrollbar').is(':visible')) {
        $(element).find('.swiper-scrollbar').show();
      }
    };

    // Swiper Destroy Callback
    const swiperDisable = () => {
      if (!swiper.destroyed) {
        swiper.scrollbar.destroy();
        // Remove any events bound on the Swiper wrapper.
        swiper.on('beforeDestroy', () => {
          const events = $._data($(element).find('.swiper-wrapper').get(0), 'events');
          if (events) {
            if (events.click.length > 0) {
              $(element).find('.swiper-wrapper').off('click');
            }
            if (events.mousemove.length > 0) {
              $(element).find('.swiper-wrapper').off('mousemove');
            }
          }
        });
        swiper.destroy();
      }
      // Hide the scrollbar if swiper destroyed.
      $(element).find('.swiper-scrollbar').hide();
    };

    // Initialise Swiper
    if (!swiper.initialized) {
      swiperEnable();
    }

    // Define swiperInit.
    const swiperInit = () => {
      const dataDevice = $(element).data('swiper-device');
      // Device based activation of swiper.
      if (dataDevice && (dataDevice == 'mobile' || dataDevice == 'desktop')) {
        if (mobile.matches && dataDevice == 'mobile') {
          if (!swiper.initialized) {
            swiperEnable();
          }
        } else if (desktop.matches && dataDevice == 'desktop') {
          if (!swiper.initialized) {
            swiperEnable();
          }
        } else {
          swiperDisable();
        }
      } else if (!swiper.initialized) {
        swiperEnable();
      }
      if (swiper !== undefined) {
        // Update arrows callback.
        const updateArrow = (e) => {
          const sliderCenter = swiper.size / 2;
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
            $(element).find('.swiper-wrapper').css('cursor', 'auto');
          } else if (e.pageX <= sliderCenter) {
            $(element).find('.swiper-wrapper').css('cursor', leftCursor);
          } else {
            $(element).find('.swiper-wrapper').css('cursor', rightCursor);
          }
        };

        // Set the elements that do not require `click` and `mousemove` events.
        const ignoreClick = 'a, [class*="swiper-button"]';

        // Swiper slides click eventlistner.
        $(element).find('.swiper-wrapper').off('click').on('click', (e) => {
          e.preventDefault();
          if (!swiper.initialized) return false;
          const sliderCenter = swiper.size / 2;
          if (e.pageX <= sliderCenter) {
            if (swiper.isBeginning) {
              swiper.slideNext();
            } else if (swiper.isEnd) {
              swiper.slidePrev();
            } else {
              swiper.rtl ? swiper.slideNext() : swiper.slidePrev();
            }
          } else if (swiper.isBeginning) {
            swiper.slideNext();
          } else if (swiper.isEnd) {
            swiper.slidePrev();
          } else {
            swiper.rtl ? swiper.slidePrev() : swiper.slideNext();
            console.log('Prev');
          }
          updateArrow(e);
        })
          .find(ignoreClick)
          .on('click', (e) => {
            e.stopPropagation();
          });

        // Swiper slides mousemove eventlistner.
        $(element).find('.swiper-wrapper').off('mousemove').on('mousemove', (e) => {
          e.preventDefault();
          updateArrow(e);
        });
      }
    };

    // Call Swiper Enable on Page load.
    swiperInit();

    // Custom windowResize;
    utility.windowResize($(window), (e) => {
      swiperInit();
    });
  });

  // Get device type of tablet
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
  };

  let getDevice = getDeviceType();
  if(getDevice == 'tablet') {
    $(arrowsSelector).append(`<div class="slider-arrows" aria-label="carousel-arrows"><div class="swiper-button-prev" aria-label="prev"><img src=${chevronLeftWhite} alt="Prev" /></div><div class="swiper-button-next" aria-label="next"><img src=${chevronRightWhite} alt="Next" /></div></div>`)
  }
};
