import React, { useEffect } from 'react';
import './globalhome-page.scss';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export function GlobalHomePage({
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
}) {
  useEffect(() => {
  }, []);
  return (
    <div dir="rtl">
      <GlobalHeader
        backcaption={backcaption}
        locale={locale}
        leftNavigationData={leftNavigationData}
        navigationData={navigationData}
        rightNavigationData={rightNavigationData}
        languageswitcherData={languageswitcherData}
        locationData={locationData}
        langSelect={langSelect}
      />
      <a href="/iframe?id=templates-country-homepage-rtl--country-homepage-rtl&direction=ltr&globals=locale:english&args=&viewMode=story" className="switch_btn button button-primary">Click here to switch logo animation</a>
    </div>
  );
}
