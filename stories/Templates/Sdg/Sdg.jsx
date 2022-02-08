import React, { useEffect } from 'react';
import './sdg.scss';
import { PageHero } from '../../Components/UIcomponents/Hero/PageHero/PageHero';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/undp-logo-blue.svg';
import logowhite from '../../assets/images/undp-logo-white.svg';
import { sdgModal } from '../../assets/js/sdg-modal';
import { Sdg } from '../../Molecules/Sdg/Sdg';
import { Sdgmodal } from '../../Molecules/Sdgmodal/Sdgmodal';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import GlobalHeader from '../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader';

export const SdgPage = ({
  herodata, title, active, imgsource, altname, footerData, statsData, goaldata, modaltitle, description, modalgoaltitle, modalsdgimg, modalsdgimgalt, goalcount, Sdgnewdata, imgsrcsdg, sdgtitle, goaltitle, goalpara, languageswitcherData, rightNavigationData, backcaption, contentdata, storyBtn, Sdgcontenttitle, locationData, langSelect, nextcardtitle, leftNavigationData, navigationData, locale,
}) => {
  useEffect(() => {
    sdgModal();
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
      <div className="sdg-banner">
        <PageHero
          data={herodata}
          title={title}
          imgsrc={imgsource}
          imgalt={altname}
          active={active}
        />
      </div>
      <div className="grid-container">
        <div className="grid-x what-goal">
          <div className="cell large-3 medium-5 small-9 small-offset-1">
            <Heading type="2" label={goaltitle} />
          </div>
          <div className="cell large-6 medium-4 small-10 small-offset-1">
            <Heading type="4" label={goalpara} />
          </div>
        </div>
      </div>
      <div className="sdg-card-list">
        <Sdg data={Sdgnewdata} imgsrc={imgsrcsdg} title={sdgtitle} />
        <Sdgmodal goaldata={goaldata} statsData={statsData} goalcount={goalcount} modaltitle={modaltitle} description={description} goaltitle={modalgoaltitle} sdgimg={modalsdgimg} alt={modalsdgimgalt} title={modalsdgimgalt} contentdata={contentdata} storyBtn={storyBtn} Sdgcontenttitle={Sdgcontenttitle} nextcardtitle={nextcardtitle} />
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
