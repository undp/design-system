import { React, useEffect } from 'react';
import pnud from '../../../../assets/images/logo.svg';
import { init } from '../../../../assets/js/navigation';
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
  languageswitcherData, navigationData, locale, backcaption, locationData, langSelect,siteTitleData
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
            <div className="site-title">
              <label>{siteTitleData.label}</label>
              <span>{siteTitleData.span}</span>
            </div>
          </div>
          <div className="cell large-6 small-8 mid-nav">
            {
                  window.innerWidth > 1439
                  && <Menu data={navigationData} />
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

export default CountrySiteHeader;
