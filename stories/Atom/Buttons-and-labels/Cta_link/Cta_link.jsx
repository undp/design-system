import React from 'react';
import './cta_link.scss';

export const variant_options = {
  Arrow: 'arrow',
  Space: 'space',
};

export const Ctalink = ({ label, ...args }) => {
  return (
    <a className={["cta__link", `cta--${variant_options[`${args.variant}`]}`].join(' ')} href="#">
      {label}
         {args.variant === 'Arrow' ?
          <>
            <div className='arrow-expand'></div>
          </>
          :
          <>
            <div className='icon-chevron-right'></div>
          </>
        }
    </a>
  );
};

Ctalink.defaultProps = {
  variant: 'Arrow',
};
