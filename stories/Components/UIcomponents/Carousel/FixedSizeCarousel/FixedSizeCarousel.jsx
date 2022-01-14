import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';
import { swiper } from '../../../../assets/js/swiper';
import viewport from '../../../../assets/js/viewport';
import './fixedsizecarousel.scss';
import chevronRightWhite from '../../../../assets/icons/circle-right.svg';
import chevronLeftWhite from '../../../../assets/icons/circle-left.svg';

export const FixedSizeCarousel = ({ data, label }) => {
  useEffect(() => {
    swiper('.fixed-carousel');
    viewport('.fixed-carousel');
  }, []);
  return (
    <section className="fixed-carousel left-right" data-swiper-slides-view="1" dir={`${window.UNDP.dir}`}>
      {label && <Heading type="2" label={label} />}
      <div className="swiper-scrollbar"></div>
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide" aria-roledescription="slide" aria-label={`slide ${1 + index}`} key={index}>
            <div className="fixed-carousel__row">
              <div className="fixed-carousel__image-col">
                <img className="fixed-carousel__image" src={item.slideImage} alt="" />
              </div>
              <article className="fixed-carousel__content-col">
                <div>
                  <h6>{item.tagtext}</h6>
                  <Heading type="4" label={item.titleText} />
                  <P label={item.descText} />
                </div>
                <div className="fixed-carousel__button-wrap">
                  <CtaButton label={item.buttonText} />
                  <div className="swiper-arrows" aria-label="carousel-arrows">
                    <div className="swiper-button-prev" aria-label="prev"><img src={chevronLeftWhite} alt="Prev" /></div>
                    <div className="swiper-button-next" aria-label="next"><img src={chevronRightWhite} alt="Next" /></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
