import React, { useEffect } from 'react';
import './footer.scss';
import { FooterLogo } from '../../Molecules/FooterNavigation/FooterLogo/FooterLogo';
import { SignUp } from '../../Components/Forms/Newslettersignup/SignUp';
import { FooterLists } from '../../Molecules/FooterNavigation/FooterLists/FooterLists';
import { FooterConditions } from '../../Molecules/FooterNavigation/FooterConditions/FooterConditions';
import { FooterIcons } from '../../Molecules/FooterNavigation/FooterIcons/FooterIcons';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { footerAccordion } from '../../assets/js/footer_accordion';

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const Footer = ({
  headerText, headerText2, style, alt, src, srctwo, logolink, element, type, required, mode, label, button, errorText, placeholder, menutitle, copyright, data, menudata, ...args
}) => {
  useEffect(() => {
    footerAccordion('.footer__heading', '.footer__panel', 'active');
  }, []);
  return (
    <footer className={cls('footer', `${args.color === 'inverted' ? args.color : ''}`)}>
      <div className="grid-x">
        <div className="cell medium-10 footer__wrapper">
          <div className="grid-x footer-head">
            {args.color === 'default' ? (
              <FooterLogo src={srctwo} headerText={headerText} alt={alt} logolink={logolink} style="" />
            ) : (
              <FooterLogo src={src} headerText={headerText} alt={alt} logolink={logolink} style={args.color} />
            )}
            <div className="cell medium-4 footer__newsletter">
              <SignUp element={element} type={type} required={required} mode={mode} label={label} button={button} errorText={errorText} placeholder={placeholder} variant={args.color === 'default' ? args.color : 'inverted'}/>
            </div>
          </div>
          <div className=" grid-x grid-margin-x footer-bottom">
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'default' ? args.color : 'inverted'} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'default' ? args.color : 'inverted'} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'default' ? args.color : 'inverted'} />
            <FooterLists data={data} headerText={menutitle} variant={args.color === 'default' ? args.color : 'inverted'} />
            <div className="cell medium-4">
              <FooterConditions footerdata={menudata} variant={args.color === 'default' ? args.color : 'inverted'} />
              <FooterIcons variant={args.color === 'default' ? args.color : 'inverted'} />
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
