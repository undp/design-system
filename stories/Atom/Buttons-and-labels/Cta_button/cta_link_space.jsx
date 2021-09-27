import React from 'react';
import './buttons.scss';

export const Ctaspace = ({ label }) => {
  return (
  <a className="cta__link cta--space" href="#">
    { label }
  </a>
  );
};
