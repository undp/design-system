import React from 'react';
import icon from '../../assets/images/Icon/Language.svg';
import './icons.scss';

export const IconsLanguage = ({ varient, ...props }) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-language " />
  );
};
