import React from 'react';
import './chips.scss';

export const Chips = ({ label, Type }) => {
  return (
    <a className={['chip', `${(Type == 'With X' ? ' chip__cross' :'')}`].join('')} href="#" role="button">
      {label}
    </a>
  );
};
