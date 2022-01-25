import React from 'react';
import './footer-condition.scss';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const FooterConditions = ({ style, footerdata, ...args }) => {
  let screen_variant = variant_options[`${args.variant}`];
  return (
    <ul className={cls('footer-links', `${screen_variant}`)}>
      {footerdata.map((item, index) => (
        <li key={index}><a href="#">{item.menu}</a></li>
      ))}
    </ul>
  );
};

FooterConditions.defaultProps = {
  variant: 'default',
};
