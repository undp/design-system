import React, { useEffect } from 'react';
import './globalhome-page.scss';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { Homepageherosplit } from '../../Components/UIcomponents/Hero/HomePageHero/HomePageHeroSplit';
import { FeaturedCard } from '../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedCard';
import { HeadingBig } from '../../Molecules/Text/HeadingBig/HeadingBig';
import ParallaxCards from '../../Components/UIcomponents/Cards/ParallaxCard/ParallaxCards';
import { TextCta } from '../../Molecules/Text/TextCta/TextCta';
import { TextBackground } from '../../Molecules/Text/TextBackground/TextBackground';
import { Stats } from '../../Organism/Stats/Stats';
import { FixedSizeCarousel } from '../../Components/UIcomponents/Carousel/FixedSizeCarousel/FixedSizeCarousel';
import { TweetPanel } from '../../Organism/Blocks/TweetPanel/TweetPanel';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/undp-logo-blue.svg';
import logowhite from '../../assets/images/undp-logo-white.svg';
import { parallaxlines } from '../../assets/js/parallax';

export const GlobalHomePage = ({
  homepagesplit,
  featuredcarddata,
  parallaxdata,
  footerData,
  statsdata,
  fixedcarouseldata,
  featureddata,
  headertext,
  label,
  tweetdata,
  textctadata,
  textbackgrounddata,
  whatwedoheader,
  whatwedodescription,
  BackgroundImg,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
}) => {
  useEffect(() => {
    parallaxlines();
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
      <a href= "http://localhost:6006/iframe.html?id=templates-country-homepage-rtl--country-homepage-rtl&args=&viewMode=story" className="switch_btn button button-primary">Click here to switch logo animation</a>
    </div>
  );
};
