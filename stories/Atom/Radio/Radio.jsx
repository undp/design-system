import React from 'react';
import './radio.scss';

export const Radio = ({}) => {
  return (
    <div className="radio-label">
      <input type="radio" />
      <span id="radiomark" className="radio-custom"></span>
    </div>
  );
};
