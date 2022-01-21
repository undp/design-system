import React from 'react';
import { Heading } from '../../Typography/Heading/Heading';
import './SidebarWithArrow.scss';

export const variant_options = {
  default: '',
  default_up: 'default-up',
  selected: 'selected',
  selected_up: 'selected-up',
};
const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
export const SidebarWithArrow = ({ variant, text }) => (
  <div className={cls('sidebar_item_arrow', variant_options[`${variant}`])}>
    <Heading type="6" label={text} />
    {variant_options[`${variant}`] === 'default' || variant_options[`${variant}`] === 'default-up'
      ? (
        <>
          <div className="icon-chevron-down" />
        </>
      )
      : (
        <>
          <div className="icon-chevron-down-white" />
        </>
      )}
  </div>
);
