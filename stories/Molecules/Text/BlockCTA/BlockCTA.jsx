import React from 'react';
import './blockCTA.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctaarrow} from '../../../Atom/Buttons-and-labels/Cta_button/cta_link_arrow';

export const BlockCTA = ({ headerText, descriptionText, ctaText}) => {
  return (
    <div className='block-cta-wrapper' >  
        <Heading type='4' label={headerText} />
        <P label={descriptionText} />
        <Ctaarrow label={ctaText} />
    </div>
  );
};
