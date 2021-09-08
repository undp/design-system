import React from 'react';
import logo from '../../../assets/images/logo.svg'
import '../global.scss';


export const Logo = ({ src, alt,  ...props }) => {
  const image = {
    src: logo,
    alt: 'UNDP Logo',
  };
  return (
    <img src={image.src} alt={image.alt} className="logo"/>
  );
};
