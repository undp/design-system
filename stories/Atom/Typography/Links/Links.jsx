import React from 'react';

export const variant_options = {
  default: '',

};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Link({ label, ...args }) {
  let variant_link = variant_options[`${args.variant}`];
  return (
    <a href="#" title={label} className={cls(`${variant_link}`)}>
      { label }
    </a>
  );
}

Link.defaultProps = {
  variant: 'default',
};
