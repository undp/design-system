import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { desktopView } from '../../../../assets/js/undp';
import { Icons } from '../../../../Atom/Icons/Icons';
import IconsGlobe from '../../../../assets/icons/Globe.svg';
import IconsSearch from '../../../../assets/icons/Search.svg';
import { Logo } from '../../../../Atom/Logo/logo';
import { Languageswitcher } from '../../../UIcomponents/Languageswitcher/Languageswitcher';
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
    <header className="global-header">
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
              <nav className="menu" role="navigation" arialabel="Navigation">
                {desktopView && <Menu data={leftNavigationData} isGHeader={true} />}
                <a href="#" className="logo">
                  <Logo src={pnud} alt="UNDP Logo" />
                </a>
                {desktopView && <Menu data={rightNavigationData} isGHeader={true}/>}
              </nav>
            </div>
            <div className="cell large-2 small-2 top-right">
              <button className="icon-globe">
                <Icons src={IconsGlobe} alt="icon-global" />
              </button>
              <button className="icon-search">
                <Icons src={IconsSearch} alt="icon-search" />
              </button>
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
