import React from 'react';
import './footerCondition.scss';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const FooterConditions = ({ style, footerdata, ...args }) => (
  <ul className={cls('footer__condition', `${variant_options[`${args.variant}`]}`)}>
    {footerdata.map((item, index) => (
      <li key={index}><a href="#">{item.menu}</a></li>
    ))}
  </ul>
);

FooterConditions.defaultProps = {
  variant: 'default',
};
