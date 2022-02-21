import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { desktopView } from '../../../../assets/js/undp';
import { Logo } from '../../../../Atom/Logo/Logo';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/LanguageSwitcher/LanguageSwitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './country-site-header.scss';
import '../../../../assets/js/lazyload.js';

const CountrySiteHeader = ({
  languageswitcherData,
  navigationData,
  locale,
  backcaption,
  locationData,
  langSelect,
  siteTitleData,
}) => {
  useEffect(() => {
    navigationInitialize(locale);
  }, [locale]);

  return (
    <header className="country-header country-load-animation">
      <section className="header">
        <div className="grid-container fluid">
          <div className="grid-x grid-margin-x align-content-middle">
            <div className="cell large-9 small-9 align-self-middle top-left">
              <a href="https://develop.design-system.pages.dev/iframe?id=components-navigation-components-main-navigation-global-header--global-header&globals=locale:english&args=&viewMode=story" className="logo" tabIndex="0">
                <Logo src={pnud} alt="UNDP Logo" />
              </a>
              <div className="site-title">
                <span>{siteTitleData.label}</span>
                <span>{siteTitleData.span}</span>
              </div>
              <Menu data={navigationData} />
            </div>
            <div className="cell large-3 small-3 top-right">
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
              <button className="icon-globe">Global</button>
              <button className="icon-search">Search</button>
            </div>
            <MobileNav
              navigationData={navigationData}
              languageswitcherData={languageswitcherData}
              locationData={locationData}
              backcaption={backcaption}
              langSelect={langSelect}
              text="Mobile Nav"
            />
          </div>
        </div>
      </section>
      <div className="mega-wrapper">
        <MegaMenu />
      </div>
    </header>
  );
};

export default CountrySiteHeader;
