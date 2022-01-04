import React from 'react';
import './footerLogo.scss';
import { Logo } from '../../../Atom/Logo/logo';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

const cls = (...classes) => classes.filter(Boolean).join(' ');
export const FooterLogo = ({
  src, headerText, style, alt, logolink,
}) => (
  <div className={cls('cell', 'medium-5', 'footer__logo', `${style}`)}>
    <a href={logolink}>
      <Logo src={src} alt={alt} />
    </a>
    <Heading type="5" label={headerText} />
  </div>
);
