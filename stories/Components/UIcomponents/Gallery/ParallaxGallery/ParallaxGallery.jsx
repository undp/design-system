import React, { Component, useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { parallaxGallery } from '../../../../assets/js/parallax_gallery';
import './parallaxgallery.scss';

export const ParallaxGallery = ({
  titleText, descText, buttonText, galleryimg1, galleryimg2, galleryimg3, galleryimg4, Background,
}) => {
  useEffect(() => {
    parallaxGallery('.parallax-gallery-images__col', '85', '.parallax-gallery-images');
  }, []);
  let background = '';
  if (Background == 'Grey') {
    background = 'grey';
  }
  return (
    <div className="grid-x grid-margin-x parallax-gallery-row">
      <div className={['medium-6 cell parallax-gallery-row__left-col', `${[`${background}`]}`].join(' ')}>
        <div className="parallax-gallery-row__content">
          <Heading type="5" label={titleText} />
          <P label={descText} />
          <Ctalink label={buttonText} />
        </div>
      </div>
      <div className="medium-6 cell parallax-gallery-row__right-col overflow-hidden">
        <div>
          <div className="parallax-gallery-images">
            <div className="parallax-gallery-images__col" role="img" aria-label="parallax gallery images">
              <img src={galleryimg1} alt="image 1" />
              <img src={galleryimg3} alt="image 2" />
              <img src={galleryimg1} alt="image 3" />
              <img src={galleryimg3} alt="image 4" />
              <img src={galleryimg1} alt="image 5" />
            </div>
            <div className="parallax-gallery-images__col" role="img" aria-label="parallax gallery images">
              <img src={galleryimg2} alt="image 6" />
              <img src={galleryimg4} alt="image 7" />
              <img src={galleryimg2} alt="image 8" />
              <img src={galleryimg4} alt="image 9" />
              <img src={galleryimg2} alt="image 10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
