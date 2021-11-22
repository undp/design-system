import React, { Component, useEffect } from 'react';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../Atom/Buttons-and-labels/Cta_button/CtaButton';
import { CarouselFun } from '../../../assets/js/Carousel';
import viewport from '../../../assets/js/viewport';
import './fixedimagesizecarousel.scss';
import chevronRightWhite from '../../../assets/images/Icon/chevron-right-white.svg';

export const FixedImageSizeCarousel = ({ data }) => {
  useEffect(() => {
    CarouselFun('.fixed-image-size-carousel', '20');
    viewport('.fixed-image-size-carousel');
  }, []);
  return (
    <div className="fixed-image-size-carousel left-right">
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={index} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {data.map((item, index) => (
            <div className="glide__slide">
              <div className="grid-x grid-margin-x">
                <div className="medium-5 cell">
                  <img className="fixed-image-size-carousel__image" src={item.slideImage} alt="" />
                </div>
                <div className="medium-7 cell">
                  <div className="fixed-image-size-carousel__contents">
                    <div>
                      <div className="fixed-image-size-carousel__contents-tag">{item.tagtext}</div>
                      <Heading type="4" label={item.titleText} />
                      <P label={item.descText} />
                    </div>
                    <div>
                      <CtaButton label1={item.buttonText} />
                    </div>
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
