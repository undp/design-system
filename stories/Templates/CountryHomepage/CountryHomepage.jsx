import React, { useEffect } from "react";
import viewport from "../../assets/js/viewport";
import { Homepageherooption } from "../../Components/UIcomponents/Hero/Homepagehero/HomepageHeroOption";
import { ContentCardWithAndWithoutImage } from "../../Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImage";
import { Heading } from "../../Atom/Typography/Heading/Heading";
import { FeaturedCard } from "../../Organism/Blocks/FeaturedContentCard/FeaturedCard/FeaturedCard";
import { HeadingBig } from "../../Molecules/Text/HeadingBig/HeadingBig";
import { PageWideCard } from "../../Organism/Blocks/FeaturedContentCard/PagewideContentCard/PageWideCard";
import { ImageRevelCards } from "../../Organism/Blocks/ImageRevelCards/ImageRevelCards";
import { StatsSlider } from "../../Patterns/StatsSlider/StatsSlider";
import CountrySiteHeader from "../../Components/Navigationcomponents/Mainnavigation/CountrySiteHeader/CountrySiteHeader"
import { Footer } from "../../Organism/Footer/Footer";
import logo from "../../assets/images/logo.svg";
import logowhite from "../../assets/images/logo-white.svg";
import "./countryhomepage.scss";

export const CountryHomepage = ({
  footerData,
  herotitle,
  herotext,
  herobtnlabel,
  herosubtitle,
  heroimgsrc,
  heroimgalt,
  featureddata,
  headertext,
  PagewidecardTag,
  PagewidecardTitle,
  PagewidecardParagraph,
  PagewidecardBtnlabel,
  StatsSliderData,
  takeactioncard,
  whatwedoheader,
  whatwedodescription,
  featureddataafterwedo,
  statHeading,
  storiesHeading,
  languageswitcherData,
  rightNavigationData,
  leftNavigationData,
  navigationData,
  gsiteTitle,
  locale,
}) => {
  return (
    <div>
      <CountrySiteHeader 
      gsiteTitle={gsiteTitle.label} 
      gsiteTheme={gsiteTitle.span}  
    locale={locale} 
    leftNavigationData={leftNavigationData} 
    navigationData={navigationData} 
    languageswitcherData={languageswitcherData} />

      <div className="grid-container fluid content-bottom">
        <div className="grid-x grid-margin-x hero-container">
          <div className="cell large-12">
            <Homepageherooption
              title={herotitle}
              content={herotext}
              button={herobtnlabel}
              subtitle={herosubtitle}
              imgsrc={heroimgsrc}
              imgalt={heroimgalt}
            />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <FeaturedCard data={featureddata} headertext={headertext} />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-11 medium-11 large-offset-1">
            <HeadingBig
              headerText={whatwedoheader}
              descriptionText={whatwedodescription}
            />
          </div>
        </div>
        <div class="grid-x margin-top-136">
          <div class="cell small-12 medium-12 large-11 large-offset-1">
            <Heading type="2" label={storiesHeading} />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <PageWideCard
              label={PagewidecardTag}
              title={PagewidecardTitle}
              paragraph={PagewidecardParagraph}
              button={PagewidecardBtnlabel}
            />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <ContentCardWithAndWithoutImage
              CardWithOutImage={featureddataafterwedo.contentdata}
              CardWithImage={featureddataafterwedo.CardWithImageData}
              storyBtn={featureddataafterwedo.storyBtn}
            />
          </div>
        </div>
        <div class="grid-x margin-top-136">
          <div class="cell small-12 medium-12 large-11 large-offset-1">
            <Heading type="2" label={statHeading} />
          </div>
          <div class="cell small-12 medium-12 large-12 margin-top-48">
            <StatsSlider data={StatsSliderData} />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-12">
            <ImageRevelCards
              data={takeactioncard.takeactiondata}
              takeActionHeading={takeactioncard.takeActionHeading}
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
        {...{ color: "blue" }}
      />
    </div>
  );
};
