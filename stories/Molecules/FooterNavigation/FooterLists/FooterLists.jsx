import React, { useEffect } from 'react';
import './footerLists.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Link } from '../../../Atom/Typography/Links/link';

export const FooterLists = ({
  type, headerText, text, style, data, ...args
}) => (
  <div className={['cell', 'medium-2', 'footer__items', `${args.variant}`].join(' ')}>
    <Heading type="6" label={headerText} className="footer__heading" />
    <div className="footer__panel">
      {data.map((item, index) => (
        <Link key={index} label={item.text} />
      ))}
    </div>
  </div>
);

FooterLists.defaultProps = {
  variant: 'black',
};
