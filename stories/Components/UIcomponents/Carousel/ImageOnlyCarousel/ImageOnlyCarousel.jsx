import React, { useEffect } from 'react';
import { swiper } from '../../../../assets/js/swiper';
import viewport from '../../../../assets/js/viewport';
import './image-only-carousel.scss';

// RTL Fix for Storybook.
let rtl = document.dir || undefined;
if (window.location.href.indexOf('direction=rtl') > -1) {
  rtl = 'rtl';
}
export const ImageOnlyCarousel = ({ data }) => {
  useEffect(() => {
    swiper('.image-carousel', '.slider-slide');
    viewport('.image-carousel');
  }, []);
  return (
    <div className="image-carousel left-right" dir={rtl}>
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
};
