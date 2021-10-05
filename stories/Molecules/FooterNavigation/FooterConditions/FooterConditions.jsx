import React from 'react';
import './footerCondition.scss';

export const FooterConditions = ({ style, footerdata, ...args }) => {
  return (
    <ul className={['footer__condition',`footer__condition--${args.variant}`].join(' ')}>
    {footerdata.map(function(item, index) {
      return (
        <li key= {index}><a href="#">{item.text}</a></li>
      )})}
    </ul>
  );
};

FooterConditions.defaultProps = {
  variant: 'black',
};
