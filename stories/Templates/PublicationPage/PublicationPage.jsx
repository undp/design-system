import React, { useEffect } from 'react';
import { PublicationCard } from "../../Molecules/Blocks/PublicationCard/PublicationCard";
import { Post } from '../../Molecules/Text/Post/Post';
import { P } from '../../Atom/Base-typography/Paragraph/Paragraph';
import { ContentCardWithOutImage } from '../../Components/UIcomponents/Cards/ContentCard/ContentCardWithOutImage';
import { Footer } from '../../Organism/Footer/Footer';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Breadcrumbcomponent } from '../../Components/Navigationcomponents/Breadcrumbs/Breadcrumbs';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import viewport from '../../assets/js/viewport';
import logo from '../../assets/images/logo.svg';
import logowhite from '../../assets/images/logo-white.svg';
import './publicationpage.scss';
import '../../assets/js/sticky';

export const PublicationPage = ({
    data, download, readmore, image, footerData, active, blockHeader, blockDescription, paragraphTop1, paragraphTop2, paragraphTop3, ContentCardWithOutImageData, buttontype, relatedPublicationHeading,Emphasize, Hovercolors,
  }) => {
    useEffect(() => {
        viewport('.content-card-container');
    }, []);
    return (
    <>
        <div className="grid-container fluid content-bottom">
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-11 large-offset-1">
                    <div class="column">
                        <Breadcrumbcomponent data={data} active={active} />                       
                    </div>
                </div>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="cell small-12 large-5 large-offset-1">
                    <div class="column sticky">
                        <PublicationCard 
                            image={image && <Publicationthumb/>}
                            download={download}       
                            readmore={readmore}                 
                        />
                    </div>
                </div>
                <div class="cell small-12 large-5">
                    <div class="column">
                        <Post 
                            headerText={blockHeader} 
                            descriptionText={blockDescription}                
                        />
                        <P label={paragraphTop1} className="margin-top-48"/>
                        <P label={paragraphTop2} />
                        <P label={paragraphTop3} />
                    </div>                    
                </div>
            </div>
            <div class="grid-x grid-margin-x margin-top-48">
                <div class="cell small-12 large-6 large-offset-6 border-top-2">
                    <div class="column related-publication margin-top-80">
                        <Heading 
                            type='2' 
                            label={relatedPublicationHeading} 
                        />
                        <ContentCardWithOutImage Emphasize='false'
                            data={ContentCardWithOutImageData}
                        />
                        <CtaButton className="margin-top-48" label2={buttontype} variant="Secondary" />                
                        
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
}
