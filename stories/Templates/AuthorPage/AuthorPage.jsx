import React, { useEffect } from 'react';
import logowhite from '../../assets/images/logo-white.svg';
import logo from '../../assets/images/logo.svg';
import user from '../../assets/images/user.svg';
import viewport from '../../assets/js/viewport';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { AuthorSummary } from '../../Organism/Blocks/Authorcard/AuthorSummary';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import './AuthorPage.scss';

const AuthorPage = ({
  breadcrumbData, authorSummeryData, contentCardData, footerData,
}) => {
  useEffect(() => {
    viewport('.feature__card--headertext');
  }, []);

  return (
    <div>
      <div className="grid-container fluid author-page">
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-10 small-12">
            <Breadcrumbcomponent data={breadcrumbData} />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-10 small-12">
            <AuthorSummary image={user} Authorlabel={authorSummeryData.text2} para={authorSummeryData.paragraph} para1={authorSummeryData.text3} />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-10 small-12 author-content">
            <ContentCard data={contentCardData.groupcontentdata} buttontype={contentCardData.buttonname} />
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
    </div>
  );
};

export default AuthorPage;
