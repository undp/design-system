import React, { useEffect } from 'react';
import './footerLists.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Link } from '../../../Atom/Typography/Links/link';

export const variant_options = {
  default: '',
  inverted: 'inverted',
};

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const FooterLists = ({
  type, headerText, text, style, data, ...args
}) => (
  <div className={cls('cell', 'medium-2', 'footer__items', `${variant_options[`${args.variant}`]}`)}>
    <Heading type="6" label={headerText} className="footer__heading" tabIndex="0"/>
    <div className="footer__panel">
      {data.map((item, index) => (
        <Link key={index} label={item.text} />
      ))}
    </div>
  </div>
);

FooterLists.defaultProps = {
  variant: 'default',
};
