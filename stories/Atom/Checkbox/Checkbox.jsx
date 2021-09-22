import React from 'react';
import './checkbox.scss';

export const Checkbox = ({}) => {
  return (
    <div className="checkbox-label">
      <input type="checkbox" />
      <span id="checkmark" className="checkbox-custom"></span>
    </div>
  );
};
