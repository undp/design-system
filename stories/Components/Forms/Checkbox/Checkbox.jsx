import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, id }) => (
  <div className="checkbox">
    <input type="checkbox" id={id} value={value} aria-label="Checkbox" />
    <label htmlFor={id}>{ label }</label>
  </div>
);
