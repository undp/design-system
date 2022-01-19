import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { desktopView } from '../../../../assets/js/undp';
import { Icons } from '../../../../Atom/Icons/Icons';
import IconsGlobe from '../../../../assets/icons/Globe.svg';
import IconsSearch from '../../../../assets/icons/Search.svg';
import { Logo } from '../../../../Atom/Logo/logo';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/Languageswitcher/Languageswitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './CountrySiteHeader.scss';

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
    <header className="country-header">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-content-middle">
          <div className="cell large-9 small-8 align-self-middle top-left">
            <a href="#" className="logo" tabIndex="0">
              <Logo src={pnud} alt="UNDP Logo" />
            </a>
            <div className="site-title">
              <span>{siteTitleData.label}</span>
              <span>{siteTitleData.span}</span>
            </div>
            {desktopView && <Menu data={navigationData} />}
          </div>
          <div className="cell large-3 small-4 top-right">
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
            <button className="icon-globe">
              <Icons src={IconsGlobe} alt="icon-global" />
            </button>
            <button className="icon-search">
              <Icons src={IconsSearch} alt="icon-search" />
            </button>
          </div>
          <div className="mega-wrapper cell large-12">
            <MegaMenu />
          </div>
          {!desktopView && (
            <MobileNav
              navigationData={navigationData}
              languageswitcherData={languageswitcherData}
              locationData={locationData}
              backcaption={backcaption}
              langSelect={langSelect}
              text="Mobile Nav"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default CountrySiteHeader;
