import React from 'react';
import './footerIcons.scss';

export const FooterIcons = ({ ...args}) => {
  return (
    <ul className={["footer__icons", `footer__icons--${args.variant}`].join(" ")}>
      <li><a href="#" className="facebook"></a></li>
      <li><a href="#" className="linkedIn"></a></li>
      <li><a href="#" className="instragram"></a></li>
      <li><a href="#" className="twitter"></a></li>
      <li><a href="#" className="youtube"></a></li>
    </ul>
  );
};

FooterIcons.defaultProps = {
  variant: 'black',
};
