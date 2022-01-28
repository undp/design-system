import React, { useEffect } from 'react';
import { Icons } from '../../../../Atom/Icons/Icons';
import Iconsback from '../../../../assets/icons/back.svg';
import IconsGlobe from '../../../../assets/icons/Globe.svg';
import IconsLanguage from '../../../../assets/icons/Language.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import './mobile-nav.scss';

const MobileNav = ({
  text,
  locale,
  navigationData,
  languageswitcherData,
  backcaption,
  locationData,
  langSelect,
}) => {
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
                  className="cta__link cta--space"
                  href="#"
                  id={item.id}
                >
                  {item.label}
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
};

export default MobileNav;
