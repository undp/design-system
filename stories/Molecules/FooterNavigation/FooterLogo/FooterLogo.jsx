import React from 'react';
import { Logo } from '../../../Atom/Logo/Logo';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function FooterLogo({
  src, headerText, style, alt, logolink,
}) {
  return (
    <div className={cls('footer-logo', `${style}`)}>
      <a href={logolink}>
        <Logo src={src} alt={alt} />
      </a>
      {headerText && (
        <Heading type="5" label={headerText} tabIndex="0" />
      )}
    </div>
  );
}
