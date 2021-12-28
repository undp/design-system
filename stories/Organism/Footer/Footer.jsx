import React, { useEffect } from 'react';
import './footer.scss';
import { FooterLogo } from '../../Molecules/FooterNavigation/FooterLogo/FooterLogo';
import { SignUp } from '../../Components/Forms/Newslettersignup/SignUp';
import { FooterLists } from '../../Molecules/FooterNavigation/FooterLists/FooterLists';
import { FooterConditions } from '../../Molecules/FooterNavigation/FooterConditions/FooterConditions';
import { FooterIcons } from '../../Molecules/FooterNavigation/FooterIcons/FooterIcons';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { accordion } from '../../assets/js/accordion_custom';

export const Footer = ({
  headerText, headerText2, style, alt, src, srctwo, element, type, required, mode, label, button, errorText, placeholder, menutitle, copyright, data, menudata, ...args
}) => {
  useEffect(() => {
    accordion('.footer__heading', '.footer__panel', 'active');
  }, []);
  return (
    <footer className={['footer', `${args.color === 'blue' ? args.color : ''}`].join(' ')}>
      <div className="grid-x">
        <div className="cell medium-10 footer__wrapper">
          <div className="grid-x footer-head">
            {args.color === 'default' ? (
              <FooterLogo src={src} headerText={headerText} alt={alt} style="" />
            ) : (
              <FooterLogo src={srctwo} headerText={headerText} alt={alt} style={args.color} />
            )}
            <div className="cell medium-4 footer__newsletter">
              <SignUp
                element={element}
                type={type}
                required={required}
                mode={mode}
                label={label}
                button={button}
                errorText={errorText}
                placeholder={placeholder}
                variant={args.color === 'blue' ? args.color : ''}
              />
            </div>
          </div>
          <div className=" grid-x grid-margin-x footer-bottom">
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'blue' ? args.color : ''} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'blue' ? args.color : ''} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'blue' ? args.color : ''} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'blue' ? args.color : ''} />
            <div className="cell medium-4">
              <FooterConditions footerdata={menudata} variant={args.color === 'blue' ? args.color : ''} />
              <FooterIcons variant={args.color === 'blue' ? args.color : ''} />
            </div>
          </div>
          <div className="footer__foot">
            <P label={copyright} />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  color: 'default',
};
