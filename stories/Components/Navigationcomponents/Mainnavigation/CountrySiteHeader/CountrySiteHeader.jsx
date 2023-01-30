import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { getMegaMenu } from '../../../../assets/js/navigation-data';
import { navigationInitialize } from '../../../../assets/js/navigation';
// import { desktopView } from '../../../../assets/js/undp';
import { Logo } from '../../../../Atom/Logo/Logo';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/LanguageSwitcher/LanguageSwitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './country-site-header.scss';
import '../../../../assets/scss/_grid.scss';
import '../../../../assets/js/lazyload';

function CountrySiteHeader({
  languageswitcherData,
  navigationData,
  locale,
  backcaption,
  locationData,
  langSelect,
  siteTitleData,
}) {
  useEffect(() => {
    getMegaMenu(locale);
    navigationInitialize(locale);
  }, [locale]);

  return (
    <header className="country-header country-load-animation">
      <section className="header">
        <div className="grid-container fluid">
          <div className="grid-x grid-margin-x align-content-middle">
            <div className="cell large-9 small-8 align-self-middle top-left">
              <a href="#" className="logo" tabIndex="0" title="UNDP Logo homepage link">
                <Logo src={pnud} alt="UNDP Logo" />
              </a>
              <div className="site-title">
                {!!siteTitleData.label && (
                  <span><a href="#" className="site-title--label" title="UNDP homepage link">{siteTitleData.label}</a></span>
                )}
                <span><a href="#" className="site-title--span" title="UNDP homepage link">{siteTitleData.span}</a></span>
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
}

export default CountrySiteHeader;
