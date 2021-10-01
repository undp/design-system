import React from 'react';
import './logo.scss';

export const Logo = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="logo"/>
  );
};
