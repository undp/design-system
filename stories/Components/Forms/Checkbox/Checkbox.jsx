import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, id }) => (
  <div className="checkbox-wrapper">
    <input type="checkbox" id={id} value={value}/>
    <label htmlFor={id}>{ label }</label>
  </div>
);
