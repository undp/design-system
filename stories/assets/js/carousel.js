import arrowright from '../images/Icon/arrow-right.svg';
import arrowleft from '../images/Icon/arrow-left.svg';
import Glide from '@glidejs/glide';

export function carousel(ele, gapele, gapele_sm, viewcard, perViewtablet, focusSpace) {
  /**
   * A Custom component to get Glide Slides Length and Width.
   *
   * @param {Glide} Glide
   * @param {Object} Components
   * @param {EventsBus} Events
   */
  const CustomLength = function (Glide, Components, Events) {
    return {
      mount() {
        Events.emit('glide.length', Components.Sizes.length);
        Events.emit('glide.width', Components.Sizes.width);
      },
    };
  };

  // Declare the Glide parameters.
  let direc = 'ltr';
  let lastChild = ':last';
  let firstChild = ':first';
  let dirLeft = '<';
  let dirRight = '>';
  let gapele_sm2 = gapele;
  let optsTriggered = true;
  let leftArrow = arrowleft;
  let rightArrow = arrowright;
  let rtl = false;
  if (gapele_sm) {
    gapele_sm2 = gapele_sm;
  }

  // Define default perView setting.
  let perViewLength = 1;
  // Function `perViewOpt` returns the perView to the config object.
  const perViewOpt = (length) => perViewLength = length;

  // Init perView Function.
  perViewOpt(viewcard);

  // Define Glide Slider Config.
  const glideConfig = {
    autoplay: false,
    gap: gapele,
    direction: direc,
    perView: perViewLength,
    rewind: false,
    bound: true,
    focusAt: focusSpace,
    peek: {
      before: 0,
      after: 45,
    },
    breakpoints: {
      1024: {
        perView: perViewtablet,
      },
      767: {
        perView: 1,
        gap: gapele_sm2,
        focusAt: 0,
        peek: {
          before: 0,
          after: 40,
        },
      },
    },
  };

  // Init Glide Slider.
  const glide = new Glide(ele, glideConfig);

  // Get the total number of Glide slides.
  let sliderLength = 0;
  glide.on('glide.length', (length) => {
    sliderLength = length;
  });

  // Calculate the Glide Slide width.
  let glideWidth = 0;
  glide.on('glide.width', (width) => {
    glideWidth = width;
  });

  // Function `glideUpdate` to update config dynamically.
  // Example: `glideUpdate({ key: value });`
  const glideUpdate = (opts) => {
    if (optsTriggered) {
      glide.update(opts);
    }
    optsTriggered = false;
  };

  // Mount Glide Slider to render on page.
  glide.mount({
    CustomLength,
  });

  // We need to modify Glide parameters on window load due to the RTL toggle being a StoryBook Addon.
  $(window).load(() => {
    rtl = $('html').attr('dir') == 'rtl';
    // Change Glide parameters based on rtl value.
    if (rtl && optsTriggered) {
      direc = 'rtl',
      lastChild = ':first';
      firstChild = ':last';
      // Change the direction for RTL.
      glideUpdate({
        direction: direc,
      });
    }
  });

  // Allow nested/child elements inside the slider to be clicked.
  $('.glide__slide a').click((e) => {
    e.stopPropagation();
  });

  // Use each() incase of multiple sliders on page.
  $(ele).each((i, elem) => {
    const slidesPerView = glide.settings.perView;
    // slideBound Detects if we have reached the edge of the slides.
    // This is only needed incase of perView > 1.
    const slideBound = sliderLength - slidesPerView;

    // We remove extra bullets incase of perView setting is > 1.
    if (slidesPerView > 1) {
      const bullet = $(elem).find('.glide__bullet');
      for (let i = 0; i < bullet.length; i++) {
        const elem = bullet[i];
        if (i > slideBound) {
          $(elem).remove();
        }
      }
    }

    // Click of Left or Right Arrows
    $(elem).click(function (e) {
      const sliderWidth = $(this).offset().left + glideWidth / 2;
      const slideIndex = glide.index;
      if (slidesPerView == 1) {
        // e.pageX checks the current mouse location on the viewport.
        // Condition to check if we clicked the left area of the Slide.
        if (e.pageX < sliderWidth) {
          if (slideIndex == 0) {
            glide.go(dirRight);
          } else if (rtl) {
            (slideIndex == sliderLength - 1) ? glide.go(dirLeft) : glide.go(dirRight);
          } else {
            glide.go(dirLeft);
          }
        } else if (slideIndex == sliderLength - 1) {
          glide.go(dirLeft);
        } else if (rtl) {
          (slideIndex == 0) ? glide.go(dirRight) : glide.go(dirLeft);
        } else {
          glide.go(dirRight);
        }
      } else if (slideIndex === 0) {
        glide.go(dirRight);
      } else if (slideIndex > 0 && slideIndex < slideBound) {
        if (e.pageX < sliderWidth) {
          if (rtl) {
            glide.go(dirRight);
          } else {
            glide.go(dirLeft);
          }
        } else if (rtl) {
          (slideIndex == 0) ? glide.go(dirRight) : glide.go(dirLeft);
        } else {
          glide.go(dirRight);
        }
      } else if (slideIndex === slideBound) {
        glide.go(dirLeft);
      } else {
        glide.go(dirRight);
      }
    });

    // Change CSS Pointer/Cursor based on Mouse move.
    $(elem).mousemove(function (e) {
      const sliderWidth = $(this).offset().left + glideWidth / 2;
      if (slidesPerView == 1) {
        if (e.pageX < sliderWidth) {
          $(this).find('.glide__slide').not(firstChild).css('cursor', `url(${leftArrow}), auto`);
        } else {
          $(this).find('.glide__slide').not(lastChild).css('cursor', `url(${rightArrow}), auto`);
        }
      } else if (glide.index === 0) {
        if (rtl) {
          $(this).css('cursor', `url(${leftArrow}), auto`);
        } else {
          $(this).css('cursor', `url(${rightArrow}), auto`);
        }
      } else if (glide.index > 0 && glide.index < slideBound) {
        if (e.pageX < sliderWidth) {
          $(this).css('cursor', `url(${leftArrow}), auto`);
        } else {
          $(this).css('cursor', `url(${rightArrow}), auto`);
        }
      } else if (glide.index === slideBound) {
        if (rtl) {
          $(this).css('cursor', `url(${rightArrow}), auto`);
        } else {
          $(this).css('cursor', `url(${leftArrow}), auto`);
        }
      } else {
        $(this).css('cursor', 'default');
      }
    });
  });
}
