import React, { useEffect } from 'react';
import './customselect.scss';
import init from '../../assets/js/select-init';

const CustomSelect = ({ text }) => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <div className="select-box" data-select="">
        <button type="button" aria-haspopup="listbox" aria-label="Select" id="exp_button" className="selected" data-select-open="">
          {text}
        </button>
        <ul tabIndex="-1" role="listbox" aria-labelledby="exp_button" className="options-container" data-select-options="">
          <li id="default-language-select" className="option" role="option" data-value="default">
            <span>All</span>
          </li>
          <li id="pasto-1" className="option" role="option" data-value="pasto">
            <span>Pasto</span>
          </li>
          <li id="dari-1" className="option" role="option" data-value="dari">
            <span>Dari</span>
          </li>
          <li id="english-1" className="option" role="option" data-value="en">
            <span>English</span>
          </li>
          <li id="albanian-1" className="option" role="option" data-value="albanian">
            <span>Albanian</span>
          </li>
          <li id="arabic-1" className="option" role="option" data-value="arabic">
            <span>Arabic</span>
          </li>
          <li id="portuguese-1" className="option" role="option" data-value="portuguese">
            <span>Portuguese</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
