import React from 'react';
import icon from '../../assets/images/Icon/arrow-right-white.svg';
import './icons.scss';

export const Iconarrowrightwhite = ({ }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} />
  );
};
