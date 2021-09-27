import React from 'react';
import './chips.scss';

export const Chipscross = ({ label }) => {
  return (
    <a className="chips chips__cross" href="#">
      { label }
    </a>
  );
};
