import React from 'react';
import icon from '../../../assets/images/Icon/Globe.svg';
import './icons.scss';

export const IconsGlobe = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-globe" />
  );
};
