import React from 'react';
import icon from '../../../assets/images/Icon/Times_circle.svg'
import './icons.scss';
export const IconsTimesClose = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
   <img src={image.src} alt={image.alt} className={'icon-close-circle'} />
  );
};

