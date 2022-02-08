import React from 'react';
import { Heading } from '../../Typography/Heading/Heading';
import './sidebar-first-level.scss';

export const variant_options = {
  default: '',
  selected: 'selected',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const SidebarFirstLevel = ({
  mode, active, text, variant, ...props
}) => (
  <div className={cls('sidebar_item', variant_options[`${variant}`])} {...props}>
    <Heading type="6" label={text} />
  </div>
);

SidebarFirstLevel.defaultProps = {
  variant: 'default',
};
