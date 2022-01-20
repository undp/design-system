import React from 'react';
import './cta_link.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Ctalink = ({ label, Type, ...args }) => {
  let type = 'arrow';
  if (Type == 'Space') {
    type = 'space';
  }

  return (
    <>
      {`${args.button_option}` === 'span'
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
