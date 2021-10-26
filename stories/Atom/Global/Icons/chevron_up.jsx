import React from 'react';
import icon from '../../../assets/images/Icon/Chevron-up.svg';
import './icons.scss';

export const Iconschevronup = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-chevron-up" />
  );
};
