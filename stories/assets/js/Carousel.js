import arrowright from '../images/Icon/arrow-right.svg';
import arrowleft from '../images/Icon/arrow-left.svg';

export function CarouselFun(ele, gapele, gapele_sm) {
  let direc = 'ltr';
  let lastChild = ':last';
  let firstChild = ':first';
  let dirLeft = '<';
  let dirRight = '>';
  let gapele_sm2 = gapele;
  if (gapele_sm) {
    gapele_sm2 = gapele_sm;
  }
  if ($('html').attr('dir') == 'rtl') {
    direc = 'rtl',
    lastChild = ':first';
    firstChild = ':last';
    dirLeft = '>';
    dirRight = '<';
  }
  const glide = new Glide(ele, {
    autoplay: false,
    gap: gapele,
    direction: direc,
    arrows: 'none',
    navigation: 'none',
    peek: {
      before: 0,
      after: 45,
    },
    breakpoints: {
      767: {
        gap: gapele_sm2,
        peek: {
          before: 0,
          after: 40,
        },
      },
    },
  }).mount();
  $(ele).click(function (e) {
    const sliderWidth = $(this).offset().left + $(this).width() / 2;
    const i = glide.index;
    if ((e.pageX < sliderWidth) && (i != 0) && (i != 2)) {
      glide.go(dirLeft);
    } else if (i == 2) {
      glide.go('<');
    } else if (($('html').attr('dir') == 'rtl') && (i == 0)) {
      glide.go('>');
    } else {
      glide.go(dirRight);
    }
  });
  $('.glide__slide a').click((e) => {
    e.stopPropagation();
  });
  $(ele).mousemove(function (e) {
    const sliderWidth = $(this).offset().left + $(this).width() / 2;
    if ((e.pageX < sliderWidth)) {
      $(this).find('.glide__slide').not(firstChild).css('cursor', `url(${arrowleft}), auto`);
    } else {
      $(this).find('.glide__slide').not(lastChild).css('cursor', `url(${arrowright}), auto`);
    }
  });
}
