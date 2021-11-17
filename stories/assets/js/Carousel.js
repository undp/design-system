import arrowright from '../images/Icon/arrow-right.svg';
import arrowleft from '../images/Icon/arrow-left.svg';

export function CarouselFun(ele, gapele) {
  let direc = 'ltr';
  let lastChild = ':last';
  let firstChild = ':first';
  var dirRight = '>';
  var dirLeft = '<';
  if ($('html').attr('dir') == 'rtl') {
    direc = 'rtl',
    lastChild = ':first';
    firstChild = ':last';
    var dirRight = '<';
    var dirLeft = '>';
  }
  const glide = new Glide(ele, {
    autoplay: false,
    gap: gapele,
    direction: direc,
    arrows: 'none',
    navigation: 'none',
    peek: {
      before: 0,
      after: 50,
    },
    breakpoints: {
      767: {
        peek: {
          before: 0,
          after: 35,
        },
      },
    },
  }).mount();
  $(ele).click(function (e) {
    const sliderWidth = $(this).offset().left + $(this).width() / 2;
    const i = glide.index;
    if ((e.pageX < sliderWidth) && (i != 0)) {
      glide.go(dirLeft);
    } else if ((i == 2)) {
      glide.go(dirLeft);
    } else {
      glide.go(dirRight);
    }
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
