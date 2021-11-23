import React from 'react';
import icon from '../../assets/images/Icon/Chevron-small-left.svg';
import './icons.scss';

export const Iconschevronsmleft = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-chevron-sm-left" />
  );
};
