import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/logo.svg';
import { init } from '../../../../assets/js/navigation';
import { IconsGlobe } from '../../../../Atom/Icons/globe';
import { IconsBar } from '../../../../Atom/Icons/icon_bar';
import { IconsTimesBlue } from '../../../../Atom/Icons/icon_Times_Blue';
import { IconsSearch } from '../../../../Atom/Icons/search';
import { Logo } from '../../../../Atom/Logo/logo';
import { Languageswitcher } from '../../../UIcomponents/Languageswitcher/Languageswitcher';
import { Menu } from '../../Menu/Menu';
import './GlobalHeader.scss';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileNav from '../MobileNav/MobileNav';

const GlobalHeader = ({
  text, languageswitcherData, navigationData, rightNavigationData, leftNavigationData, locale,
  getMegaMenuData, locationData, langSelect, backcaption,
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
                  window.innerWidth > 1439
                  && <Menu data={leftNavigationData} />
                }
            <a href="#" className="middle-logo"><Logo src={pnud} alt="UNDP Logo" /></a>
            {
                  window.innerWidth > 1439
                  && <Menu data={rightNavigationData} />
                }
          </div>
          <div className="cell large-2 small-2 top-right">
            <IconsGlobe />
            <IconsSearch />
          </div>
          <div className="mega-wrapper cell large-12">
            <MegaMenu />
          </div>
          {
                window.innerWidth < 1440
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

export default GlobalHeader;
