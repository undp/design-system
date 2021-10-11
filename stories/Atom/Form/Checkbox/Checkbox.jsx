import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label, value, id }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={id} className="custom-control-input" value={ value } />
      <label htmlFor={id} name="checkboxone" className="custom-control-label">{ label }</label>
    </div>
  );
};
