import React from 'react';
import './buttons.scss';

export const variant_options1 = {
  Primary: "primary",
  Secondary: "secondary",
};

export const variant_options2 = {
  Disabled: "disabled",
  Default: " ",
};

export const variant_options3 = {
  Arrow: "arrow",
  No_arrow: "no-arrow",
};

export const CtaButton = ({ label1, label2, variant, state, For_Primary }) => {
  return (
    <>
      {variant === 'Primary' ?
        <a className={["button", `button--${variant_options1[`${variant}`]}`, ` button--${variant_options3[`${For_Primary}`]}`, `${variant_options2[`${state}`]}`].join(" ")}>
          {label1}
        </a>
        :
        <a className={["button", `button--${variant_options1[`${variant}`]}`, `${variant_options2[`${state}`]}`].join(" ")}>
          {label2}
        </a>
      }
    </>
  );
};

CtaButton.defaultProps = {
  variant: "Primary",
  state: "Default",
  For_Primary: "Arrow",
};
