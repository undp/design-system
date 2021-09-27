import React from 'react';
import icon from '../../../assets/images/Icon/chevron-right-white.svg'
import './icons.scss';

export const Iconschevronrightwhite = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className={'icon-chevron-right-white'} />
  );
};
