import React, { Component, useEffect } from 'react';
import { CarouselFun } from '../../../../assets/js/Carousel';
import viewport from '../../../../assets/js/viewport';
import './imageonlycarousel.scss';
import chevronRightWhite from '../../../../assets/images/Icon/circle-right.svg';
import chevronLeftWhite from '../../../../assets/images/Icon/circle-left.svg';

export const ImageOnlyCarousel = ({ data }) => {
  useEffect(() => {
    CarouselFun('.image-only-carousel', 20, 30, 1, 0);
    viewport('.image-only-carousel');
  }, []);
  return (
    <div className="image-carousel left-right">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide">
              <div className="grid-x">
                <img className="image-carousel__image" src={item.slideImage} alt={item.slideImage} />
                <div className="glide__arrows" data-glide-el="controls">
                  <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><img src={chevronLeftWhite} alt="Prev" /></button>
                  <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><img src={chevronRightWhite} alt="Next" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
