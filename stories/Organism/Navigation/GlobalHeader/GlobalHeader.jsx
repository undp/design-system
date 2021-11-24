import React, { useEffect } from 'react';
import pnud from '../../../assets/images/logo.svg';
import { init } from '../../../assets/js/navigation';
import { IconsGlobe } from '../../../Atom/Global/Icons/globe';
import { IconsBar } from '../../../Atom/Global/Icons/icon_bar';
import { IconsTimesBlue } from '../../../Atom/Global/Icons/icon_Times_Blue';
import { IconsSearch } from '../../../Atom/Global/Icons/search';
import { Logo } from '../../../Atom/Global/Logo/logo';
import { Languageswitcher } from '../../../Molecules/Navbar/Languageswitcher/Languageswitcher';
import { Menu } from '../../../Molecules/Navbar/Menu/Menu';
import MegaMenu from '../MegaMenu/MegaMenu';
import './GlobalHeader.scss';
import MobileNav from '../MobileNav/MobileNav';

const GlobalHeader = ({
  text, languageswitcherData, navigationData, rightNavigationData, leftNavigationData, locale,
  backcaption, locationData, langSelect
}) => {
  useEffect(() => {

    init(locale);
  }, [locale]);

  return (
    <header className="global-header">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-content-middle">
          <div className="cell large-2 small-2 align-self-middle top-left">
            <Languageswitcher
              data={languageswitcherData.languagedata}
              headerText={languageswitcherData.headerText}
            />
            <IconsBar />
            <IconsTimesBlue />
          </div>
          <div className="cell large-8 small-8 mid-nav">
            {
              window.innerWidth > 1439 &&
              <Menu data={leftNavigationData} />
            }
            <a href="#" className="middle-logo"><Logo src={pnud} alt="UNDP Logo" /></a>
            {
              window.innerWidth > 1439 &&
              <Menu data={rightNavigationData} />
            }
          </div>
          <div className="cell large-2 small-2 top-right">
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

export default GlobalHeader;
