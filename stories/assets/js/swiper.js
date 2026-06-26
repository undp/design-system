// import Swiper JS
import arrowright from 'icons/arrow-right.svg';
import arrowleft from 'icons/arrow-left.svg';
import chevronRightWhite from 'icons/chevron-right-circle.svg';
import chevronLeftWhite from 'icons/chevron-left-circle.svg';
import * as utility from './resize';

// Deep merge helper (replaces jQuery.extend(true, ...))
const deepMerge = (target, source) => {
  const output = { ...target };
  if (source && typeof source === 'object') {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        output[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
};

// Swiper Slider
export const swiper = (selector, arrowsSelector, options) => {
  // Get Swiper Selector – accept string, Element, or array-like.
  let swiperElements;
  if (typeof selector === 'string') {
    swiperElements = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof Element) {
    swiperElements = [selector];
  } else if (selector && selector.length) {
    swiperElements = Array.from(selector);
  } else {
    swiperElements = [];
  }

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
  swiperElements.forEach((element, index) => {
    if (element.dataset.swiperInited) return;
    element.dataset.swiperInited = 'true';

    // Add class based on index incase of multiple sliders.
    element.classList.add(`swiper-slider-${index}`);

    // Helper to read numeric data attribute with fallback.
    const dataNum = (key, fallback) => {
      const val = element.dataset[key];
      return val ? Number(val) : fallback;
    };

    // Default options
    let defaults = {
      // Let us init (element) after loading custom configs.
      init: false,
      // Optional parameters
      speed: dataNum('swiperSpeed', 500),
      slidesPerView: dataNum('swiperSlidesViewMobile', 1),
      spaceBetween: dataNum('swiperGutterspace', 20),
      loop: element.dataset.swiperLoop === 'true',
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
          slidesPerView: dataNum('swiperSlidesViewTablet', 1),
          slidesOffsetBefore: dataNum('swiperOffset', 0),
          slidesOffsetAfter: element.dataset.swiperOffset ? -Number(element.dataset.swiperOffset) : 0,
        },
        1024: {
          slidesPerView: dataNum('swiperSlidesViewDesktop', 1),
          slidesOffsetBefore: dataNum('swiperOffset', 0),
          slidesOffsetAfter: element.dataset.swiperOffset ? -Number(element.dataset.swiperOffset) : 0,
        },
      },
    };

    // Extend options.
    options = options || {};

    // Merge options into defaults, recursively, without modifying defaults.
    const settings = deepMerge(defaults, options);

    // Get scrollbar track width.
    const getTrackSize = () => {
      const sb = element.querySelector('.swiper-scrollbar');
      return sb ? sb.offsetWidth : 0;
    };

    // Get number of the slides.
    const getSliderLength = () => element.querySelectorAll('.swiper-slide').length;

    // Get the Slider Bound in case of perView is more than 1.
    const getSliderBound = () => getSliderLength() - settings.slidesPerView;

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
      const arrows = `<div class="slider-arrows"><button class="swiper-button-prev"><img src=${chevronLeftWhite} alt="Previous" /></button><button class="swiper-button-next"><img src=${chevronRightWhite} alt="Next" /></button></div>`;
      return arrows;
    };

    // Track wrapper event handlers for later removal.
    let wrapperClickHandler = null;
    let wrapperMousemoveHandler = null;

    const swiperDestroyMouseEvents = () => {
      const wrapper = element.querySelector('.swiper-wrapper');
      if (wrapper) {
        if (wrapperClickHandler) {
          wrapper.removeEventListener('click', wrapperClickHandler);
          wrapperClickHandler = null;
        }
        if (wrapperMousemoveHandler) {
          wrapper.removeEventListener('mousemove', wrapperMousemoveHandler);
          wrapperMousemoveHandler = null;
        }
        wrapper.style.cursor = 'auto';
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
        // Unwrap .stats-card-parallax wrappers so slides are direct children of swiper.
        element.querySelectorAll('.stats-card-parallax').forEach((wrapper) => {
          while (wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          }
          wrapper.remove();
        });
        if (arrowsSelector && swiper.params.navigation.showOn == getDeviceType() && element.querySelector(arrowsSelector)) {
          element.querySelector(arrowsSelector).insertAdjacentHTML('beforeend', swiperArrow());
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
      const scrollbar = element.querySelector('.swiper-scrollbar');
      if (scrollbar && scrollbar.style.display === 'none') {
        scrollbar.style.display = '';
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
      const scrollbar = element.querySelector('.swiper-scrollbar');
      if (scrollbar) scrollbar.style.display = 'none';
    };

    // Initialise Swiper
    if (!swiper.initialized) {
      swiperEnable();
    }

    // Define swiperInit.
    const swiperInit = () => {
      const elemData = element.dataset;
      const dataKeys = Object.keys(elemData);
      if (dataKeys.length) {
        // Preserve original behavior: jQuery.each always returned false after first key,
        // so only the first data attribute key is ever evaluated.
        const [firstKey] = dataKeys;
        if (firstKey === 'swiperDesktop' || firstKey === 'swiperTablet' || firstKey === 'swiperMobile' || firstKey === 'swiperAll') {
          if (firstKey === 'swiperDesktop' && getDeviceType() === 'desktop') {
            if (!swiper.initialized) {
              swiperEnable();
            }
          } else if (firstKey === 'swiperTablet' && getDeviceType() === 'tablet') {
            if (!swiper.initialized) {
              swiperEnable();
            }
          } else if (firstKey === 'swiperMobile' && getDeviceType() === 'mobile') {
            if (!swiper.initialized) {
              swiperEnable();
            }
          } else if (firstKey === 'swiperAll') {
            if (!swiper.initialized) {
              swiperEnable();
            }
          } else {
            swiperDisable();
          }
        }
      } else if (!swiper.initialized) {
        swiperEnable();
      }

      if (swiper !== undefined) {
        // Update arrows callback.
        const updateArrow = (e) => {
          const sliderWidth = element.offsetWidth;
          const sliderRect = element.getBoundingClientRect();
          const ePageXOffset = e.pageX - (sliderRect.left + window.scrollX);
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
          const wrapper = element.querySelector('.swiper-wrapper');
          if (wrapper) {
            if (!swiper.initialized || swiper.destroyed) {
              wrapper.style.cursor = 'auto';
            } else if (sliderCenter > ePageXOffset) {
              wrapper.style.cursor = leftCursor;
            } else {
              wrapper.style.cursor = rightCursor;
            }
          }
        };

        // Set the elements that do not require `click` and `mousemove` events.
        const ignoreClick = 'a, [class*="swiper-button"]';

        // Remove previous handlers before rebinding.
        swiperDestroyMouseEvents();

        const wrapper = element.querySelector('.swiper-wrapper');
        if (wrapper) {
          // Swiper slides click eventlistner.
          wrapperClickHandler = (e) => {
            e.preventDefault();
            const sliderWidth = element.offsetWidth;
            const sliderRect = element.getBoundingClientRect();
            const ePageXOffset = e.pageX - (sliderRect.left + window.scrollX);
            const sliderCenter = sliderWidth / 2;
            if (!swiper.initialized) return false;
            if (sliderCenter > ePageXOffset) {
              if (swiper.isBeginning) {
                swiper.slideNext();
              } else if (swiper.isEnd) {
                swiper.slidePrev();
              } else if (swiper.rtl) {
                swiper.slideNext();
              } else {
                swiper.slidePrev();
              }
            } else if (swiper.isBeginning) {
              swiper.slideNext();
            } else if (swiper.isEnd) {
              swiper.slidePrev();
            } else if (swiper.rtl) {
              swiper.slidePrev();
            } else {
              swiper.slideNext();
            }
            updateArrow(e);
            return false;
          };
          wrapper.addEventListener('click', wrapperClickHandler);
          wrapper.querySelectorAll(ignoreClick).forEach((el) => {
            el.addEventListener('click', (e) => {
              e.stopPropagation();
            });
          });

          // Swiper slides mousemove eventlistner.
          wrapperMousemoveHandler = (e) => {
            e.preventDefault();
            updateArrow(e);
          };
          wrapper.addEventListener('mousemove', wrapperMousemoveHandler);
        }

        // Disable mouse events on Tablet and Mobile
        if (getDeviceType() === 'mobile' || getDeviceType() === 'tablet') {
          swiperDestroyMouseEvents();
        }
      }
    };

    // Call Swiper Enable on Page load.
    swiperInit();

    // Custom windowResize;
    utility.windowResize(window, () => {
      swiperInit();
    });
  });
};
