import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { parallaxEffect } from '../../../../assets/js/parallax';
import './parallaxgallery.scss';

export const ParallaxGallery = ({
  titleText, descText, buttonText, galleryimg1, galleryimg2, galleryimg3, galleryimg4, Background,
}) => {
  useEffect(() => {
    parallaxEffect('.parallax-gallery-images', 'vertical');
  }, []);

  let background;
  const backgrounds = ['Gray'];
  background = backgrounds.includes(Background) ? Background.toLowerCase() : '';

  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

  return (
    <div className="grid-x grid-margin-x parallax-gallery">
      <div className={cls('medium-6', 'cell', 'parallax-gallery-left', `${background}`)}>
        <div className="parallax-gallery-content">
          <Heading type="5" label={titleText} />
          <P label={descText} />
          <Ctalink label={buttonText} />
        </div>
      </div>
      <div className="medium-6 cell parallax-gallery-right">
        <div className="parallax-gallery-images">
          <div className="column" role="img" aria-label="parallax gallery images">
            <img src={galleryimg1} alt="Image 1" />
            <img src={galleryimg3} alt="Image 2" />
            <img src={galleryimg1} alt="Image 3" />
            <img src={galleryimg3} alt="Image 4" />
            <img src={galleryimg1} alt="Image 5" />
          </div>
          <div className="column" role="img" aria-label="parallax gallery images">
            <img src={galleryimg2} alt="Image 6" />
            <img src={galleryimg4} alt="Image 7" />
            <img src={galleryimg2} alt="Image 8" />
            <img src={galleryimg4} alt="Image 9" />
            <img src={galleryimg2} alt="Image 10" />
          </div>
        </div>
      </div>
    </div>
  );
};
