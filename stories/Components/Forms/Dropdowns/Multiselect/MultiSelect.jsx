import React, { useEffect } from "react";
import "./multi-select.scss";
import { multiSelect } from "../../../../assets/js/multiselect";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Radio } from "../../Radio/Radio";

const cls = (...classes) =>
  classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(" ") : null;

const SelectTag = ({ text, eleId, locale, ...args }) => {
  useEffect(() => {
    multiSelect(locale);
  }, [locale]);

  let ElementTag = (args.variant === "Checkbox") ? Checkbox : Radio;

  return (
    <div className="multi-select" data-multi-select="">
      <button
        aria-label="Region"
        aria-expanded="false"
        data-id={`filter${eleId}`}>
        {text}
      </button>
      <ul
        className={cls(`${args.Height === "Fix height" ? "fix-height" : ""}`)}
        data-type="region"
        role="listbox"
        aria-multiselectable="true"
        aria-hidden="true"
        aria-modal="true">
        <li role="option">
          <ElementTag
            label={`${text}`}
            value="category1"
            id={`category1${eleId}`}
            label_pos='before'
            name={`filter${eleId}`}
          />
        </li>
        <li role="option">
          <ElementTag
            label={`${text}`}
            value="category2"
            id={`category2${eleId}`}
            label_pos='before'
            name={`filter${eleId}`}
          />
        </li>
        <li role="option">
          <ElementTag
            label={`${text}`}
            value="category3"
            id={`category3${eleId}`}
            label_pos='before'
            name={`filter${eleId}`}
          />
        </li>
        <li role="option">
          <ElementTag
            label={`${text}`}
            value="category4"
            id={`category4${eleId}`}
            label_pos='before'
            name={`filter${eleId}`}
          />
        </li>
        <li role="option">
          <ElementTag
            label={`${text}`}
            value="category5"
            id={`category5${eleId}`}
            label_pos='before'
            name={`filter${eleId}`}
          />
        </li>
        <li role="option" className="has-submenu">
          <button className="checkbox-item">{text}</button>
          <ul role="listbox" className="sub-menu">
            <li role="option">
              <ElementTag
                label={`${text}`}
                value="subcategory1"
                id={`subcategory1${eleId}`}
                label_pos='before'
                name={`filter${eleId}`}
              />
            </li>
            <li role="option">
              <ElementTag
                label={`${text}`}
                value="subcategory2"
                id={`subcategory2${eleId}`}
                label_pos='before'
                name={`filter${eleId}`}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SelectTag;
