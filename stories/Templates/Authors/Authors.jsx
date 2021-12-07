import React, { useEffect } from 'react';
import logowhite from '../../assets/images/logo-white.svg';
import logo from '../../assets/images/logo.svg';
import user from '../../assets/images/user.svg';
import viewport from '../../assets/js/viewport';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import CustomSelect from '../../Components/Forms/Dropdowns/CustomSelect/CustomSelect';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { AuthorSummary } from '../../Organism/Blocks/Authorcard/AuthorSummary';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Footer } from '../../Organism/Footer/Footer';
import './Authors.scss';
import init from '../../assets/js/select-init';
import { Authorcard } from '../../Components/UIcomponents/Author/Authorcard/Authorcard';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import { SearchExpand } from '../../Components/Forms/expandable search/SearchExpand';

const Authors = ({
  breadcrumbData, authorSummeryData, contentCardData, footerData,
  sortText, viewText, closeText,
  undpheading, text, authorData, headingData, buttontype, buttonData,
}) => {
  useEffect(() => {
  console.log(text);
    viewport('.feature__card--headertext');
    init();
    $('.sort-btn').click(function sortclick() {
      $('.author-filter').addClass('author-filter-show');
      $('.close-btn').addClass('show-close');
      $(this).addClass('hide-sort');
      $('.author-cards').addClass('find-first-author');
    });
    $('.close-btn').click(function closeclick() {
      $('.author-filter').removeClass('author-filter-show');
      $(this).removeClass('show-close');
      $('.sort-btn').removeClass('hide-sort');
      $('.author-cards').removeClass('find-first-author');
    });
  }, []);
  return (
    <div>
      <div className="grid-container fluid author-page">
        <div className="grid-x">
          <div className="cell medium-offset-1 medium-11 small-12">
            <Breadcrumbcomponent data={breadcrumbData} />
            <Heading type="2" label={headingData} className="authors-heading" />
          </div>
        </div>
        <div className="grid-x grid-margin-x mobile-author-filter">
          <div className="cell small-12 sort-btn">
            <CtaButton label2={sortText} variant="secondary" />
          </div>
          <div className="cell small-12 close-btn">
            <CtaButton label2={closeText} variant="secondary" />
          </div>
        </div>
        <div className="grid-x grid-margin-x author-filter">
          <div className="cell medium-offset-3 medium-6 align-center">
            <div className="exoandablesearch">
              <SearchExpand />
            </div>
          </div>
          <div className="cell medium-3">
            <div className="select-box author-select" data-select="">
              <button type="button" aria-haspopup="listbox" aria-label="Select" id="exp_button" className="selected" data-select-open="">
                {text.sort}
              </button>
              <ul tabIndex="-1" role="listbox" aria-labelledby="exp_button" className="options-container" data-select-options="">
                {
                text.options.map((option,index)=>(
                 <li  className="option" role="option" data-value="default">
                  <span>{option}</span>
                 </li>
                ))
                }


              </ul>
            </div>
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-offset-3 medium-9 small-12">
            <div className="grid-x grid-margin-x author-cards">
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <Authorcard image={user} data={authorData.authordata} para={authorData.paragraph} button={authorData.button} link="#" width="medium-12" />
              <div className="cell small-12 view-btn-cell">
                <CtaButton label2={viewText} variant="secondary" />
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
        {...{ color: 'blue' }}
      />
    </div>
  );
};

export default Authors;
