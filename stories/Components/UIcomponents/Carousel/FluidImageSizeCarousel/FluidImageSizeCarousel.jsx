import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { swiper } from '../../../../assets/js/swiper';
import viewport from '../../../../assets/js/viewport';
import './fluid-image-size-carousel.scss';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export const FluidImageSizeCarousel = ({ data }) => {
  useEffect(() => {
    swiper('.fluid-carousel', '.slide-content');
    viewport('.fluid-carousel');
  }, []);
  return (
    <section className="fluid-carousel left-right" dir={rtl}>
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide slider-slide" aria-roledescription="slide" aria-label={`slide ${1 + index}`} key={index}>
            <img className="fluid-carousel__image" src={item.slideImage} alt="" />
            <article className="slide-content">
              <Heading type="6" label={item.tagtext} />
              <Heading type="4" label={item.titleText} />
              <P label={item.descText} />
              <Ctalink Type="Space" label={item.buttonText} />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
