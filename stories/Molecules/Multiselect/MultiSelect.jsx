import React, { useEffect } from 'react';
import './multiselect.scss';
import init from '../../assets/js/multiselect-init';
import { Checkbox } from '../../Atom/Form/Checkbox/Checkbox';

const SelectTag = ({ text }) => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="multi-select regions-select" data-multi-select="">
      <button
        className="select-control"
        id="select_button"
        aria-label="Region"
        aria-expanded="false"
      >
        {text}
        <span />
      </button>
      <ul
        className="options"
        data-type="region"
        aria-labelledby="select_button"
        role="listbox"
        aria-multiselectable="true"
      >
        <li role="option" id="label-category1">
          <Checkbox label={`${text}`} value="category1" id="category1" />
        </li>
        <li className="has-submenu">
          <button className="has-submenu__button checkbox-item">
            {text}
          </button>
          <ul role="listbox" className="sub-menu">
            <li role="option" id="label-subcategory1">
              <Checkbox
                label={`${text}`}
                value="subcategory1"
                id="subcategory1"
              />
            </li>
            <li role="option" id="label-subcategory2">
              <Checkbox
                label={`${text}`}
                value="subcategory2"
                id="subcategory2"
              />
            </li>
          </ul>
        </li>
        <li role="option" id="label-category2">
          <Checkbox label={`${text}`} value="category2" id="category2" />
        </li>
        <li role="option" id="label-category3">
          <Checkbox label={`${text}`} value="category3" id="category3" />
        </li>
        <li role="option" id="label-category4">
          <Checkbox label={`${text}`} value="category4" id="category4" />
        </li>
        <li role="option" id="label-category5">
          <Checkbox label={`${text}`} value="category5" id="category5" />
        </li>
      </ul>
    </div>
  );
};

export default SelectTag;
