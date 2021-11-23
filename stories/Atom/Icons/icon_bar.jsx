import React from 'react';
import icon from '../../assets/images/Icon/Bars.svg';
import './icons.scss';

export const IconsBar = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-bar" />
  );
};
