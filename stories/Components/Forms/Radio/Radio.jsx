import React from 'react';
import './radio.scss';

export const Radio = ({ label, id, name }) => (
  <div className="form-check">
    <input type="radio" id={id} name={name} aria-label="Radio" />
    <label htmlFor={id}>{ label }</label>
  </div>
);
