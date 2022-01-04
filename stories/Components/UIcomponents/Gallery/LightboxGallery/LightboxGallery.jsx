import React, { useEffect } from 'react';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { lightbox_Gallery } from '../../../../assets/js/lightbox-gallery';
import './lightbox.scss';
import './lightboxgallery.scss';

export const LightboxGallery = ({
  titleText, descText, buttonText, data
}) => {
  useEffect(() => {
    lightbox_Gallery();
  }, []);
  return (
    <div className="grid-x grid-margin-x lightbox-gallery-row">
      <div className={['medium-3 cell lightbox-gallery-row__left-col'].join(' ')}>
        <div className="lightbox-gallery-row__content">
          <Heading type="5" label={titleText} />
          <P label={descText} />
          <Ctalink label={buttonText} />
        </div>
      </div>
      <div className="medium-9 cell lightbox-gallery-row__right-col overflow-hidden">
          <div className="lightbox-gallery-images">
            <ul >
              {data.map((item) => {
                 return (
                    <>
                    <li>
                      <a href={item.galleryimg1} class="glightbox2" data-glightbox="description: .custom-desc1; descPosition: left;">
                        <figure>
                          <div className="image"><img src={item.galleryimg1} alt="image" /></div>
                            <div class="custom-desc1 image-section__description">
                              <figcaption class="image__caption">
                                <div class="image__caption_para">
                                {item.paragraph}
                                </div>
                                <div class="credits">
                                  {item.label}
                                </div>
                              </figcaption>
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
    </div>
  );
};
