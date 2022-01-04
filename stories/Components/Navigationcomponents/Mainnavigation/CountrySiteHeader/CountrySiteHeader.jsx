import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { desktopView } from '../../../../assets/js/undp';
import { IconsGlobe } from '../../../../Atom/Icons/globe';
import { IconsBar } from '../../../../Atom/Icons/icon_bar';
import { IconsTimesBlue } from '../../../../Atom/Icons/icon_Times_Blue';
import { IconsSearch } from '../../../../Atom/Icons/search';
import { Logo } from '../../../../Atom/Logo/logo';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/Languageswitcher/Languageswitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import './CountrySiteHeader.scss';

const CountrySiteHeader = ({
  languageswitcherData, navigationData, locale, backcaption, locationData, langSelect, siteTitleData,
}) => {
  useEffect(() => {
    navigationInitialize(locale);
  }, [locale]);

  return (
    <header className="country-header">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-content-middle">
          <div className="cell large-3 small-7 align-self-middle top-left">
            <a href="#" className="logo"><Logo src={pnud} alt="UNDP Logo" /></a>
            <div className="site-title">
              <label>{siteTitleData.label}</label>
              <span>{siteTitleData.span}</span>
            </div>
          </div>
          <div className="cell large-6 small-1 mid-nav">
            {desktopView && <Menu data={navigationData} />}
          </div>
          <div className="cell large-3 small-4 top-right">
            <Languageswitcher
              data={languageswitcherData.languagedata}
              headerText={languageswitcherData.headerText}
            />
            <button className='menu-hamburger'>
              <span class="hamburger-line line-top"></span>
              <span class="hamburger-line line-middle"></span>
              <span class="hamburger-line line-bottom"></span>
              Nav toggle
            </button>
            <IconsGlobe />
            <IconsSearch />
          </div>
          <div className="mega-wrapper cell large-12">
            <MegaMenu />
          </div>
          {
                !desktopView
                && (
                <MobileNav navigationData={navigationData}
                  languageswitcherData={languageswitcherData}
                  locationData={locationData}
                  backcaption={backcaption}
                  langSelect={langSelect}
                  text="Mobile Nav"
                />
                )
              }
        </div>
      </div>
    </header>
  );
};

export default CountrySiteHeader;
