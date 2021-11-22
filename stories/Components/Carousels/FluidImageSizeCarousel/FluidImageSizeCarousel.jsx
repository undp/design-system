import React, { Component, useEffect } from 'react';
import { Image } from '../../../Atom/Images/Image/Image';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { CarouselFun } from '../../../assets/js/Carousel';
import viewport from '../../../assets/js/viewport';
import './fluidimagesizecarousel.scss';
import chevronRightWhite from '../../../assets/images/Icon/chevron-right-white.svg';

export const FluidImageSizeCarousel = ({ data }) => {
  useEffect(() => {
    CarouselFun('.fluid-image-size-carousel', '20');
    viewport('.fluid-image-size-carousel');
  }, []);
  return (
    <div className="fluid-image-size-carousel left-right">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide">
              <div className="grid-x grid-margin-x">
                <div className="medium-7 large-8 cell">
                  <img className="fluid-image-size-carousel__image" src={item.slideImage} alt="" />
                </div>
                <div className="medium-5 large-4 cell">
                  <div className="fluid-image-size-carousel__contents">
                    <div className="fluid-image-size-carousel__contents-tag">{item.tagtext}</div>
                    <Heading type="4" label={item.titleText} />
                    <P label={item.descText} />
                    <Ctalink label={item.buttonText} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><img src={chevronRightWhite} alt="" /></button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><img src={chevronRightWhite} alt="" /></button>
      </div>
    </div>
  );
};
