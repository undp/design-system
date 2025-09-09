import React from 'react';
import logowhite from '../../assets/images/undp-logo-white.svg';
import logo from '../../assets/images/undp-logo-blue.svg';
import user from '../../assets/images/user.svg';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { AuthorSummary } from '../../Organism/Blocks/AuthorSummary/AuthorSummary';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import './author-page.scss';

function AuthorPage({
  breadcrumbData,
  authorSummaryData,
  footerData,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
  groupcontentdata,
  buttonname,
  ...args
}) {
  return (
    <div>
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
      <div className="grid-container fluid author-page">
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-10 small-12">
            <Breadcrumbcomponent data={breadcrumbData} />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-10 small-12">
            <AuthorSummary
              image={user}
              Authorlabel={authorSummaryData.text2}
              para={authorSummaryData.paragraph}
              para1={authorSummaryData.text3}
            />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-offset-2 medium-9 small-12 author-content">
            <ContentCard
              data={groupcontentdata}
              buttontype={buttonname}
              Hovercolors={args.accent}
              {...args}
            />
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

export default AuthorPage;
