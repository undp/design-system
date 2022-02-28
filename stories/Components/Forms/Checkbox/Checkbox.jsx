import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, arialabel, id, label_pos }) => (
  <div className="form-check">
    {label && label_pos == 'before' && (<label htmlFor={id}>{label}</label>)}
    <input type="checkbox" id={id} name={id} value={value} {...(arialabel ? {'aria-label': arialabel} : '')}/>
    {label && label_pos == 'after' && (<label htmlFor={id}>{label}</label>)}
  </div>
);

Checkbox.defaultProps = {
  label_pos: 'after'
};