import React, { useEffect } from 'react';
import './select.scss';

const Select = ({ text }) => (
  <div>
    <select className="select-default" tabIndex="-1" aria-label="select">
      <option>1</option>
      <option>2</option>
    </select>
  </div>
);

export default Select;
