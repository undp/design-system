import React from 'react';
import './blockCTA.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { P } from '../../../Atom/Base-typography/Paragraph/p';
import { Ctaarrow} from '../../../Atom/Buttons-and-labels/Cta_button/cta_link_arrow';

export const BlockCTA = ({ headerText, descriptionText, ctaText}) => {
  return (
    <div className='block-cta-wrapper' >  
        <H4 label={headerText} />
        <P label={descriptionText} />
        <Ctaarrow label={ctaText} />
    </div>
  );
};
