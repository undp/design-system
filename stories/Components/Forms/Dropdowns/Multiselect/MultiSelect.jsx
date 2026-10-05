import React, { useEffect, useId } from 'react';
import './multi-select.scss';
import { multiSelect } from '../../../../assets/js/multi-select';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Radio } from '../../Radio/Radio';

const cls = (...classes) => (classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(' ') : null);

function SelectTag({
  text, eleId, locale, ...args
}) {
  const disclosureId = `multi-select-${useId()}`;
  useEffect(() => {
    multiSelect(locale);
  }, [locale]);

  let ElementTag = (args.variant === 'Radio') ? Radio : Checkbox;

  return (
    <div className="multi-select" data-multi-select="">
      <button
        type="button"
        id={`${disclosureId}-trigger`}
        aria-expanded="false"
        aria-controls={disclosureId}
        data-id={`filter${eleId}`}
      >
        {text}
      </button>
      <ul
        className={cls(`${args.Height === 'Fix height' ? 'fix-height' : ''}`)}
        data-type="region"
        id={disclosureId}
        role="group"
        aria-labelledby={`${disclosureId}-trigger`}
        aria-hidden="true"
        hidden
      >
        <li role="none">
          <ElementTag
            label={`${text}`}
            value="category1"
            id={`category1${eleId}-${disclosureId}`}
            label_pos="before"
            name={`filter${eleId}-${disclosureId}`}
          />
        </li>
        <li role="none">
          <ElementTag
            label={`${text}`}
            value="category2"
            id={`category2${eleId}-${disclosureId}`}
            label_pos="before"
            name={`filter${eleId}-${disclosureId}`}
          />
        </li>
        <li role="none">
          <ElementTag
            label={`${text}`}
            value="category3"
            id={`category3${eleId}-${disclosureId}`}
            label_pos="before"
            name={`filter${eleId}-${disclosureId}`}
          />
        </li>
        <li role="none">
          <ElementTag
            label={`${text}`}
            value="category4"
            id={`category4${eleId}-${disclosureId}`}
            label_pos="before"
            name={`filter${eleId}-${disclosureId}`}
          />
        </li>
        <li role="none">
          <ElementTag
            label={`${text}`}
            value="category5"
            id={`category5${eleId}-${disclosureId}`}
            label_pos="before"
            name={`filter${eleId}-${disclosureId}`}
          />
        </li>
        <li role="none" className="has-submenu">
          <button
            type="button"
            className="checkbox-item"
            id={`${disclosureId}-subgroup-trigger`}
            aria-expanded="false"
            aria-controls={`${disclosureId}-subgroup`}
          >{text}</button>
          <ul
            role="group"
            className="sub-menu"
            id={`${disclosureId}-subgroup`}
            aria-labelledby={`${disclosureId}-subgroup-trigger`}
            aria-hidden="true"
            hidden
          >
            <li role="none">
              <ElementTag
                label={`${text}`}
                value="subcategory1"
                id={`subcategory1${eleId}-${disclosureId}`}
                label_pos="before"
                name={`filter${eleId}-${disclosureId}`}
              />
            </li>
            <li role="none">
              <ElementTag
                label={`${text}`}
                value="subcategory2"
                id={`subcategory2${eleId}-${disclosureId}`}
                label_pos="before"
                name={`filter${eleId}-${disclosureId}`}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SelectTag;
