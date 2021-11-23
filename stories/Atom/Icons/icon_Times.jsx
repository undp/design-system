import React from 'react';
import icon from '../../assets/images/Icon/Times.svg';
import './icons.scss';

export const IconsTimes = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-close " />
  );
};
