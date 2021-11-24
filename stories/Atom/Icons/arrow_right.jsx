import React from 'react';
import icon from '../../assets/images/Icon/arrow-right.svg';
import './icons.scss';

export const Iconarrowright = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-arrow-right" />
  );
};
