import React from 'react';
import './checkbox.scss';

export const Checkbox = ({ label }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id="edit-checkbox" className="custom-control-input"/>
      <label id="checkmark" for="edit-checkbox" name="checkboxone" className="custom-control-label">{ label }</label>
    </div>
  );
};
