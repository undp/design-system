import React from 'react';
import './cta-block.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';

export const CtaBlock = ({ headerText, descriptionText, ctaText }) => (
  <div className="cta-block">
    <Heading type="4" label={headerText} />
    <P label={descriptionText} />
    <Ctalink label={ctaText} />
  </div>
);
