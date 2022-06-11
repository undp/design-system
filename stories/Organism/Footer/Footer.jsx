import React, { useEffect } from 'react';
import './footer.scss';
import '../../assets/scss/_grid.scss';
import { FooterLogo } from '../../Molecules/FooterNavigation/FooterLogo/FooterLogo';
import { SignUp } from '../../Components/Forms/NewsLetterSignUp/NewsLetterSignUp';
import { FooterLists } from '../../Molecules/FooterNavigation/FooterLists/FooterLists';
import { FooterConditions } from '../../Molecules/FooterNavigation/FooterConditions/FooterConditions';
import { FooterConditions2 } from '../../Molecules/FooterNavigation/FooterConditions2/FooterConditions2';
import { FooterIcons } from '../../Molecules/FooterNavigation/FooterIcons/FooterIcons';
import { P } from '../../Atom/BaseTypography/Paragraph/Paragraph';
import { accordion } from '../../assets/js/accordion';
import { Icons } from '../../Atom/Icons/Icons';
import IconsGlobe from '../../assets/icons/globe.svg';
import IconsGlobeWhite from '../../assets/icons/globe-white.svg';
import IconsSearch from '../../assets/icons/search.svg';
import IconsSearchWhite from '../../assets/icons/search-white.svg';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Footer({
  headerText, headerText2, style, alt, src, srctwo, logolink, element, type, required, mode, label, button, errorText, placeholder, menutitle, copyright, data, menudata, variant, ...args
}) {
  useEffect(() => {
    accordion('[data-accordion="mobile"]', '.footer-panel', 'active');
  }, []);
  return (
    <>
      {variant === 'default' && (
      <footer className={cls('footer', `${args.color === 'inverted' ? args.color : ''}`)}>
        <div className="grid-x">
          <div className="cell medium-10 medium-offset-1">
            <div className="grid-x footer-head">
              <div className="cell medium-5">
                {args.color === 'default' ? (
                  <FooterLogo src={srctwo} headerText={headerText} alt={alt} logolink={logolink} style="" />
                ) : (
                  <FooterLogo src={src} headerText={headerText} alt={alt} logolink={logolink} style={args.color} />
                )}
              </div>
              <div className="cell medium-4">
                <SignUp element={element} type={type} required={required} mode={mode} label={label} button={button} errorText={errorText} placeholder={placeholder} variant={args.color === 'default' ? args.color : 'inverted'} />
              </div>
            </div>
            <div className="grid-x grid-margin-x" data-accordion="mobile">
              <FooterLists data={data} headerText={menutitle} ariacontrol="footer-panel-1" arialabel="footer-item-1" variant={args.color === 'default' ? args.color : 'inverted'} />
              <FooterLists data={data} headerText={menutitle} ariacontrol="footer-panel-2" arialabel="footer-item-2" variant={args.color === 'default' ? args.color : 'inverted'} />
              <FooterLists data={data} headerText={menutitle} ariacontrol="footer-panel-3" arialabel="footer-item-3" variant={args.color === 'default' ? args.color : 'inverted'} />
              <FooterLists data={data} headerText={menutitle} ariacontrol="footer-panel-4" arialabel="footer-item-4" variant={args.color === 'default' ? args.color : 'inverted'} />
              <div className="cell medium-4">
                <div className="icons-search">
                  {args.color === 'default' ? (
                    <>
                      <span className="icon-globe">
                      <Icons src={IconsGlobeWhite} alt="icon-global" />
                    </span>
                      <span className="icon-search">
                      <Icons src={IconsSearchWhite} alt="icon-search" />
                    </span>
                    </>
                  ) : (
                    <>
                    <span className="icon-globe">
                       <Icons src={IconsGlobe} alt="icon-global" />
                     </span>
                    <span className="icon-search">
                       <Icons src={IconsSearch} alt="icon-search" />
                     </span>
                  </>
                  )}

                </div>
                <FooterConditions footerdata={menudata} variant={args.color === 'default' ? args.color : 'inverted'} />
                <FooterIcons variant={args.color === 'default' ? args.color : 'inverted'} />
              </div>
            </div>
            <div className="footer-copyright">
              <P label={copyright} tabIndex="0" />
            </div>
          </div>
        </div>
      </footer>
      )}

      {variant === 'simple' && (
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
      )}

    </>
  );
}

Footer.defaultProps = {
  color: 'default',
  variant: 'default',
};
