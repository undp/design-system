import React from 'react';
import './cta_link.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Ctalink = ({ label, Type, button_option, ...args }) => {
  let type = 'arrow';
  if (Type == 'Space') {
    type = 'space';
  }

  return (
    <>
      {button_option === 'link'
      ? (
        <a className={cls('cta__link', `cta--${type}`)} href="#" role="link">
          {label}
        </a>
      )
      : (
        <></>
      )}
      {button_option === 'span'
      ? (
        <span className={cls('cta__link', `cta--${type}`)}>
          {label}
        </span>
      )
      : (
        <></>
      )}
   </>
  );
};

Ctalink.defaultProps = {
  button_option: 'link',
};
