import React from 'react';
import './genericlandingpage.scss';
import { PageHeroOption } from '../../Components/UIcomponents/Hero/Pagehero/PageHeroOption';
import FilterAndSearchBar from '../../Patterns/FilterAndSearchBar/FilterAndSearchBar';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export const GenericLandingPage = ({ 
  data, active, herodata, title, imgsrc, videosrc, footerData, content,
  groupcontentdata, buttonname, activeFilterText, clearText,
  args,
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
  <div className="landing-page">
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
    <div className="grid-container fluid">
      <div className="grid-x grid-margin-x">
        <div className="cell large-12">
          <PageHeroOption
            data={herodata}
            title={title}
            active={active}
            imgsrc={imgsrc}
            imgalt={imgsrc}
            videosrc={videosrc}
          />
        </div>
      </div>
    </div>
    <div className="grid-container fluid content-bottom">
      <div className="grid-x grid-margin-x margin-top-48">
        <div className="cell large-3 small-12">
          <div className="column">
            <FilterAndSearchBar locale={locale} args={args} clearText={clearText} activeFilterText={activeFilterText}  data={data}></FilterAndSearchBar>
          </div>
        </div>
        <div className="cell large-9 small-12">
          <div className="column">
            <ContentCard
              data={groupcontentdata}
              buttontype={buttonname}
              Hovercolors="yellow"
            />
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
