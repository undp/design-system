import React, { useEffect } from 'react';
import { PageHero } from '../../Components/UIcomponents/Hero/PageHero/PageHero';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Sidebar } from '../../Components/Navigationcomponents/Sidebar/Sidebar';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/BaseTypography/Paragraph/Paragraph';
import { FluidImageSizeCarousel } from '../../Components/UIcomponents/Carousel/FluidImageSizeCarousel/FluidImageSizeCarousel';
import { Footer } from '../../Organism/Footer/Footer';
import './generic-page.scss';
import { sticky } from '../../assets/js/sticky';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export function GenericPage({
  herodata,
  title,
  content,
  active,
  imgsource,
  altname,
  topHeading,
  topParagraph,
  footerData,
  sidebarCaptionData,
  ContentCardData,
  headingMissionVision,
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
  ...args
}) {
  useEffect(() => {
    sticky('.sidebar-desktop', '.generic-content', '.sidebar-desktop .sidebar-accordion');
  });
  return (
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
      <div className="grid-x">
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
        <div className="grid-x margin-top-72">
          <div className="cell large-3 small-12 sidebar-width">
            <div className="column sidebar-desktop" data-undpds-component="sticky">
              <Sidebar
                data={sidebarCaptionData.sidebardata}
                headerText={sidebarCaptionData.headerText}
                label={sidebarCaptionData.label}
                active={sidebarCaptionData.active}
                size="medium-12"
              />
            </div>
          </div>
          <div className="cell large-9 small-12 generic-content">
            <div className="grid-x">
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
                <div className="column genric-slider">
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
                  Hovercolors={args.accent}
                  {...args}
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
        {...{ color: 'default', variant: 'default' }}
      />
    </div>
  );
}
