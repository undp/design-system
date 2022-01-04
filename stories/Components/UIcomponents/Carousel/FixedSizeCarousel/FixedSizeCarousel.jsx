import React, { Component, useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';
import { carousel } from '../../../../assets/js/carousel';
import viewport from '../../../../assets/js/viewport';
import './fixedsizecarousel.scss';
import chevronRightWhite from '../../../../assets/icons/circle-right.svg';
import chevronLeftWhite from '../../../../assets/icons/circle-left.svg';

export const FixedSizeCarousel = ({ data, label }) => {
  useEffect(() => {
    carousel('.fixed-image-size-carousel', 20, 20, 1, 1, 0);
    viewport('.fixed-image-size-carousel');
  }, []);
  return (
    <div className="fixed-image-size-carousel overflow-hidden left-right">
      {label && <Heading type="2" label={label} />}
      <div class="glide__scrollbar" aria-valuemin="0" aria-valuemax="100">
        <span class="glide__scrollbar-drag"></span>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide" aria-label={index}>
              <div className="fixed-image-size-carousel__row">
                <div className="fixed-image-size-carousel__image-col">
                  <img className="fixed-image-size-carousel__image" src={item.slideImage} alt="" />
                </div>
                <div className="fixed-image-size-carousel__content-col">
                  <div>
                    <h6>{item.tagtext}</h6>
                    <Heading type="4" label={item.titleText} />
                    <P label={item.descText} />
                  </div>
                  <div className="fixed-image-size-carousel__button-wrap">
                    <CtaButton label={item.buttonText} />
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
