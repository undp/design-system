import React from 'react';
import './imagecard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const ImageRevelCard = ({
  contentname, image, size, link, button,
}) => (
  <div className="grid-x grid-margin-x">
    <div className={['cell', `${size}`].join(' ')}>
      <a href={link} className={['image-card',].join(' ')}>
        <div className="image-card__content">
          {image && (
            <div className={['image-card__content--thumbnail-image'].join(' ')}>
              <img src={image} alt={image} />
            </div>
          )}
          <div className="image-card__content--caption">
            {contentname && <Heading type="5" label={contentname} />}
          </div>
        </div>
        <span className="cta__link cta--arrow">{button}</span>
      </a>
    </div>
  </div>
);
