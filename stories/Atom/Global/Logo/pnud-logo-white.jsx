import React from 'react';
import logo from '../../../assets/images/pnud-white.svg'
import './logo.scss';


export const PnudLogowhite = ({ src, alt,  ...props }) => {
  const image = {
    src: logo,
    alt: 'UNDP inverted Logo white',
  };
  return (
    <img src={image.src} alt={image.alt} className="undp-logo-white"/>
  );
};
