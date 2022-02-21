import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { desktopView } from '../../../../assets/js/undp';
import { Logo } from '../../../../Atom/Logo/Logo';
import { Languageswitcher } from '../../../UIcomponents/LanguageSwitcher/LanguageSwitcher';
import { Menu } from '../../Menu/Menu';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './global-header.scss';

const GlobalHeader = ({
  text,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  getMegaMenuData,
  locationData,
  langSelect,
  backcaption,
}) => {
  useEffect(() => {
    navigationInitialize(locale);
  }, [locale]);

  return (
    <header className="global-header global-load-animation">
      <section className="header">
        <div className="grid-container fluid">
          <div className="grid-x grid-margin-x align-content-middle">
            <div className="cell large-2 small-2 align-self-middle top-left">
              <Languageswitcher
                data={languageswitcherData.languagedata}
                headerText={languageswitcherData.headerText}
              />
              <button className="menu-icon menu-hamburger" aria-label="menu-icon">
                <span className="hamburger-line line-top" />
                <span className="hamburger-line line-middle" />
                <span className="hamburger-line line-bottom" />
                Nav toggle
              </button>
            </div>
            <div className="cell large-8 small-8 mid-nav">
              <nav className="menu" role="navigation" aria-label="navigation">
                <Menu data={leftNavigationData} isGHeader={true} />
                <a href="https://develop.design-system.pages.dev/iframe?id=components-navigation-components-main-navigation-country-header--country-header&globals=locale:english&args=&viewMode=story" className="logo">
                  <Logo src={pnud} alt="UNDP Logo" />
                </a>
                <Menu data={rightNavigationData} isGHeader={true}/>
              </nav>
            </div>
            <div className="cell large-2 small-2 top-right">
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

export default GlobalHeader;
