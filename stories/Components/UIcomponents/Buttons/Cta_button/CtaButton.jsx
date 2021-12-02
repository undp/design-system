import React from 'react';
import './buttons.scss';

export const variant_options1 = {
  primary: 'primary',
  secondary: 'secondary',
};

export const variant_options2 = {
  Active: ' ',
  Disabled: 'disabled',
};

export const variant_options3 = {
  arrow: 'arrow',
  no_arrow: 'without-arrow',
};

export const CtaButton = ({
  label1, label2, Type, State, For_Primary,
}) => (
  <>
    {Type === 'Primary'
      ? (
        <a className={['button', `button--${variant_options1[`${Type}`]}`, ` button--${variant_options3[`${For_Primary}`]}`, `${variant_options2[`${State}`]}`].join(' ')}>
          {label1}
        </a>
      )
      : (
        <a className={['button', `button--${variant_options1[`${Type}`]}`, `${variant_options2[`${State}`]}`].join(' ')}>
          {label2}
        </a>
      )}
  </>
);
