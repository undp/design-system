import React from 'react';
import './buttons.scss';

export const Ctaarrow = ({ label }) => {
  return (
  <a className="cta__link cta--arrow" href="javascript:void(0)">
    { label }
  </a>
  );
};
