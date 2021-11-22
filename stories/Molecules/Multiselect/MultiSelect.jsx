import React, { useEffect } from 'react';
import './multiselect.scss';
import init from '../../assets/js/multiselect-init';
import { Checkbox } from '../../Atom/Form/Checkbox/Checkbox';

const SelectTag = ({ text, eleId }) => {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="multi-select regions-select" data-multi-select="">
      <button
        className="select-control"
        aria-label="Region"
        aria-expanded="false"
        id={`select_button-${eleId}`}
      >
        {text}
        <span />
      </button>
      <ul
        className="options"
        data-type="region"
        aria-labelledby={`select_button-${eleId}`}
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true"
      >
        <li role="option" id={`label-category1-${eleId}`}>
          <Checkbox label={`${text}`} value="category1" id={`category1-${eleId}`} />
        </li>
        <li role="option" className="has-submenu">
          <button className="has-submenu__button checkbox-item">
            {text}
          </button>
          <ul role="listbox" className="sub-menu">
            <li role="option" id={`label-subcategory1-${eleId}`}>
              <Checkbox
                label={`${text}`}
                value="subcategory1"
                id={`subcategory1-${eleId}`}
              />
            </li>
            <li role="option" id={`label-subcategory2-${eleId}`}>
              <Checkbox
                label={`${text}`}
                value="subcategory2"
                id={`subcategory2-${eleId}`}
              />
            </li>
          </ul>
        </li>
        <li role="option" id={`label-category2-${eleId}`}>
          <Checkbox label={`${text}`} value="category2" id={`category2-${eleId}`} />
        </li>
        <li role="option" id={`label-category3-${eleId}`}>
          <Checkbox label={`${text}`} value="category3" id={`category3-${eleId}`} />
        </li>
        <li role="option" id={`label-category4-${eleId}`}>
          <Checkbox label={`${text}`} value="category4" id={`category4-${eleId}`} />
        </li>
        <li role="option" id={`label-category5-${eleId}`}>
          <Checkbox label={`${text}`} value="category5" id={`category5-${eleId}`} />
        </li>
      </ul>
    </div>
  );
};

export default SelectTag;
