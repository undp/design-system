import React from 'react';
import './textcta.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export const TextCta = ({ headerText, descriptionText, label }) => (
  <div className="grid-x trusted-partnerships__container" data-viewport="true">
    <div className="cell medium-7 small-12 medium-offset-1 trusted-partnerships--header">
      <Heading type="2" label={headerText} />
      <P label={descriptionText} />
      <CtaButton label={label} />
    </div>
  </div>
);
