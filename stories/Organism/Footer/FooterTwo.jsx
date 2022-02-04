import React from 'react';
import './footer.scss';
import { FooterLogo } from '../../Molecules/FooterNavigation/FooterLogo/FooterLogo';
import { FooterConditions2 } from '../../Molecules/FooterNavigation/FooterConditions2/FooterConditions2';
import { FooterIcons } from '../../Molecules/FooterNavigation/FooterIcons/FooterIcons';
import { P } from '../../Atom/Base-Typography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Footertwo = ({
  headerText, headerText2, style, alt, src, srctwo, logolink, element, type, required, mode, label, button, errorText, placeholder, menutitle, copyright, data, menudata, ...args
}) => (
  <footer className={cls('footer', `${args.color === 'inverted' ? args.color : ''}`)}>
    <div className="grid-x">
      <div className="cell medium-10 medium-offset-1">
        <div className="grid-x footer-top">
          <div className="cell medium-5">
            {args.color === 'default' ? (
              <FooterLogo src={srctwo} headerText={headerText} headerText2={headerText2} alt={alt} logolink={logolink} style="" />
            ) : (
              <FooterLogo src={src} headerText={headerText} headerText2={headerText2} alt={alt} logolink={logolink} style={args.color} />
            )}
          </div>
          <div className="cell medium-5 show-large">
            <FooterIcons variant={args.color === 'default' ? args.color : 'inverted'} />
          </div>
        </div>
        <div className="grid-x footer-bottom">
          <div className="cell medium-5">
            <P label={copyright} tabIndex="0" />
          </div>
          <div className="cell medium-6">
            <FooterConditions2 footerdata2={menudata} variant={args.color === 'default' ? args.color : 'inverted'} />
            <div className="show-small">
              <FooterIcons variant={args.color === 'default' ? args.color : 'inverted'} />
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
