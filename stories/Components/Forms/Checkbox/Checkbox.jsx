import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, id }) => (
  <div className="form-check">
    <input type="checkbox" id={id} name={id} value={value}/>
    <label htmlFor={id}>{label}</label>
  </div>
);
