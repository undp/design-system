import React from 'react';
import logowhite from '../../../assets/images/logo-white.svg'
import './logo.scss';

export const Logowhite = ({ src, alt,  ...props }) => {
  const image = {
    src_white: logowhite,
    alt: 'UNDP Logo',
  };
  return (
    <img src={image.src_white} alt={image.alt} className="logo-white"/>
  );
};
