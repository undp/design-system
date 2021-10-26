import React from 'react';
import icon from '../../../assets/images/Icon/Chevron-small-right.svg';
import './icons.scss';

export const Iconschevronsmright = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-chevron-sm-right" />
  );
};
