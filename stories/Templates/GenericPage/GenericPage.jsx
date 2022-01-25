import React from 'react';
import { ProgressBarNavigation } from '../../Atom/Navigation/ProgressBarNavigation/ProgressBarNavigation';
import { PageHero } from '../../Components/UIcomponents/Hero/Pagehero/PageHero';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Sidebar } from '../../Components/Navigationcomponents/Sidebar/Sidebar';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { FluidImageSizeCarousel } from '../../Components/UIcomponents/Carousel/FluidImageSizeCarousel/FluidImageSizeCarousel';
import { Footer } from '../../Organism/Footer/Footer';
import './generic-page.scss';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export const GenericPage = ({
  herodata, title, content, active, imgsource, altname, topHeading, topParagraph, footerData, sidebarCaptionData, ContentCardData, headingMissionVision,
  paraMissionVision,
  headingHistory,
  paraHistory,
  headingUNcharter,
  paraUNcharter,
  carouselData,
  logo,
  logowhite,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
}) => (
  <div className="generic-page">
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
    <ProgressBarNavigation Colors="yellow" />
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 sidebar-width">
        <div className="column sidebar-mobile">
          <Sidebar
            data={sidebarCaptionData.sidebardata}
            headerText={sidebarCaptionData.headerText}
            label={sidebarCaptionData.label}
            active={sidebarCaptionData.active}
          />
        </div>
      </div>
    </div>
    <PageHero
      data={herodata}
      title={title}
      content={content}
      imgsrc={imgsource}
      imgalt={altname}
      active={active}
    />

    <div className="grid-container fluid content-bottom">
      <div className="grid-x grid-margin-x margin-top-72">
        <div className="cell large-3 small-12 sidebar-width">
          <div className="column sidebar-desktop">
            <Sidebar
              data={sidebarCaptionData.sidebardata}
              headerText={sidebarCaptionData.headerText}
              label={sidebarCaptionData.label}
              active={sidebarCaptionData.active}
              size="medium-12"
            />
          </div>
        </div>
        <div className="cell large-9 small-12">
          <div className="grid-x grid-margin-x">
            <div className="cell large-10 small-12">
              <div className="column">
                <Heading
                  type="2"
                  label={topHeading}
                />
              </div>
            </div>
            <div className="cell large-10 small-12 margin-top-32">
              <div className="column">
                <P label={topParagraph} />
              </div>
            </div>
            <div className="cell large-12 small-12 margin-top-80">
              <div className="column">
                <FluidImageSizeCarousel
                  data={carouselData}
                />
              </div>
            </div>
            <div className="cell large-9 small-12 margin-top-80">
              <div className="column">
                <Heading
                  type="3"
                  label={headingMissionVision}
                />
              </div>
            </div>
            <div className="cell large-10 small-12">
              <div className="column">
                <P label={paraMissionVision} />
              </div>
            </div>

            <div className="cell large-9 small-12 margin-top-48">
              <div className="column">
                <Heading
                  type="3"
                  label={headingUNcharter}
                />
              </div>
            </div>
            <div className="cell large-10 small-12">
              <div className="column">
                <P label={paraUNcharter} />
              </div>
            </div>

            <div className="cell large-9 small-12 margin-top-48">
              <div className="column">
                <Heading
                  type="3"
                  label={headingHistory}
                />
              </div>
            </div>
            <div className="cell large-10 small-12">
              <div className="column">
                <P label={paraHistory} />
              </div>
            </div>
            <div className="column margin-top-48">
              <ContentCard
                data={ContentCardData.groupcontentdata}
                buttontype={ContentCardData.buttonname}
                Hovercolors="yellow"
              />
            </div>
          </div>
        </div>
      </div>
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
  </div>
);
