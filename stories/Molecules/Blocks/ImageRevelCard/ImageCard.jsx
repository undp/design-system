import React from 'react';
import './imagecard.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctaarrow } from '../../../Atom/Buttons-and-labels/Cta_button/cta_link_arrow';

export const ImageRevelCard = ({ contentname, image, size, link, button }) => {
  return (
    <div className='grid-x grid-margin-x'>
      <div className={['imagecard', 'cell', `${size}`].join(' ')}>
        <a href={link} className={['imagecard', `imagecard__${size}`].join(' ')}>
          <div className='imagecard__content'>
            {image && <div className={['imagecard__content--thumbnail-image', `${size}`].join(' ')}>
              <img src={image} alt={image} />
            </div>}
            <div className='imagecard__content--caption'>
              {contentname && <Heading type='5' label={contentname} />}
            </div>
          </div>
          <Ctaarrow label={button} />
        </a>
      </div>
    </div>
  );
};
