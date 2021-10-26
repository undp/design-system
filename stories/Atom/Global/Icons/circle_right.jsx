import React from 'react';
import icon from '../../../assets/images/Icon/circle-right.svg';
import './icons.scss';

export const Iconscircleright = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-circle-right" />
  );
};
