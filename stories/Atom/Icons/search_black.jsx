import React from 'react';
import icon from '../../assets/images/Icon/Search_black.svg';
import './icons.scss';

export const IconsSearchBlack = () => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
    <img src={image.src} alt={image.alt} className="icon-search-black" />
  );
};
