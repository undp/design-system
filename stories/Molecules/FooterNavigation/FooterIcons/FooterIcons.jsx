import React from 'react';
import './footerIcons.scss';

export const FooterIcons = ({ ...args }) => (
   <ul className={['footer__icons', `${args.variant==='black'?'':args.variant}`].join(' ')}>
    <li><a href="#" className="facebook">facebook</a></li>
    <li><a href="#" className="linkedin">linkedIn</a></li>
    <li><a href="#" className="instragram">instragram</a></li>
    <li><a href="#" className="twitter">twitter</a></li>
    <li><a href="#" className="youtube">youtube</a></li>
  </ul>
);
