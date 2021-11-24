import React from 'react';
import './tertiary.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const Tertiary = ({ headerText, countryText, descriptionText }) => (
  <div className="tertiary-wrapper">
    <Heading type="4" label={headerText} />
    <Heading type="5" label={countryText} />
    <P label={descriptionText} />
  </div>
);
