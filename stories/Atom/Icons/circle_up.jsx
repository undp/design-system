import React from 'react';
import icon from '../../assets/images/Icon/circle-up.svg';
import './icons.scss';

export const Iconscircleup = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-circle-up" />
  );
};
