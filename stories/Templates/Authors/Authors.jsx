import React, { useEffect } from 'react';
import logowhite from '../../assets/images/undp-logo-white.svg';
import logo from '../../assets/images/undp-logo-blue.svg';
import user from '../../assets/images/user.svg';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { Footer } from '../../Organism/Footer/Footer';
import './Authors.scss';
import { select } from '../../assets/js/select';
import { authorFilter } from '../../assets/js/author-filter';
import { Authorcard } from '../../Components/UIcomponents/Author/Authorcard/Authorcard';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import { SearchExpand } from '../../Components/Forms/ExpandableSearch/SearchExpand';

const Authors = ({
  breadcrumbData,
  footerData,
  buttonData,
  text,
  authorData,
  headingData,
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
    select();
    authorFilter();
  }, []);
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
      <div className="grid-container fluid authors-page">
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-11 small-12">
            <Breadcrumbcomponent data={breadcrumbData} />
            <Heading type="2" label={headingData} className="authors-heading" />
          </div>
        </div>
        <div className="grid-x grid-margin-x mobile-author-filter">
          <div className="cell small-12 ">
            <button className="button button-secondary sort-filter">
              {buttonData.sort}<span>{buttonData.close}</span>
            </button>
          </div>
        </div>
        <div className="grid-x grid-margin-x author-filter">
          <div className="cell medium-offset-3 medium-5 large-6 align-center">
            <div className="exoandablesearch">
              <SearchExpand />
            </div>
          </div>
          <div className="cell medium-4 large-3">
            <div className="select-box author-select" data-select="">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-label="Select"
                id="exp_button"
                className="selected"
                data-select-open=""
              >
                {text.sort}
              </button>
              <ul
                tabIndex="-1"
                role="listbox"
                aria-labelledby="exp_button"
                className="options-container"
                data-select-options=""
              >
                {text.options.map((option, index) => (
                  <li role="option" data-value="default">
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-x">
          <div className="cell medium-offset-3 medium-9 small-12 author-cards">
            <Authorcard
              image={user}
              data={authorData.authordata}
              para={authorData.paragraph}
              button={authorData.button}
              alt="author name"
              link="#"
              width="medium-12"
            />
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 view-btn-cell">
                <CtaButton label={buttonData.view} Type="Secondary" />
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
};

export default Authors;
