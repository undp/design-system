import React from 'react';
import './select.scss';

const Select = ({ text }) => (
  <select className="select-default" tabIndex="-1" aria-label="Select list">
    <option>1</option>
    <option>2</option>
  </select>
);

export default Select;
