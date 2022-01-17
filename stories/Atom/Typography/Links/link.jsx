import React from 'react';
import './link.scss';

export const variant_options = {
  default: '',
  animated: 'animated-link',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Link = ({ label, ...args }) => {
  let variant_link = variant_options[`${args.variant}`];
  return (
    <a href="#" title={label} className={cls(`${variant_link}`)}>
      { label }
    </a>
  );
};

Link.defaultProps = {
  variant: 'default',
};
