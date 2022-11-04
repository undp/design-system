/**
 * Our Expertise section
 */

export function ourExpertise() {
  let settings = {
    speed: 500,
    a11y: true,
    keyboardControl: true,
    navigation: {
      nextEl: '.our-expertise .next',
      prevEl: '.our-expertise .prev',
    },
    on: {
      slideChange(slider) {
        const $divs = jQuery(slider.el).find('.swiper-tabs div');
        const $slide = jQuery(slider.slides[slider.realIndex]);
        $divs.removeClass('is-active').eq($slide.data('category')).addClass('is-active');
        jQuery(slider.el).find('.swiper-counter').text(`${$slide.data('panel') + 1} / ${$slide.data('catLength')}`);
      },
    },
  };

  let swiper = new Swiper('.our-expertise .swiper', settings);

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

  // jQuery('.our-expertise .swiper-slide .image img').on('load', (e) => {
  //   let $this = jQuery(e.target);
  //   $this.css({height: $this.prop('naturalHeight'), width: $this.prop('naturalWidth')});
  // });
}
