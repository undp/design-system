import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { carousel } from '../../../../assets/js/carousel';
import viewport from '../../../../assets/js/viewport';
import './fluidimagesizecarousel.scss';
import chevronRightWhite from '../../../../assets/icons/circle-right.svg';
import chevronLeftWhite from '../../../../assets/icons/circle-left.svg';

export const FluidImageSizeCarousel = ({ data }) => {
  useEffect(() => {
    carousel('.fluid-carousel', 20, 20, 1, 1, 0, false, false);
    viewport('.fluid-carousel');
  }, []);
  return (
    <section className="fluid-carousel left-right">
      <div className="glide__scrollbar" aria-valuemin="0" aria-valuemax="100">
        <span className="glide__scrollbar-drag" />
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {data.map((item, index) => <button className="glide__bullet" data-glide-dir={[`=${index}`]} aria-label={`bullet ${1 + index}`} key={index} />)}
      </div>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {data.map((item, index) => (
            <li className="glide__slide" aria-roledescription="slide" aria-label={`slide ${1 + index}`}>
              <div className="grid-x">
                <img className="fluid-carousel__image" src={item.slideImage} alt="" />
                <article className="slide-content">
                  <Heading type="6" label={item.tagtext} />
                  <Heading type="4" label={item.titleText} />
                  <P label={item.descText} />
                  <div className="slide-content__button-wrap">
                    <Ctalink Type="Space" label={item.buttonText} />
                    <div className="glide__arrows" data-glide-el="controls" aria-label="carousel arrows">
                      <button className="glide__arrow glide__arrow--left" aria-label="prev" data-glide-dir="<"><img src={chevronLeftWhite} alt="Prev" /></button>
                      <button className="glide__arrow glide__arrow--right" aria-label="next" data-glide-dir=">"><img src={chevronRightWhite} alt="Next" /></button>
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
