import React from 'react';
import icon from '../../assets/images/Icon/arrow-left.svg';
import './icons.scss';

export const Iconarrowleft = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-arrow-left" />
  );
};
