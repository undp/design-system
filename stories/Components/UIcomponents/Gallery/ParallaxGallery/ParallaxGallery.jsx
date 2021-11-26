import React, { Component, useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { parallaxGalleryFun } from '../../../../assets/js/parallax-gallery';
import './parallaxgallery.scss';

export const ParallaxGallery = ({
  titleText, descText, buttonText, galleryimg1, galleryimg2, galleryimg3, galleryimg4, Textbgcolor,
}) => {
  useEffect(() => {
    parallaxGalleryFun('.parallax-gallery-images__col', '10', '.parallax-gallery-row');
  }, []);
  return (
    <div className="grid-x grid-margin-x parallax-gallery-row">
      <div className={['medium-6 cell parallax-gallery-row__left-col', `${[`${Textbgcolor}`]}`].join(' ')}>
        <div className="parallax-gallery-row__content">
          <Heading type="5" label={titleText} />
          <P label={descText} />
          <Ctalink label={buttonText} />
        </div>
      </div>
      <div className="medium-6 cell parallax-gallery-row__right-col overflow-hidden">
        <div>
          <div className="parallax-gallery-images">
            <div className="parallax-gallery-images__col">
              <img src={galleryimg1} alt="" />
              <img src={galleryimg3} alt="" />
            </div>
            <div className="parallax-gallery-images__col">
              <img src={galleryimg2} alt="" />
              <img src={galleryimg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
