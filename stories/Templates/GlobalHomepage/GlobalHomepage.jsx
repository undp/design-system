import React, { useEffect } from 'react';
import './globalhome-page.scss';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { Homepageherosplit } from '../../Components/UIcomponents/Hero/Homepagehero/HomepageHeroSplit';
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
    <>
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
      <div className="grid-container fluid glabal-page">
        <div className="grid-x">
          <div className="cell large-12">
            <Homepageherosplit
              title={homepagesplit.titlename}
              content={homepagesplit.text}
              button={homepagesplit.btnlabel}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <FeaturedCard
              data={featuredcarddata.featureddata}
              headertext={featuredcarddata.headertext}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <HeadingBig
              headerText={whatwedoheader}
              descriptionText={whatwedodescription}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <ParallaxCards
              alt="feature card"
              data={parallaxdata.data}
              title={parallaxdata.title}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <TextCta
              headerText={textctadata.header}
              descriptionText={textctadata.description}
              label={textctadata.button}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <TextBackground
              headerText={textbackgrounddata.header}
              descriptionText={textbackgrounddata.description}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <Stats data={statsdata} imageback={BackgroundImg} />
          </div>
        </div>
        <div className="grid-x fixedcarousel">
          <div className="cell large-10 medium-offset-1">
            <FixedSizeCarousel data={fixedcarouseldata.data} label={label} />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell large-12">
            <FeaturedCard data={featureddata} headertext={headertext} />
          </div>
        </div>
        <TweetPanel
          data={tweetdata.tweetpaneldata}
          headertext={tweetdata.headertext}
        />
        <div className="grid-x">
          <div className="cell large-12">
            <Footer
              src={logo}
              srctwo={logowhite}
              headerText={footerData.headerText}
              headerText2={footerData.headerText2}
              style="default"
              alt="UNDP Logo"
              element="input"
              type="email"
              required="required"
              mode="form-email"
              errorText={footerData.errorLabel}
              label={footerData.labelname}
              button={footerData.buttonname}
              placeholder={footerData.placeholdername}
              menutitle={footerData.pageTitle}
              data={footerData.footerdata}
              copyright={footerData.copyright}
              menudata={footerData.menudata}
              {...{ color: 'default' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
