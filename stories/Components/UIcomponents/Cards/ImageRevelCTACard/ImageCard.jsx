import React from 'react';
import './imagecard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';

export const size_options = {
  Large: 'medium-4',
  Small: 'small',
};

export const ImageRevelCard = ({
  contentname, image, Size, link, button,
}) => (
  <div className="grid-x grid-margin-x">
    <div className={['imagecard', 'cell', `${size_options[`${Size}`]}`].join(' ')}>
      <a href={link} className={['imagecard', `imagecard__${size_options[`${Size}`]}`].join(' ')}>
        <div className="imagecard__content">
          {image && (
            <div className={['imagecard__content--thumbnail-image', `${size_options[`${Size}`]}`].join(' ')}>
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