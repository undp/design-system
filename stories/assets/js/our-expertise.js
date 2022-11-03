/**
 * Our Expertise section
 */
import { swiper } from './swiper';

export function ourExpertise() {
  swiper('.our-expertise .swiper', '.swiper-navigation', {
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
        jQuery(slider.el).find('.swiper-counter').text(`${$slide.data('slide') + 1} of ${$slide.data('catLength')}`);
      },
    },
  });
  jQuery('.our-expertise .swiper-tabs div').on('click', (event) => {
    const slider = jQuery('.our-expertise .swiper').prop('swiper');
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
