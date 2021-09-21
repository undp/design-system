import React from 'react';
import icon from '../../../assets/images/Icon/Chevron-right.svg'
import './icons.scss';

export const Iconschevronright = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className={'icon-chevron-right'} />
  );
};

