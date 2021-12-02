import React from 'react';
import './chips.scss';

export const variant_options = {
  Without_X: 'no-cross',
  With_X: 'cross',
};

export const Chips = ({ label, ...args }) => (
  <a className={['chips', `chips__${variant_options[`${args.Type}`]}`].join(' ')} href="#">
    {label}
  </a>
);

