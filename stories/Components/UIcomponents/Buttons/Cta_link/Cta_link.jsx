import React from 'react';
import './cta_link.scss';

export const variant_options = {
  Expanding_arrow: 'arrow',
  Space: 'space',
};

export const Ctalink = ({ label, ...args }) => (
  <a className={['cta__link', `cta--${variant_options[`${args.Type}`]}`].join(' ')} href="#">
    {label}
  </a>
);

