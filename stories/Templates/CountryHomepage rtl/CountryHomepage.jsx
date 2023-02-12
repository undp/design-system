import React from 'react';
import { Homepageherooption } from '../../Components/UIcomponents/Hero/HomePageHero/HomePageHeroOption';
import { ContentCardWithAndWithoutImage } from '../../Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { FeaturedCard } from '../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedCard';
import { HeadingBig } from '../../Molecules/Text/HeadingBig/HeadingBig';
import { PageWideCard } from '../../Organism/Blocks/FeaturedContentCard/PagewideContentCard/PageWideCard';
import { ImageRevealCards } from '../../Organism/Blocks/ImageRevealCards/ImageRevealCards';
import { StatsSlider } from '../../Patterns/StatsSlider/StatsSlider';
import CountrySiteHeader from '../../Components/Navigationcomponents/Mainnavigation/CountrySiteHeader/CountrySiteHeader';
import { Footer } from '../../Organism/Footer/Footer';
import './countryhome-page.scss';
import { CtaButton } from '../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export const CountryHomepage = ({
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
  siteTitleData,
  ...args
}) => (
  <div dir="rtl">
    <CountrySiteHeader
      siteTitleData={siteTitleData}
      backcaption={backcaption}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      languageswitcherData={languageswitcherData}
      locationData={locationData}
      langSelect={langSelect}
      {...args}
    />

    <a href="https://develop.design-system.pages.dev/iframe?id=templates-global-homepage-rtl--global-homepage-rtl&direction=ltr&globals=locale:english&viewMode=story" className="switch_btn button button-primary">Click here to switch logo animation</a>
  </div>
);
