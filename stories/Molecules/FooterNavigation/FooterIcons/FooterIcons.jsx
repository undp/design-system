import React from 'react';
import './footerIcons.scss';

export const FooterIcons = ({ ...args }) => (
  <ul className={['footer__icons', `${args.variant}`].join(' ')}>
    <li><a href="#" className="facebook" /></li>
    <li><a href="#" className="linkedIn" /></li>
    <li><a href="#" className="instragram" /></li>
    <li><a href="#" className="twitter" /></li>
    <li><a href="#" className="youtube" /></li>
  </ul>
);

FooterIcons.defaultProps = {
  variant: 'black',
};
