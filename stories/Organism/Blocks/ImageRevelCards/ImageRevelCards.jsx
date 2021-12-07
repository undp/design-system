import React, { useEffect } from 'react';
import { ImageRevelCard } from '../../../Components/UIcomponents/Cards/ImageRevelCTACard/ImageCard';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import '../../../Templates/PublicationPage/publicationpage.scss';

export const ImageRevelCards = ({ data, takeActionHeading }) => {  
    return(
    <>
        <div class="grid-x margin-top-136">        
            <div class="cell small-12 medium-12 large-12 text-center">                
                <div class="column">
                    <Heading type='2' label={takeActionHeading} />
                </div>
            </div>
            <div class="cell small-12 medium-12 large-12 margin-top-24">                
                <div class="column">
                    <ImageRevelCard data={data}/>
                </div>
            </div>
        </div>
    </>
    ); 
};
