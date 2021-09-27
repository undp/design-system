import React from 'react';
import icon from '../../../assets/images/Icon/chevron-right-black.svg'
import './icons.scss';

export const Iconschevronrightblack = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className={'icon-chevron-right-black'} />
  );
};
