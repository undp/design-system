import React, { useEffect } from 'react';
import pnud from '../../../../assets/images/undp-logo-blue.svg';
import { getMegaMenu } from '../../../../assets/js/navigation-data';
import {
  navigationInitialize,
  navigationMultiLevel,
  // priorityPlusNav,
} from '../../../../assets/js/navigation';
import { Logo } from '../../../../Atom/Logo/Logo';
import { CtaButton } from '../../../UIcomponents/Buttons/CtaButton/CtaButton';
import { Menu } from '../../Menu/Menu';
import { Languageswitcher } from '../../../UIcomponents/LanguageSwitcher/LanguageSwitcher';
import MegaMenu from '../MegaMenu/MegaMenu';
import MenuMultiLevel from '../MenuMultiLevel/MenuMultiLevel';
import MobileNav from '../MobileNav/MobileNav';
import './country-site-header.scss';
import '../../../../assets/scss/_grid.scss';
import '../../../../assets/js/lazyload';
import '../../../../Utilities/FrostedImage/frosted-background.scss';
import menuJsonData from '../../../../assets/js/navigation-data.json';

function CountrySiteHeader({
  languageswitcherData,
  navigationData,
  locale,
  backcaption,
  locationData,
  langSelect,
  siteTitleData,
  ...args
}) {
  useEffect(() => {
    getMegaMenu(locale);
    navigationInitialize(locale);
    if (args.menu_type === 'Multi-level dropdown') {
      navigationMultiLevel(locale);
    }
  }, [locale, args.menu_type]);

  const menuType = args.menu_type === 'Mega menu' ? 'mega_menu' : 'dropdown';
  const menuData = args.menu_type === 'Mega menu' ? navigationData : menuJsonData;
  const overflow = args.menu_type === 'Multi-level dropdown';
  const multiLevel = args.menu_type === 'Multi-level dropdown';

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
                  <span><a href="#" title="UNDP homepage link">{siteTitleData.label}</a></span>
                )}
                <span><a href="#" title="UNDP homepage link">{siteTitleData.span}</a></span>
              </div>
              {args.menu_type === 'Multi-level dropdown' && (
                <MenuMultiLevel data={menuData} locale={locale} multiLevel overflow {...args} />
              )}
              {args.menu_type === 'Mega menu' && (
                <Menu data={menuData} type={menuType} {...args} />
              )}
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
              {args.cta_enabled == 'On' && (
                <CtaButton
                  label="Donate"
                  href="#"
                  For_Primary="No Arrow"
                />
              )}
            </div>
            <MobileNav
              navigationData={navigationData}
              languageswitcherData={languageswitcherData}
              locationData={locationData}
              backcaption={backcaption}
              langSelect={langSelect}
              text="Mobile Nav"
              {...args}
            />
          </div>
        </div>
        <div className="grid-container full menu__overflow hidden">
          <Menu data={navigationData} />
        </div>
      </section>
      {args.menu_type === 'Mega menu' && (
        <div className="mega-wrapper">
          <MegaMenu locale={locale} />
        </div>
      )}
    </header>
  );
}

export default CountrySiteHeader;
