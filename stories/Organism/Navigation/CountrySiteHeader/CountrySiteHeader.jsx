import React, { useEffect } from 'react';
import pnud from '../../../assets/images/logo.svg';
import { IconsGlobe } from '../../../Atom/Global/Icons/globe';
import { IconsBar } from '../../../Atom/Global/Icons/icon_bar';
import { IconsTimesBlue } from '../../../Atom/Global/Icons/icon_Times_Blue';
import { IconsSearch } from '../../../Atom/Global/Icons/search';
import { Logo } from '../../../Atom/Global/Logo/logo';
import { Languageswitcher } from '../../../Molecules/Navbar/Languageswitcher/Languageswitcher';
import { Menu } from '../../../Molecules/Navbar/Menu/Menu';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';
import { init } from '../../../assets/js/navigation';

import './CountrySiteHeader.scss';

const CountrySiteHeader = ({
  text, languageswitcherData, navigationData, rightNavigationData, leftNavigationData, locale,
  backcaption, locationData, langSelect
}) => {
  useEffect(() => {
    init(locale);
  }, [locale]);

  return (
    <header className="country-header">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-content-middle">
          <div className="cell large-3 small-8 align-self-middle top-left">
            <a href="#" className="left-logo"><Logo src={pnud} alt="UNDP Logo" /></a>
            <div>
              <label>GLOBAL</label>
              <span>Site Title</span>
            </div>
          </div>
          <div className="cell large-6 small-8 mid-nav">
            {
              window.innerWidth > 1439 &&
              <Menu data={leftNavigationData} />
            }
          </div>
          <div className="cell large-3 small-4 top-right">
            <Languageswitcher
              data={languageswitcherData.languagedata}
              headerText={languageswitcherData.headerText}
            />
            <IconsBar />
            <IconsTimesBlue />
            <IconsGlobe />
            <IconsSearch />
          </div>
          <MegaMenu />
          {
              window.innerWidth < 1440 &&
          <MobileNav navigationData={navigationData} languageswitcherData={languageswitcherData}
            locationData={locationData} backcaption={backcaption} langSelect={langSelect} text="Mobile Nav" />
          }
        </div>
      </div>
    </header>
  );
};

export default CountrySiteHeader;
