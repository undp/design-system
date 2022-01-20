import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../Buttons/Cta_button/CtaButton';
import { swiper } from '../../../../assets/js/swiper';
import viewport from '../../../../assets/js/viewport';
import './fixedsizecarousel.scss';

export const FixedSizeCarousel = ({ data, label }) => {
  useEffect(() => {
    swiper('.fixed-carousel', '.fixed-carousel__button-wrap');
    viewport('.fixed-carousel');
  }, []);
  return (
    <section className="fixed-carousel left-right" dir={`${window.UNDP.dir}`}>
      {label && <Heading type="2" label={label} />}
      <div className="swiper-scrollbar" />
      <div className="swiper-wrapper">
        {data.map((item, index) => (
          <div className="swiper-slide slider-slide" aria-roledescription="slide" aria-label={`slide ${1 + index}`} key={index}>
            <img className="fixed-carousel__image" src={item.slideImage} alt="" />
            <article className="slide-content">
              <div className='slide-content-wrap'>
                <h6>{item.tagtext}</h6>
                <Heading type="4" label={item.titleText} />
                <P label={item.descText} />
              </div>
              <div className="fixed-carousel__button-wrap">
                <CtaButton label={item.buttonText} />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
