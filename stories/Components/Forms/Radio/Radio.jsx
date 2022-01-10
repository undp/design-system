import React from 'react';
import './radio.scss';

export const Radio = ({ label, id }) => (
  <>
    <div className="radio">
      <input type="radio" id={id} name="undp" aria-label="Radio" />
      <label htmlFor={id}>
        <span />
        { label }
      </label>
    </div>
  </>
);
