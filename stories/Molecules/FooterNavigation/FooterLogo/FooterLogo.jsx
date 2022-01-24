import React from 'react';
import './footer-logo.scss';
import { Logo } from '../../../Atom/Logo/logo';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const FooterLogo = ({
  src, headerText, style, alt, logolink,
}) => (
  <div className={cls('footer-logo', `${style}`)}>
    <a href={logolink}>
      <Logo src={src} alt={alt} />
    </a>
    <Heading type="5" label={headerText} tabIndex="0" />
  </div>
);
