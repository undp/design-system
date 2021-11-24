import React from 'react';
import icon from '../../../assets/images/Icon/back.svg';
import './icons.scss';

export const Iconsback = ({ varient }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-back" />
  );
};
