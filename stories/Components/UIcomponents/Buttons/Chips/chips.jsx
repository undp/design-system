import React from 'react';
import './chips.scss';

export const variant_options = {
  Without_Cross: 'no-cross',
  Cross: 'cross',
};

export const Chips = ({ label, ...args }) => (
  <a className={['chips', `chips__${variant_options[`${args.variant}`]}`].join(' ')} href="#">
    {label}
  </a>
);

Chips.defaultProps = {
  variant: 'Without_Cross',
};
