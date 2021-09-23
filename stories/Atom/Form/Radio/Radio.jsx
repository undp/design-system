import React from 'react';
import './radio.scss';

export const Radio = ({ label }) => {
  return (
    <div className="radio-wrapper">
      <input type="radio" id="edit-radio" className="custom-control-input"/>
      <label id="checkmark" for="edit-radio" name="radioone" className="custom-control-label">{ label }</label>
    </div>
  );
};
