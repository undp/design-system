import React from 'react';
import './ArticlePage.scss';
import { PostHeader } from '../Text/PostHeader/PostHeader';
import { Images } from '../Images/Images/Images';
import { Author } from '../../Molecules/Text/Authors/Authorcolumn/Authors';
import { BlockquoteComponent } from '../../Molecules/Text/BlockquoteComponent/BlockquoteComponent';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { List } from '../../Atom/Lists/Lists';
import { Heading } from '../../Atom/Base-typography/Heading/Heading';
import farmlandlg from '../../assets/images/farmland-lg.jpg';
import farmlandmd from '../../assets/images/farmland-md.jpg';
import farmlandsm from '../../assets/images/farmland-sm.jpg';
import user from '../../assets/images/user.svg';
import { Footer } from '../Footer/Footer';
import logo from '../../assets/images/logo.svg';
import logowhite from '../../assets/images/logo-white.svg';

const ArticlePage = ({
  data, header, country, description,
  imageCaptionData, authorCardData, blockquoteData, paraLabel,
  headingData, listData, footerData, headingLabel,
}) => {
  return (
    <div>
      <div className="grid-container container-1038">
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <PostHeader data={data} header={header} country={country} description={description} active="default" />
          </div>
        </div>
      </div>
      <div className="grid-container fluid">
        <div className="grid-x">
          <div className="cell large-12">
            <Images
              imagelg={farmlandlg}
              imagemd={farmlandmd}
              imagesm={farmlandsm}
              alt="farmland"
              label={imageCaptionData.label}
              name={imageCaptionData.name}
              paragraph={imageCaptionData.paragraph}
              {...{ size: 'Wide', caption: 'True', credit: 'True' }}
            />
          </div>
        </div>
      </div>
      <div className="grid-container container-802">
        <div className="grid-x">
          <div className="cell large-12 author-section">
            <Heading type="5" label={headingData.detail5} />
            <Author image={user} data={authorCardData} width="3" size="medium-4" />
          </div>
          <div className="cell large-12">
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
          </div>
        </div>
      </div>
      <div className="blockq-container">
        <div className="grid-x">
          <div className="cell large-12">
            <BlockquoteComponent blockquoteText={blockquoteData.blockquote} citeText={blockquoteData.cite} style="Yellow" />
          </div>
        </div>
      </div>
      <div className="grid-container container-802">
        <div className="grid-x">
          <div className="cell large-12">
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
          </div>
          <div className="cell large-12 middle-image">
            <Images
              imagelg={farmlandlg}
              imagemd={farmlandmd}
              imagesm={farmlandsm}
              alt="farmland"
              label={imageCaptionData.label}
              name={imageCaptionData.name}
              paragraph={imageCaptionData.paragraph}
              {...{ size: 'Wide', caption: 'True', credit: 'True' }}
            />
          </div>
          <div className="cell large-12">
            <P label={paraLabel.detail} />
            <P label={paraLabel.detail} />
          </div>
        </div>
      </div>
      <div className="left-802-container section-head">
        <div className="grid-x">
          <div className="cell large-12">
            <Heading type="2" label={headingLabel} />
          </div>
        </div>
      </div>
      <div className="grid-container container-802">
        <div className="grid-x">
          <div className="cell large-12">
            <List data={listData} type="ul" />
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

export default ArticlePage;
