import React from 'react';
import './buttons.scss';

export const variant_options1 = {
  primary: 'primary',
  secondary: 'secondary',
};

export const variant_options2 = {
  disabled: 'disabled',
  default: ' ',
};

export const variant_options3 = {
  arrow: 'arrow',
  no_arrow: 'without-arrow',
};

export const CtaButton = ({
  label1, label2, variant, state, for_primary,
}) => (
  <>
    {variant === 'primary'
      ? (
        <a className={['button', `button-${variant_options1[`${variant}`]}`, ` button-${variant_options3[`${for_primary}`]}`, `${variant_options2[`${state}`]}`].join(' ')}>
          {label1}
        </a>
      )
      : (
        <a className={['button', `button-${variant_options1[`${variant}`]}`, `${variant_options2[`${state}`]}`].join(' ')}>
          {label2}
        </a>
      )}
  </>
);

CtaButton.defaultProps = {
  variant: 'primary',
  state: 'default',
  for_primary: 'Arrow',
};
