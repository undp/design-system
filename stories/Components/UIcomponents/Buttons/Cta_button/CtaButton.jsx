import React from 'react';
import './buttons.scss';

export const CtaButton = ({
  label, Type, State, For_Primary, ...props
}) => {
  const type = (Type == 'Secondary') ? 'secondary' : 'primary';
  const state = (State == 'Disabled') ? 'disabled' : '';
  const for_primary = (For_Primary == 'No Arrow') ? 'without-arrow' : 'arrow';
  const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);
  return (
    <a {...(Type === 'Secondary' ? { className: cls('button', `button-${type}`, `${state}`) } : { className: cls('button', `button-${type}`, `button-${for_primary}`, `${state}`) })} role="button" href="#" {...props}>
      {label}
    </a>
  );
};
