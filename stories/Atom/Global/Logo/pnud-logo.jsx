import React from 'react';
import logo from '../../../assets/images/pnud.svg'
import './logo.scss';


export const PnudLogo = ({ src, alt,  ...props }) => {
  const image = {
    src: logo,
    alt: 'UNDP inverted Logo',
  };
  return (
    <img src={image.src} alt={image.alt} className="undp-logo"/>
  );
};
