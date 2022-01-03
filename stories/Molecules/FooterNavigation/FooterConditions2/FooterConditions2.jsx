import React from 'react';
import './footerCondition2.scss';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => classes.filter(Boolean).join(' ');
export const FooterConditions2 = ({
  style, text, footerdata2, ...args
}) => (
  <ul className={cls('footer__condition_text', `${variant_options[`${args.variant}`]}`)}>
    {footerdata2.map((item, index) => (
      <li key={index}><a href="#">{item.menu}</a></li>
    ))}
  </ul>
);

FooterConditions2.defaultProps = {
  variant: 'default',
};
