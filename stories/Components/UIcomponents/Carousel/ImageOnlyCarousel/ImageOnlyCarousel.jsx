import React, { Component, useEffect } from 'react';
import { carousel } from '../../../../assets/js/carousel';
import viewport from '../../../../assets/js/viewport';
import './imageonlycarousel.scss';
import chevronRightWhite from '../../../../assets/icons/circle-right.svg';
import chevronLeftWhite from '../../../../assets/icons/circle-left.svg';

export const ImageOnlyCarousel = ({ data }) => {
  useEffect(() => {
    carousel('.image-carousel', 20, 30, 1, 1, 0, false, false);
    viewport('.image-carousel');
  }, []);
  return (
    <div className="image-carousel left-right">
      <div className="glide__scrollbar" aria-valuemin="0" aria-valuemax="100">
        <span className="glide__scrollbar-drag"></span>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={`bullet ${1 + index}`} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {data.map((item, index) => (
            <li className="glide__slide" aria-roledescription='slide' aria-label={`slide ${1 + index}`}>
              <div className="grid-x">
                <img className="image-carousel__image" src={item.slideImage} alt={item.slideImage} />
                <div className="glide__arrows" data-glide-el="controls" aria-label='carousel arrows'>
                  <button className="glide__arrow glide__arrow--left" aria-label='prev' data-glide-dir="<"><img src={chevronLeftWhite} alt="Prev" /></button>
                  <button className="glide__arrow glide__arrow--right" aria-label='next' data-glide-dir=">"><img src={chevronRightWhite} alt="Next" /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
