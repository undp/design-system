import React, { useEffect } from 'react';
import './ArticlePage.scss';
import { PostHeader } from '../../Organism/Text/PostHeader/PostHeader';
import { Images } from '../../Atom/Images/Imagecaptioncredit/Imagecaption';
import { Imagecaption } from '../../Molecules/Imagecaption/Imagecaption';
import { Author } from '../../Components/UIcomponents/Author/Authorcolumn/Authors';
import { BlockquoteComponent } from '../../Molecules/Text/BlockquoteComponent/BlockquoteComponent';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { List } from '../../Atom/Typography/Lists/Lists';
import { FeaturedCard } from '../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedCard';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import farmlandlg from '../../assets/images/farmland-lg.jpg';
import farmlandmd from '../../assets/images/farmland-md.jpg';
import farmlandsm from '../../assets/images/farmland-sm.jpg';
import user from '../../assets/images/user.svg';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/undp-logo-blue.svg';
import logowhite from '../../assets/images/undp-logo-white.svg';
import viewport from '../../assets/js/viewport';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

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
}) => {
  useEffect(() => {
    viewport('.feature__card--headertext');
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

      <div className="grid-container full mt-h">
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
            <Images
              imagelg={farmlandlg}
              imagemd={farmlandmd}
              imagesm={farmlandsm}
              alt="farmland"
              label={imageCaptionData.label}
              name={imageCaptionData.name}
              paragraph={imageCaptionData.paragraph}
              {...{ size: 'wide', caption: 'false', credit: 'false' }}
            />
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
            <Author image={user} data={authorCardData} Number="three" />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-7 medium-offset-2">
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
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
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
          </div>
          <div className="cell medium-7 medium-offset-2 middle-image">
            <Images
              imagelg={farmlandlg}
              imagemd={farmlandmd}
              imagesm={farmlandsm}
              alt="farmland"
              label={imageCaptionData.label}
              name={imageCaptionData.name}
              paragraph={imageCaptionData.paragraph}
              {...{ size: 'wide', caption: 'false', credit: 'false' }}
            />
          </div>
          <div className="cell medium-7 medium-offset-2 middle-caption">
            <Imagecaption
              label={imageCaptionData.label}
              name={imageCaptionData.name}
              paragraph={imageCaptionData.paragraph}
            />
          </div>
          <div className="cell medium-7 medium-offset-2">
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
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
        <div className="grid-x">
          <div className="cell large-12">
            <FeaturedCard
              data={featuredCardContent.featureddata}
              headertext={featuredCardContent.headertext}
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
        {...{ color: 'default' }}
      />
    </div>
  );
};

export default ArticlePage;
