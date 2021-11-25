import React from 'react';
import { ProgressBarNavigation } from '../../Atom/Navigation/ProgressBarNavigation/ProgressBarNavigation';
import { PageHero } from '../../Components/UIcomponents/Hero/Pagehero/PageHero';
import { ContentCard } from '../../Organism/Blocks/ContentCard/ContentCard';
import { Sidebar } from "../../Components/Navigationcomponents/Sidebar/Sidebar";
import { Heading } from '../../Atom/Typography/Heading/Heading';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import {FluidImageSizeCarousel} from '../../Components/UIcomponents/Carousel/FluidImageSizeCarousel/FluidImageSizeCarousel';
import { Footer } from '../../Organism/Footer/Footer';
import logo from '../../assets/images/logo.svg';
import logowhite from '../../assets/images/logo-white.svg';
import './genericpage.scss';

export const GenericPage = ({
    herodata, title, content, active,imgsource,altname, topHeading, topParagraph, footerData, sidebarCaptionData, ContentCardData, headingMissionVision,
    paraMissionVision,
    headingHistory,
    paraHistory,
    headingUNcharter,
    paraUNcharter,
    carouselData
  }) => (
    <>
        <div className="grid-container fluid">
            <div className="grid-x grid-margin-x">
                <div className="cell large-12">                    
                    <ProgressBarNavigation/>
                    <PageHero 
                        data={herodata} 
                        title={title} 
                        content={content}
                        imgsrc={imgsource}
                        imgalt={altname}
                    />
                </div>
            </div>
        </div>
        <div class="grid-container fluid contentbottom">      
            <div class="grid-x grid-margin-x margin_top-four">
                <div class="cell large-3 small-12 sidebar-width">
                    <div class="column">
                        <Sidebar
                             data={sidebarCaptionData.sidebardata}
                             headerText={sidebarCaptionData.headerText}
                             label={sidebarCaptionData.label}
                             active={sidebarCaptionData.active}
                        />
                    </div>
                </div>
                <div class="cell large-9 small-12">
                    <div class="grid-x grid-margin-x">
                        <div class="cell large-10 small-12">
                            <div class="column">
                                <Heading 
                                    type='2' 
                                    label={topHeading} 
                                />
                            </div>
                        </div>
                        <div class="cell large-10 small-12">
                            <div class="column">
                                <P label={topParagraph} />
                            </div>
                        </div>
                        <div class="cell large-12 small-12 margin_top-five">
                            <div class="column">
                                <FluidImageSizeCarousel
                                    data={carouselData}
                                />
                            </div>
                        </div>                        
                        <div class="cell large-9 small-12 margin_top-three">
                            <div class="column">
                                <Heading 
                                    type='3' 
                                    label={headingMissionVision} 
                                />
                            </div>    
                        </div>
                        <div class="cell large-10 small-12">
                            <div class="column">
                                <P label={paraMissionVision} />
                            </div>
                        </div>
                        
                        <div class="cell large-9 small-12 margin_top-three">
                            <div class="column">
                                <Heading 
                                    type='3' 
                                    label={headingUNcharter} 
                                />
                            </div>
                        </div>
                        <div class="cell large-10 small-12">
                            <div class="column">
                                <P label={paraUNcharter} />
                            </div>
                        </div>

                        <div class="cell large-9 small-12 margin_top-three">
                            <div class="column">
                                <Heading 
                                    type='3' 
                                    label={headingHistory}  
                                />
                            </div>
                        </div>
                        <div class="cell large-10 small-12">
                            <div class="column">
                                <P label={paraHistory} />
                            </div>
                        </div>    
                        <div class="column margin_top-three">
                            <ContentCard 
                                data={ContentCardData.groupcontentdata}
                                buttontype={ContentCardData.buttonname}
                            />
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
    </>
  );
  