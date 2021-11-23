import React from 'react';
import icon from '../../assets/images/Icon/Chevron-down.svg';
import './icons.scss';

export const Iconschevrondown = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-chevron-down" />
  );
};
