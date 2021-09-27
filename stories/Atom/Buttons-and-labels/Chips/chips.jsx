import React from 'react';
import './chips.scss';

export const Chips = ({ label }) => {
  return (
    <a className="chips chips__no-cross" href="#">
      { label }
    </a>
  );
};
