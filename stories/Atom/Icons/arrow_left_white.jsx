import React from 'react';
import icon from '../../assets/images/Icon/arrow-left-white.svg';
import './icons.scss';

export const Iconarrowleftwhite = ({ }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} />
  );
};
