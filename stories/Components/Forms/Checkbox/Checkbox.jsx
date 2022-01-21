import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, arialabel, id }) => (
  <div className="form-check">
    <input type="checkbox" id={id} name={id} value={value} {...(arialabel ? {'aria-label': arialabel} : '')}/>
    {label && (<label htmlFor={id}>{label}</label>)}
  </div>
);
