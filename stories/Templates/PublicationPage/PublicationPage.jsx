import React, { useEffect } from 'react';
import { PublicationCard } from '../../Molecules/Blocks/PublicationCard/PublicationCard';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { ContentCardWithOutImage } from '../../Components/UIcomponents/Cards/ContentCard/ContentCardWithOutImage';
import { Footer } from '../../Organism/Footer/Footer';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { Menu } from '../../Components/Navigationcomponents/Menu/Menu';
import viewport from '../../assets/js/viewport';
import './publication-page.scss';
import '../../assets/js/sticky';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export const PublicationPage = ({
  data,
  download,
  readmore,
  image,
  footerData,
  active,
  blockHeader,
  blockDescription,
  paragraphTop1,
  paragraphTop2,
  paragraphTop3,
  ContentCardWithOutImageData,
  buttontype,
  relatedPublicationHeading,
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
  menuTitle1,
  menuData1,
  menuTitle2,
  menuData2,
  menuTitle3,
  menuData3,
  menuTitle4,
  menuData4,
}) => {
  useEffect(() => {
    viewport('.content-card-container');
    viewport('.related-publication');
  }, []);
  return (
    <>
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
      <div className="grid-container fluid publication-page">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-12 large-11 large-offset-1 medium-offset-0">
            <div className="column">
              <Breadcrumbcomponent data={data} active={active} />
            </div>
          </div>
        </div>
        <div className="grid-x grid-margin-x publication-block">
          <div className="cell small-12 title-mobile">
            <div className="column">
              <Heading type="2" label={blockHeader} />
            </div>
          </div>
          <div className="cell small-12 large-5 medium-6 large-offset-1 medium-offset-0">
            <div className="column sticky">
              <PublicationCard
                image={image && <Publicationthumb />}
                download={download}
                readmore={readmore}
              />
            </div>
          </div>
          <div className="cell small-12 large-5 medium-5">
            <div className="column publication-card__title">
              <Heading type="2" label={blockHeader} />
              <Heading type="6" label={blockDescription} />
              <P label={paragraphTop1} className="margin-top-48" />
              <P label={paragraphTop2} />
              <P label={paragraphTop3} />
            </div>
            <div className="column publication-menu">
              <div className="grid-x grid-margin-x">
                <div className="cell small-4">
                  <Heading type="6" label={menuTitle1} />
                </div>
                <div className="cell small-8">
                  <Menu data={menuData1} />
                </div>
              </div>
              <div className="grid-x grid-margin-x">
                <div className="cell small-4">
                  <Heading type="6" label={menuTitle2} />
                </div>
                <div className="cell small-8">
                  <Menu data={menuData2} />
                </div>
              </div>
              <div className="grid-x grid-margin-x">
                <div className="cell small-4">
                  <Heading type="6" label={menuTitle3} />
                </div>
                <div className="cell small-8">
                  <Menu data={menuData3} />
                </div>
              </div>
              <div className="grid-x grid-margin-x">
                <div className="cell small-4">
                  <Heading type="6" label={menuTitle4} />
                </div>
                <div className="cell small-8">
                  <Menu data={menuData4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-x grid-margin-x margin-top-48 related-publication">
          <div className="cell small-12 large-6 large-offset-6 border-top-2">
            <div className="column">
              <Heading type="2" label={relatedPublicationHeading} />
            </div>
          </div>
          <div className="cell small-12 large-6 large-offset-6">
            <div className="column">
              <ContentCardWithOutImage
                Hovercolors='yellow'
                data={ContentCardWithOutImageData}
              />
            </div>
          </div>
          <div className="cell small-12 large-6 large-offset-6">
            <div className="column margin-top-36">
              <CtaButton label={buttontype} Type="Secondary" />
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
    </>
  );
};
