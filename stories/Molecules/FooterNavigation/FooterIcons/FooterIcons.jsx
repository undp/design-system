import React from 'react';
import './footerIcons.scss';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => classes.filter(Boolean).join(' ');
export const FooterIcons = ({ ...args }) => (
  <ul className={cls('footer__icons', `${variant_options[`${args.variant}`]}`)}>
    <li><a href="#" className="facebook" title="Facebook">facebook</a></li>
    <li><a href="#" className="linkedin" title="LinkedIn">linkedIn</a></li>
    <li><a href="#" className="instagram" title="Instagram">instagram</a></li>
    <li><a href="#" className="twitter" title="Twitter">twitter</a></li>
    <li><a href="#" className="youtube" title="Youtube">youtube</a></li>
  </ul>
);

FooterIcons.defaultProps = {
  variant: 'default',
};
