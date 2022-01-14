import React from 'react';
import './cta_link.scss';

export const Ctalink = ({ label, Type, ...args }) => {
  let type = 'arrow';
  if (Type == 'Space') {
    type = 'space';
  }

  return (
    <a className={['cta__link', `cta--${type}`].join(' ')} href="#" role="link">
      {label}
    </a>
  );
};
