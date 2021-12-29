import React, { useEffect } from 'react';
import './customselect.scss';
import init from '../../../../assets/js/select-init';

const CustomSelect = ({ text }) => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="select-box" data-select="">
      <button type="button" aria-haspopup="listbox" aria-label="Select" id="exp_button" className="selected" data-select-open="">
        {text}
      </button>
      <ul tabIndex="-1" role="listbox" aria-labelledby="exp_button" data-select-options="">
        <li role="option" data-value="default">
          <span>All</span>
        </li>
        <li role="option" data-value="pasto">
          <span>Pasto</span>
        </li>
        <li role="option" data-value="dari">
          <span>Dari</span>
        </li>
        <li role="option" data-value="en">
          <span>English</span>
        </li>
        <li role="option" data-value="albanian">
          <span>Albanian</span>
        </li>
        <li role="option" data-value="arabic">
          <span>Arabic</span>
        </li>
        <li role="option" data-value="portuguese">
          <span>Portuguese</span>
        </li>
      </ul>
    </div>
  );
};

export default CustomSelect;
