import React from 'react';
import './footerCondition2.scss';

export const FooterConditions2 = ({
  style, text, footerdata2, ...args
}) => (
  <ul className={['footer__condition_text', `${args.variant}`].join(' ')}>
    {footerdata2.map((item, index) => (
      <li key={index}><a href="#">{item.menu}</a></li>
    ))}
  </ul>
);

FooterConditions2.defaultProps = {
  variant: 'black',
};
