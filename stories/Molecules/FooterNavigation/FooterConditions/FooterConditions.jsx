import React from 'react';
import './footerCondition.scss';

export const FooterConditions = ({ style, footerdata, ...args }) => (
  <ul className={['footer__condition', `footer__condition--${args.variant}`].join(' ')}>
    {footerdata.map((item, index) => (
      <li key={index}><a href="#">{item.text}</a></li>
    ))}
  </ul>
);

FooterConditions.defaultProps = {
  variant: 'black',
};
