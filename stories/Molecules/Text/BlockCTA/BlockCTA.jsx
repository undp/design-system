import React from 'react';
import './blockCTA.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';

export const BlockCTA = ({ headerText, descriptionText, ctaText }) => (
  <div className="paragraph-block">
    <Heading type="4" label={headerText} />
    <P label={descriptionText} />
    <Ctalink label={ctaText} />
  </div>
);
