import React, { useEffect } from 'react';
import { swiper } from '../../../../assets/js/swiper';
import './image-only-carousel.scss';
import '../../../../assets/scss/_swiper.scss';
import isChromatic from "chromatic/isChromatic";

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export function ImageOnlyCarousel({ data }) {
  // useEffect(() => {
  //   swiper('.image-carousel', '.slider-slide');
  // }, []);
  const ioCarouselCls = isChromatic() ? 'image-carousel inviewport' : 'image-carousel';
  return (
    <div data-viewport={isChromatic() ? '' : 'true'} className={ioCarouselCls} dir={rtl} data-undpds-component="swiper" data-selector=".image-carousel" data-arrows-selector=".slider-slide">
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide slider-slide" aria-roledescription="slide" aria-label={`slide ${1 + index}`} key={index}>
            <img className="image-carousel__image" src={item.slideImage} alt={item.slideImage} />
          </div>
        ))}
      </div>
    </div>
  );
}
