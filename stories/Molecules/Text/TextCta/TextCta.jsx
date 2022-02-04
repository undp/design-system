import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './textcta.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-Typography/Paragraph/Paragraph';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export const TextCta = ({ headerText, descriptionText, label }) => {
  useEffect(() => {
    viewport('.trusted-partnerships__container');
  }, []);
  return (
    <div className="grid-x trusted-partnerships__container left-right">
      <div className="cell medium-7 small-12 medium-offset-1 trusted-partnerships--header">
        <Heading type="2" label={headerText} />
        <P label={descriptionText} />
        <CtaButton label={label} />
      </div>
    </div>
  );
};
