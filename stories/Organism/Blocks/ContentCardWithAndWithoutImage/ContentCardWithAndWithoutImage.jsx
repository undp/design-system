import React from 'react';
import { ContentCardWithOutImage } from'../../../Components/UIcomponents/Cards/ContentCard/ContentCardWithOutImage';
import { ContentCardImage } from '../../../Components/UIcomponents/Cards/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import './contentcardwithandwithoutimage.scss';


export const ContentCardWithAndWithoutImage = ({ CardWithOutImage, storyBtn, CardWithImage}) => {  
    return(
    <>
        <div className="grid-x grid-margin-x margin-bottom-64 margin-top-40">
            <div className="cell large-3 small-12">                                        
                <ContentCardImage data={CardWithImage}/>
            </div>
            <div className="cell large-9 small-12">                                        
                <ContentCardWithOutImage data={CardWithOutImage}/>
            </div>
        </div>
        <CtaButton label1={storyBtn} For_Primary="No_arrow"/>
    </>
    ); 
};
