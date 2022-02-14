import React from 'react';
import './article-page.scss';
import { PostHeader } from '../../Organism/Text/PostHeader/PostHeader';
import { Images } from '../../Atom/Images/ImageCaptionCredit/ImageCaptionCredit';
import { Imagecaption } from '../../Molecules/ImageCaption/ImageCaption';
import { Author } from '../../Components/UIcomponents/Author/AuthorColumn/AuthorColumn';
import { BlockquoteComponent } from '../../Molecules/Text/BlockquoteComponent/BlockquoteComponent';
import { P } from '../../Atom/BaseTypography/Paragraph/Paragraph';
import { List } from '../../Atom/Typography/Lists/Lists';
import { FeaturedCard } from '../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedCard';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import user from '../../assets/images/user.svg';
import { Footer } from '../../Organism/Footer/Footer';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';
import { ProgressBarNavigation } from '../../Atom/Navigation/ProgressBarNavigation/ProgressBarNavigation';
import { Image } from '../../Atom/Images/Image/Image';
import '../../assets/js/lazyload.js';


const ArticlePage = ({
  data,
  header,
  country,
  description,
  imageCaptionData,
  authorCardData,
  blockquoteData,
  paraLabel,
  headingData,
  listData,
  footerData,
  headingLabel,
  featuredCardContent,
  languageswitcherData,
  navigationData,
  rightNavigationData,
  leftNavigationData,
  locale,
  locationData,
  langSelect,
  backcaption,
  para,
  logo,
  logowhite
}) => (
  <div className='article-page'>
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
    <div className="grid-container fluid mt-h">
      <div className="grid-x">
        <div className="cell large-9 medium-offset-1 medium-10">
          <PostHeader
            data={data}
            header={header}
            country={country}
            description={description}
            active="default"
          />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell large-12 large-article-image">
          <Image />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell medium-7 medium-offset-2 image-caption">
          <Imagecaption
            label={imageCaptionData.label}
            name={imageCaptionData.name}
            paragraph={imageCaptionData.paragraph}
          />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell large-7 medium-10 medium-offset-2 author-section">
          <Heading type="5" label={headingData.detail5} />
          <Author image={user} data={authorCardData} Number="Three" />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell medium-7 medium-offset-2">
          <P label={para.para1} />
          <P label={para.para2} />
        </div>
      </div>
      <div className="grid-x blockq">
        <div className="cell medium-9">
          <BlockquoteComponent
            blockquoteText={blockquoteData.blockquote}
            citeText={blockquoteData.cite}
            Colors="yellow"
          />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell medium-7 medium-offset-2">
          <P label={para.para1} />
          <P label={para.para2} />
        </div>
        <div className="cell medium-7 medium-offset-2 middle-image">
          <Image className="lazy" />
        </div>
        <div className="cell medium-7 medium-offset-2 middle-caption">
          <Imagecaption
            label={imageCaptionData.label}
            name={imageCaptionData.name}
            paragraph={imageCaptionData.paragraph}
          />
        </div>
        <div className="cell medium-7 medium-offset-2">
          <P label={para.para1} />
          <P label={para.para2} />
        </div>
      </div>
      <div className="grid-x section-head">
        <div className="cell medium-8 medium-offset-1">
          <Heading type="2" label={headingLabel} />
        </div>
      </div>
      <div className="grid-x">
        <div className="cell medium-7 medium-offset-2 list-section">
          <List data={listData} type="ul" />
        </div>
      </div>
    </div>
    <FeaturedCard
      data={featuredCardContent.featureddata}
      headertext={featuredCardContent.headertext}
    />
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

export default ArticlePage;

