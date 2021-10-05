import React from 'react';
import './footerCondition2.scss';

export const FooterConditions2 = ({ style, text, footerdata2, ...args }) => {
  return (
    <ul className={['footer__condition_text',`footer__condition_text--${args.variant}`].join(' ')}>
      {footerdata2.map(function(item, index) {
      return (
        <li key= {index}><a href="#">{item.text}</a></li>
      )})}
    </ul>
  );
};

FooterConditions2.defaultProps = {
  variant: 'black',
};
