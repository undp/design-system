import React, { useEffect } from 'react';
import './custom-select.scss';
import { select } from '../../../../assets/js/select';

const CustomSelect = ({ text }) => {
  useEffect(() => {
    select();
  }, []);
  return (
    <div className="select-box" data-select="">
      <button type="button" aria-haspopup="listbox" aria-label="Select" data-select-open="">
        {text}
      </button>
      <ul role="listbox" data-select-options="">
        <li role="option" tabIndex="0" data-value="default">
          <span>All</span>
        </li>
        <li role="option" tabIndex="0" data-value="pasto">
          <span>Pasto</span>
        </li>
        <li role="option" tabIndex="0" data-value="dari">
          <span>Dari</span>
        </li>
        <li role="option" tabIndex="0" data-value="en">
          <span>English</span>
        </li>
        <li role="option" tabIndex="0" data-value="albanian">
          <span>Albanian</span>
        </li>
        <li role="option" tabIndex="0" data-value="arabic">
          <span>Arabic</span>
        </li>
        <li role="option" tabIndex="0" data-value="portuguese">
          <span>Portuguese</span>
        </li>
      </ul>
    </div>
  );
};

export default CustomSelect;
