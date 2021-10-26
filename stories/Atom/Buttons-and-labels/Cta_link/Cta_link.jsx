import React from 'react';
import './cta_link.scss';

export const variant_options = {
  Arrow: 'arrow',
  Space: 'space',
};

export const Ctalink = ({ label, ...args }) => (
  <a className={['cta__link', `cta--${variant_options[`${args.variant}`]}`].join(' ')} href="#">
    {label}
  </a>
);

Ctalink.defaultProps = {
  variant: 'Arrow',
};
