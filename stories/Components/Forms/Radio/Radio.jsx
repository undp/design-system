import React from 'react';
import './radio.scss';

export const Radio = ({ label }) => (
  <>
    <div className="radio">
      <input type="radio" id="undp" name={label} aria-label="Radio" />
      <label htmlFor="undp">
        <span />
        { label }
      </label>
    </div>
    <div className="radio">
      <input type="radio" id="undp2" name={label} aria-label="Radio" />
      <label htmlFor="undp2">
        <span />
        { label }
      </label>
    </div>
  </>
);
