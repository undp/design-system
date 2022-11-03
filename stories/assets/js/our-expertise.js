/**
 * Our Expertise section
 */
import { swiper } from './swiper';

export function ourExpertise(ele) {
  swiper(`${ele} .swiper`, '.swiper-navigation', {
    scrollbar: false,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      showOn: 'desktop',
    },
    on: {
      slideChange(slider) {
        const $divs = jQuery(slider.el).find('.swiper-tabs div');
        const $slide = jQuery(slider.slides[slider.realIndex]);
        $divs.removeClass('is-active').eq($slide.data('category')).addClass('is-active');
        jQuery(slider.el).find('.swiper-counter').text(`${$slide.data('panel') + 1} / ${$slide.data('catLength')}`);
      },
    },
  });
  jQuery(`${ele} .swiper-tabs div`).on('click', (event) => {
    const slider = jQuery(`${ele} .swiper`).prop('swiper');
    const cat = jQuery(event.target).data('category');
    slider.slides.some((slide, index) => {
      if (jQuery(slide).data('category') == cat) {
        slider.slideTo(index);
        return true;
      }
      return false;
    });
  });
}
