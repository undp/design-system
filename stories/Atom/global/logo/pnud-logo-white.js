import React from 'react';
import logo from '../../../assets/images/pnud-white.svg'
import '../global.scss';


export const PnudLogowhite = ({ src, alt,  ...props }) => {
  const image = {
    src: logo,
    alt: 'PNUD Logo white',
  };
  return (
    <img src={image.src} alt={image.alt} className="pnud-logo-white"/>
  );
};
