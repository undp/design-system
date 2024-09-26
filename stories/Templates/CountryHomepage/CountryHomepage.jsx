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

export function CountryHomepage({
  footerData,
  herotitle,
  herotext,
  herobtnlabel,
  herosubtitle,
  heroimgsrc,
  heroimgsrc2,
  heroimgalt,
  featureddata,
  headertext,
  PagewidecardTag,
  PagewidecardTitle,
  PagewidecardParagraph,
  PagewidecardBtnlabel,
  takeactioncard,
  whatwedoheader,
  whatwedodescription,
  featureddataafterwedo,
  statHeading,
  storiesHeading,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
  siteTitleData,
  logo,
  logowhite,
  headingTop,
  takeAcrtionHead,
  storyBtn,
  statdata,
  ...args
}) {
  return (
    <>
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
      />

      <div className="grid-container fluid country-page-wrapper">
        <div className="grid-x grid-margin-x hero-container">
          <div className="cell large-12">
            <Homepageherooption
              title={herotitle}
              headingTop={headingTop}
              content={herotext}
              button={herobtnlabel}
              subtitle={herosubtitle}
              imgsrc={heroimgsrc}
              imgsrc2={heroimgsrc2}
              imgalt={heroimgalt}
            />
          </div>
        </div>
        <FeaturedCard data={featureddata} headertext={headertext} />
        <div className="grid-x grid-margin-x">
          <div className="cell large-11 medium-11 large-offset-1">
            <HeadingBig
              headerText={whatwedoheader}
              descriptionText={whatwedodescription}
              dataViewport="false"
            />
          </div>
        </div>
        <div className="grid-x wide-card-heading">
          <div className="cell small-12 medium-12 large-11 large-offset-1">
            <Heading type="2" label={storiesHeading} dataViewport="true" />
          </div>
          <PageWideCard
            label={PagewidecardTag}
            title={PagewidecardTitle}
            paragraph={PagewidecardParagraph}
            button={PagewidecardBtnlabel}
            {...args}
          />
        </div>

        <ContentCardWithAndWithoutImage
          data={featureddataafterwedo?.contentdata}
          storyBtn={featureddataafterwedo?.storyBtn}
          dataViewport="true"
          {...args}
        />
        <div className="cell cta-container">
          <CtaButton label={storyBtn} Icon="No Arrow" />
        </div>
        <div className="grid-x our-impact">
          <div className="cell small-12 medium-12 large-11 large-offset-1" data-viewport="true">
            <Heading type="2" label={statHeading} />
          </div>
          <div className="cell small-12 medium-12 large-12">
            <StatsSlider data={statdata} {...args} />
          </div>
        </div>
        <ImageRevealCards
          data={takeactioncard.data}
          label={takeAcrtionHead}
          {...args}
        />
      </div>

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
    </>
  );
}
