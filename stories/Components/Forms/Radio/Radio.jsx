import React from 'react';
import './radio.scss';

export const Radio = ({ label, id, name }) => (
  <>
    <div className="radio">
      <input type="radio" id={id} name={name} aria-label="Radio" />
      <label htmlFor={id}>
        <span />
        { label }
      </label>
    </div>
  </>
);
