import React from 'react';
import icon from '../../../assets/images/icon/Globe.svg'
import '../icons/icons.scss';

export const IconsGlobe = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <div className={'icon'} {...props}>   
          <img src={image.src} alt={image.alt} className={[`icon--${varient}`].join(' ')} />
    </div>
  );
};

