import React from 'react';
import icon from '../../../assets/images/Icon/Times-blue.svg';
import './icons.scss';

export const IconsTimesBlue = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-close " />
  );
};
