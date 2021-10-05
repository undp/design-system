import React from 'react';
import './footerLogo.scss';
import { Logo } from '../../../Atom/Global/Logo/logo';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const FooterLogo = ({ src, headerText, headerText2, style, alt }) => {
  return (
    <div className={['footer__logo',`footer__logo--${style}`].join(' ')}>
      <Logo src={src} alt={alt}/>
      <div class="footer__logo_name">
        <Heading type='5' label={headerText} />
        <Heading type='5' label={headerText2} />
      </div>
   </div>
  );
};
