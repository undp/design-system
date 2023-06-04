import React, { useEffect } from 'react';
import Iconsback from 'icons/back.svg';
import IconsGlobe from 'icons/globe.svg';
import IconsLanguage from 'icons/language.svg';
import { Icons } from '../../../../Atom/Icons/Icons';
import { navigationInitialize } from '../../../../assets/js/navigation';
import { CtaButton } from '../../../UIcomponents/Buttons/CtaButton/CtaButton';
import './mobile-nav.scss';

function MobileNav({
  text,
  locale,
  navigationData,
  languageswitcherData,
  backcaption,
  locationData,
  langSelect,
  ...args
}) {
  useEffect(() => {
    navigationInitialize(locale);
  }, [locale]);

  return (
    <div className="mobile-nav">
      <div className="grid-x">
        <div className="cell mobile-links">
          <ul>
            {navigationData.map((item, index) => (
              <li key={index}>
                <a
                  className={!(item.id) || (item.url === '#') ? 'cta__link cta--space no-submenu' : 'cta__link cta--space'}
                  href={!(item.url) || (item.url === '#') ? '#' : (item.url)}
                  id={item.id}
                >
                  {item.title ?? item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-options">
            <a href="#" className="mob-lang-switcher">
              <Icons src={IconsLanguage} alt="icon-language" />
              {' '}
              {languageswitcherData.headerText}
            </a>
            <a href="#" className="mob-globe">
              <Icons src={IconsGlobe} alt="icon-global" />
              {' '}
              {locationData.detail}
            </a>
            {args.cta_enabled === 'On' && (
              <CtaButton
                label="Donate"
                href="#"
                Icon="No Arrow"
                Type="Primary"
              />
            )}
          </div>
        </div>

        <div className="cell mobile-sub-menu">
          <button className="back-nav">
            <Icons src={Iconsback} alt="back button" />
            {backcaption.detail}
          </button>
          <div className="mobile-mega-wrapper">
            <div className="mobile-mega-content">
              <h6 className="sub-heading">Page Title</h6>
              <ul className="sub-sub-menus">
                <li>
                  <span>Page Title</span>
                  <ul>
                    <li>
                      <a href="#">Sub Page</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cell mob-sub-lang">
          <button className="back-nav">
            <Icons src={Iconsback} alt="back button" />
            {backcaption.detail}
          </button>
          <ul className="sub-sub-lang">
            <li>
              <span>{langSelect}</span>
              <ul>
                <li>
                  <a href="#">{languageswitcherData.headerText}</a>
                </li>
                {languageswitcherData.languagedata.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="">
                      {item.descriptionText}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
