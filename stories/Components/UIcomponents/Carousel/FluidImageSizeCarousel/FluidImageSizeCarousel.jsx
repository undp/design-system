import React, { Component, useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { carousel } from '../../../../assets/js/carousel';
import viewport from '../../../../assets/js/viewport';
import './fluidimagesizecarousel.scss';
import chevronRightWhite from '../../../../assets/images/Icon/circle-right.svg';
import chevronLeftWhite from '../../../../assets/images/Icon/circle-left.svg';

export const FluidImageSizeCarousel = ({ data }) => {
  useEffect(() => {
    carousel('.fluid-carousel', 20, 20, 1, 1, 0);
    viewport('.fluid-carousel');
  }, []);
  return (
    <div className="fluid-carousel left-right">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide" aria-label={index}>
              <div className="grid-x">
                <img className="fluid-carousel__image" src={item.slideImage} alt="" />
                <div className="slide-content">
                  <Heading type="6" label={item.tagtext} />
                  <Heading type="4" label={item.titleText} />
                  <P label={item.descText} />
                  <div className="slide-content__button-wrap">
                    <Ctalink Type="Space" label={item.buttonText} />
                    <div className="glide__arrows" data-glide-el="controls">
                      <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><img src={chevronLeftWhite} alt="Prev" /></button>
                      <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><img src={chevronRightWhite} alt="Next" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
