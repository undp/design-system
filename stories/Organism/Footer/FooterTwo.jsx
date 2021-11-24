import React, { useEffect } from 'react';
import './footer.scss';
import { FooterLogo } from '../../Molecules/FooterNavigation/FooterLogo/FooterLogo';
import { FooterConditions2 } from '../../Molecules/FooterNavigation/FooterConditions2/FooterConditions2';
import { FooterIcons } from '../../Molecules/FooterNavigation/FooterIcons/FooterIcons';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';

export const Footertwo = ({
  headerText, headerText2, style, alt, src, srctwo, element, type, required, mode, label, button, errorText, placeholder, menutitle, copyright, data, menudata, ...args
}) => (
  <footer className={['footer', `${args.color}`].join(' ')}>
    <div className="grid-x">
      <div className="cell medium-10 footer__wrapper">
        <div className="grid-x footer-head two">
          <div className="cell medium-5">
            {args.color === 'default' ? (
              <FooterLogo src={src} headerText={headerText} headerText2={headerText2} alt={alt} style={args.color} />
            ) : (
              <FooterLogo src={srctwo} headerText={headerText} headerText2={headerText2} alt={alt} style={args.color} />
            )}
          </div>
          <div className="cell medium-5 show-large">
            <FooterIcons variant={args.color} />
          </div>
        </div>
        <div className="footer-bottom two">
          <div className="copyright">
            <P label={copyright} />
          </div>
          <div className="menus">
            <FooterConditions2 footerdata2={menudata} variant={args.color} />
            <div className="show-small">
              <FooterIcons variant={args.color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footertwo.defaultProps = {
  color: 'default',
};
