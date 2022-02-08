import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';
import { lightboxGallery } from '../../../../assets/js/lightbox-gallery';
import './lightbox.scss';
import './lightbox-gallery.scss';
import { Imagecaption } from '../../../../Molecules/ImageCaption/ImageCaption';

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const LightboxGallery = ({
  titleText, descText, buttonText, data
}) => {
  useEffect(() => {
    lightboxGallery();
  }, []);
  return (
    <div className="grid-x grid-margin-x lightbox-gallery">
      <div className={['medium-4 large-3 cell lightbox-gallery__left'].join(' ')}>
        <div className="lightbox-gallery__content">
          <Heading type="5" label={titleText} />
          <P label={descText} />
          <Ctalink label={buttonText} />
        </div>
      </div>
      <div className="medium-8 large-9 cell lightbox-gallery__right">
            <ul className="lightbox-gallery-images">
              {data.map((item, index) => {
                 return (
                    <>
                    <li key={index}>
                      <a href={item.galleryimg} className="glightbox" data-glightbox={"description:.glightbox-"+`${index}`+";"} descPosition="bottom">
                        <figure>
                          <div className="image"><img src={item.gallerythum} alt="image"/></div>
                            <div className={cls('image__description', `glightbox-${index}`)}>
                              <Imagecaption label={item.label} paragraph={item.paragraph} />
                            </div>
                          </figure>
                        </a>
                      </li>
                    </>
                  );
              })}
            </ul>
      </div>
    </div>
  );
};
