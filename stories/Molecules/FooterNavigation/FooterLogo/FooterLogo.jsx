import React from 'react';
import './footerLogo.scss';
import { Logo } from '../../../Atom/Logo/logo';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const FooterLogo = ({
  src, headerText, style, alt,
}) => (
  <div className={['cell medium-5', 'footer__logo', `${style}`].join(' ')}>
    <Logo src={src} alt={alt} />
    <Heading type="5" label={headerText} />
  </div>
);
