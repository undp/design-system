import React, { useEffect } from 'react';
import { Iconsback } from '../../../../Atom/Icons/back';
import { IconsGlobe } from '../../../../Atom/Icons/globe';
import { IconsLanguage } from '../../../../Atom/Icons/Language';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { init } from '../../../../assets/js/navigation';
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
    init(locale);
  }, [locale]);

  return (
    <div className="cell large-12 mobile-nav">
      <div className="grid-x">
        <div className="cell small-12 mob-links">
          <ul>
            {navigationData.map((item, index) => (
              <li>
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
                <IconsLanguage />
                {' '}
                {languageswitcherData.headerText}
              </a>
            </div>
            <div>
              <a href="#" className="mob-globe">
                <IconsGlobe />
                {' '}
                {locationData.detail}
              </a>
            </div>
          </div>
        </div>

        <div className="cell small-12 mob-sub-menu">
          <div className="back-nav">
            <span>
              <Iconsback />
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
              <Iconsback />
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
                  <li>
                    <a href="#" key={index} className="">
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
