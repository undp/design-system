import React from 'react';
import { PageHero } from '../../Components/UIcomponents/Hero/Pagehero/PageHero';
import CountrySiteHeader from '../../Components/Navigationcomponents/Mainnavigation/CountrySiteHeader/CountrySiteHeader';
import { HeadingBig } from '../../Molecules/Text/HeadingBig/HeadingBig';
import { Footer } from '../../Organism/Footer/Footer';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { DownloadCard } from '../../Molecules/Blocks/DownloadCard/DownloadCard';
import { Projectdetail } from '../../Organism/Text/ProjectDetail/ProjectDetail';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import { ContentCardWithAndWithoutImage } from '../../Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage';
import { Statscardslider } from '../../Organism/Statscardslider/Statscardslider';
import './project-page.scss';

export const ProjectPage = ({
  footerData, siteTitleData, backcaption, locale, leftNavigationData, navigationData, rightNavigationData, languageswitcherData, locationData, langSelect, logo, logowhite, herodata, content, title, imgsrc, imgalt, topHeading, topParagraph, topParagraph1, whatwedoheader, whatwedodescription, relatedHeading, download, downloadTitle, downloadTitle1, downloadTitle2, downloadTitle3, downloadTitle4, downloadTitle5, downloadTitle6, impactHead, title1, title2, title3, title4, title5, title6, title7, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6, subtitle7, buttonProjectInfo, supportHeading, exploreHeading, exploreMoreBtn, exploreMoreData, statsliderdata, listData,
}) => (
  <>
    <CountrySiteHeader
      siteTitleData={siteTitleData}
      backcaption={backcaption}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      languageswitcherData={languageswitcherData}
      locationData={locationData}
      langSelect={langSelect}
    />
    <div className="project-page-hero">
      <PageHero
        data={herodata}
        title={title}
        content={content}
        active="white"
        imgsrc={imgsrc}
        imgalt={imgalt}
      />
    </div>

    <div className="grid-container fluid project-page">
      <div className="grid-x grid-margin-x">
        <div className="cell large-offset-1 small-offset-1 small-10">
          <div className="column">
            <Heading type="2" label={topHeading} />
          </div>
        </div>
        <div className="cell large-offset-3 large-7 small-offset-1 small-10 copy-text">
          <div className="column">
            <P label={topParagraph} />
            <P label={topParagraph1} />
          </div>
        </div>
        <div className="cell large-11 medium-11 large-offset-1">
          <div className="column">
            <HeadingBig
              headerText={whatwedoheader}
              descriptionText={whatwedodescription}
              listData={listData}
            />
          </div>
        </div>
      </div>
      <div className="grid-x grid-margin-x project-material">
        <div className="cell large-offset-1 small-offset-1 small-10">
          <div className="column">
            <Heading type="2" label={relatedHeading} />
          </div>
        </div>
        <div className="cell small-10 small-offset-1 large-offset-3 large-6">
          <div className="column">
            <DownloadCard title={downloadTitle} download={download} />
          </div>
          <div className="grid-x grid-margin-x margin-top-24">
            <div className="cell large-6">
              <div className="column">
                <DownloadCard title={downloadTitle1} download={download} />
              </div>
            </div>
            <div className="cell large-6">
              <div className="column">
                <DownloadCard title={downloadTitle2} download={download} />
              </div>
            </div>
          </div>
          <div className="column margin-top-24">
            <DownloadCard title={downloadTitle3} download={download} />
          </div>
          <div className="column margin-top-24">
            <DownloadCard title={downloadTitle4} download={download} />
          </div>
          <div className="column margin-top-24">
            <DownloadCard title={downloadTitle5} download={download} />
          </div>
          <div className="grid-x grid-margin-x margin-top-24">
            <div className="cell large-6">
              <div className="column">
                <DownloadCard title={downloadTitle6} download={download} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-x grid-margin-x project-impact">
        <div className="cell large-offset-1 large-10">
          <Projectdetail
            text={impactHead}
            title1={title1}
            title2={title2}
            title3={title3}
            title4={title4}
            title5={title5}
            title6={title6}
            title7={title7}
            subtitle1={subtitle1}
            subtitle2={subtitle2}
            subtitle3={subtitle3}
            subtitle4={subtitle4}
            subtitle5={subtitle5}
            subtitle6={subtitle6}
            subtitle7={subtitle7}
          />
          <CtaButton label={buttonProjectInfo} Type="Secondary" />
        </div>
      </div>
      <div className="grid-x grid-margin-x project-support">
        <div className="cell large-offset-1 small-offset-1 small-10">
          <div className="column">
            <Heading type="2" label={supportHeading} />
          </div>
        </div>
        <div className="cell large-offset-1 large-11">
          <div className="column">
            <Statscardslider data={statsliderdata} gapel="20" gapelsm="20" viewcard="5" perViewtablet="3" focusSpace="0" />
          </div>
        </div>
      </div>
      <div className="grid-x grid-margin-x project-explore">
        <div className="cell large-offset-1 small-offset-1 small-10">
          <div className="column">
            <Heading type="2" label={exploreHeading} />
          </div>
        </div>
        <ContentCardWithAndWithoutImage data={exploreMoreData} />
        <div className="cell cta-container">
          <CtaButton label={exploreMoreBtn} Type="Secondary" />
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
  </>
);
