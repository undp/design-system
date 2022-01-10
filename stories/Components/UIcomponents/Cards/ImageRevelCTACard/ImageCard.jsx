import React from 'react';
import './imagecard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';

export const ImageRevelCard = ({
  contentname, image, Size, link, button,
}) => {
  let size = 'medium-4';
  if (Size == 'Small') {
    size = 'small';
  }

  return (
    <div className="grid-x grid-margin-x">
      <div className={['cell', `${size}`].join(' ')}>
        <a href={link} className='image-card'>
          <div className="image-card__content">
            {image && ( <img src={image} alt={image} /> )}
            {contentname && <Heading type="5" label={contentname} />}
          </div>
          <span className="cta__link cta--arrow">{button}</span>
        </a>
      </div>
    </div>
  );
};
