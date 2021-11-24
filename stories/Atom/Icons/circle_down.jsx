import React from 'react';
import icon from '../../assets/images/Icon/circle-down.svg';
import './icons.scss';

export const Iconscircledown = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-circle-down" />
  );
};
