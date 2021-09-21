import React from 'react';
import icon from '../../../assets/images/Icon/Search.svg'
import './icons.scss';

export const IconsSearch = ({ varient, ...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className={'icon-search'}  />
  );
};
