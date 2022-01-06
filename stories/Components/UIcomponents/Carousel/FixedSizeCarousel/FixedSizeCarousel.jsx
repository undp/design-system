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
    carousel('.fixed-carousel', 20, 20, 1, 1, 0, false, false);
    viewport('.fixed-carousel');
  }, []);
  return (
    <section className="fixed-carousel left-right">
      {label && <Heading type="2" label={label} />}
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
              <div className="fixed-carousel__row">
                <div className="fixed-carousel__image-col">
                  <img className="fixed-carousel__image" src={item.slideImage} alt="" />
                </div>
                <article className="fixed-carousel__content-col" role='article'>
                  <div>
                    <h6>{item.tagtext}</h6>
                    <Heading type="4" label={item.titleText} />
                    <P label={item.descText} />
                  </div>
                  <div className="fixed-carousel__button-wrap">
                    <CtaButton label={item.buttonText}/>
                    <div className="glide__arrows" data-glide-el="controls" aria-label='carousel arrows'>
                      <button className="glide__arrow glide__arrow--left" aria-label='prev' data-glide-dir="<"><img src={chevronLeftWhite} alt="Prev" /></button>
                      <button className="glide__arrow glide__arrow--right" aria-label='next' data-glide-dir=">"><img src={chevronRightWhite} alt="Next" /></button>
                    </div>
                  </div>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
