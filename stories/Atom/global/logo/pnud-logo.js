import React from 'react';
import logo from '../../../assets/images/pnud.svg'
import '../global.scss';


export const PnudLogo = ({ src, alt,  ...props }) => {
  const image = {
    src: logo,
    alt: 'PNUD Logo',
  };
  return (
    <img src={image.src} alt={image.alt} className="pnud-logo"/>
  );
};
