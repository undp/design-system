import React, { useEffect } from 'react';
import { Icons } from '../../../../Atom/Icons/Icons';
import Iconsback from '../../../../assets/icons/back.svg';
import IconsGlobe from '../../../../assets/icons/Globe.svg';
import IconsLanguage from '../../../../assets/icons/Language.svg';
import { navigationInitialize } from '../../../../assets/js/navigation';
import './MobileNav.scss';

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
    <div className="cell large-12 mobile-nav">
      <div className="grid-x">
        <div className="cell small-12 mob-links">
          <ul>
            {navigationData.map((item, index) => (
              <li key={index}>
                <a
                  className="cta__link cta--arrow"
                  href="javascript:void(0)"
                  id={item.id}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mob-nav-options">
            <div>
              <a href="javascript:void(0)" className="mob-lang-switcher">
                <Icons src={IconsLanguage} alt="icon-language" />
                {' '}
                {languageswitcherData.headerText}
              </a>
            </div>
            <div>
              <a href="#" className="mob-globe">
                <Icons src={IconsGlobe} alt="icon-global" />
                {' '}
                {locationData.detail}
              </a>
            </div>
          </div>
        </div>

        <div className="cell small-12 mob-sub-menu">
          <div className="back-nav">
            <span>
              <Icons src={Iconsback} alt="icon-back" />
              {' '}
              {backcaption.detail}
            </span>
          </div>
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

        <div className="cell small-12 mob-sub-lang">
          <div className="back-nav">
            <span>
              <Icons src={Iconsback} alt="icon-back" />
              {' '}
              {backcaption.detail}
            </span>
          </div>
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
