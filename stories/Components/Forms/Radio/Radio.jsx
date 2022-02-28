import React from 'react';
import './radio.scss';

export const Radio = ({ label, id, name, label_pos }) => (
  <div className="form-check">
    {label && label_pos == 'before' && (<label htmlFor={id}>{label}</label>)}
    <input type="radio" id={id} value="" name={name}/>
    {label && label_pos == 'after' && (<label htmlFor={id}>{label}</label>)}
  </div>
);

Radio.defaultProps = {
  label_pos: 'after'
};