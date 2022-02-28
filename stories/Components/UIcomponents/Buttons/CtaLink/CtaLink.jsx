import React from 'react';
import './cta-link.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Ctalink = ({ label, Type, ...args }) => {
  let type = 'arrow';
  if (Type == 'Space') {
    type = 'space';
  }
  let button_type = (args.button_option) ? args.button_option.toLowerCase() : '';

  return (
    <>
      {`${button_type}` === 'span' || `${button_type}` === 'inline'
      ? (
        <span className={cls('cta__link', `cta--${type}`)}>
          {label} <i/>
        </span>
      )
      : (
        <a className={cls('cta__link', `cta--${type}`)} href="#">
          {label} <i/>
        </a>
      )}
    </>
  );
};
