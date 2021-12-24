import React from 'react';
import './radio.scss';

export const Radio = ({ label }) => (
  <>
    <div className="radio-wrapper">
      <input type="radio" id="undp" name={ label } aria-label="Radio" />
      <label htmlFor="undp">
        <span className="radio_border" />
        { label }
      </label>
    </div>
    <div className="radio-wrapper">
      <input type="radio" id="undp2" name={ label } aria-label="Radio"/>
      <label htmlFor="undp2">
        <span className="radio_border" />
        { label }
      </label>
    </div>
  </>
);
