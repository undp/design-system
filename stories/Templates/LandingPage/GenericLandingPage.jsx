import React from 'react';
import './genericlandingpage.scss';
import { PageHeroOption } from '../../Components/UIcomponents/Hero/Pagehero/PageHeroOption';
import FilterAndSearchBar from '../../Patterns/FilterAndSearchBar/FilterAndSearchBar';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/logo.svg';
import logowhite from '../../assets/images/logo-white.svg';
import GlobalHeader from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader";

export const GenericLandingPage = ({
  data, active, herodata, title, imgsrc, videosrc, footerData, content, groupcontentdata, buttonname, activeFilterText, clearText, languageswitcherData, rightNavigationData, leftNavigationData, navigationData, locale,
}) => (
  <>
    <GlobalHeader
        locale={locale}
        leftNavigationData={leftNavigationData}
        navigationData={navigationData}
        rightNavigationData={rightNavigationData}
        languageswitcherData={languageswitcherData}
    />
    <div className="grid-container fluid margin-top-32">
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
            <FilterAndSearchBar data={data} clearText={clearText} activeFilterText={activeFilterText} />
          </div>
        </div>
        <div className="cell large-9 small-12 margin-top-69">
          <div className="column">
            <ContentCard
              data={groupcontentdata}
              buttontype={buttonname}
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
      {...{ color: 'blue' }}
    />

  </>
);
