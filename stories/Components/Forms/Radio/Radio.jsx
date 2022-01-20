import React from 'react';
import './radio.scss';

export const Radio = ({ label, id, name }) => (
  <div className="form-check">
    <input type="radio" id={id} value="" name={name}/>
    <label htmlFor={id}>
      { label }
    </label>
  </div>
);
