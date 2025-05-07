import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { getMegaMenu } from '../../../../assets/js/navigation-data';
import {
  navigationInitialize,
  navigationMultiLevelEdgeDetection,
  navigationOverFlow,
} from '../../../../assets/js/navigation';
import { Logo } from '../../../../Atom/Logo/Logo';
import { CtaButton } from '../../../UIcomponents/Buttons/CtaButton/CtaButton';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/LanguageSwitcher/LanguageSwitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './country-site-header.scss';
import '../MobileNav/mobile-nav.scss';
import '../../../UIcomponents/Buttons/CtaLink/cta-link.scss';
import '../../../../assets/scss/_grid.scss';
import '../../../../assets/js/lazyload';
import '../../../../Utilities/FrostedImage/frosted-background.scss';
import menuJsonDefaultData from '../../../../assets/js/navigation-data.json';
import menuJsonDefaultExtendedData from '../../../../assets/js/navigation-extended-data.json';

function CountrySiteHeader({
  languageswitcherData,
  navigationData,
  locale,
  backcaption,
  locationData,
  langSelect,
  siteTitleData,
  ...args
}) {
  useEffect(() => {
    getMegaMenu(locale);
    navigationInitialize(locale);
    navigationOverFlow();
    navigationMultiLevelEdgeDetection();
  }, [locale, args.menu_type, args.menu_extended, args.cta_enabled]);

  const menuExtended = !(args.menu_extended === 'Off' || typeof (args.menu_extended) == 'undefined');
  const multiLevel = false;
  const locale_fixed = locale == 'en' ? 'english' : locale;

  let dataSource;
  let menuMobileData = navigationData;
  dataSource = menuExtended ? menuJsonDefaultExtendedData : menuJsonDefaultData;
  dataSource.forEach((source) => {
    if (source.language === locale_fixed && source.data.length > 0) {
      menuMobileData = source.data;
    }
  });

  let overflow = (args.menu_extended === 'On');
  args.overflow = overflow;

  return (
    <header className="country-header">
      <section className="header">
        <div className="grid-container fluid">
          <div className="grid-x grid-margin-x align-content-middle">
            <div className="cell small-8 large-2 shrink align-self-middle top-left">
              <a href="#" className="logo" tabIndex="0" title="UNDP Logo homepage link">
                <Logo src={pnud} alt="UNDP Logo" />
              </a>
              <div className="site-title">
                {!!siteTitleData.label && (
                  <span><a href="#" title="UNDP homepage link">{siteTitleData.label}</a></span>
                )}
                <span><a href="#" title="UNDP homepage link">{siteTitleData.span}</a></span>
              </div>
            </div>
            <div className="cell small-1 large-auto align-content-middle top-center">
              {!menuExtended && (
                <Menu data={menuJsonDefaultData} locale={locale} multilevel={multiLevel} overflow={overflow} {...args} />
              )}
              {menuExtended && (
                <Menu data={menuJsonDefaultExtendedData} locale={locale} multilevel={multiLevel} overflow={overflow} {...args} />
              )}
            </div>
            <div className="cell small-3 large-auto top-right">
              <button className="icon-search">Search</button>
              <button className="icon-globe">Global</button>
              {args.cta_enabled == 'On' && (
                <CtaButton
                  label="Donate"
                  href="#"
                  Icon="No Arrow"
                  Type="Primary"
                />
              )}
              <Languageswitcher
                data={languageswitcherData.languagedata}
                headerText={languageswitcherData.headerText}
              />
              <button className="menu-hamburger" aria-label="menu-icon">
                <span className="hamburger-line line-top" />
                <span className="hamburger-line line-middle" />
                <span className="hamburger-line line-bottom" />
                Nav toggle
              </button>
            </div>
            {args.menu_extended == 'On' && (
              <div className="grid-container full menu__overflow__container hidden">
                <ul className="overflow" />
              </div>
            )}
            <MobileNav
              navigationData={menuMobileData}
              languageswitcherData={languageswitcherData}
              locationData={locationData}
              backcaption={backcaption}
              langSelect={langSelect}
              text="Mobile Nav"
              {...args}
            />
          </div>
        </div>

      </section>
      <div className="mega-wrapper">
        <MegaMenu locale={locale} />
      </div>
    </header>
  );
}

export default CountrySiteHeader;
