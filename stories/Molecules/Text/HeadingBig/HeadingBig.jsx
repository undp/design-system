import React from 'react';
import './headingbig.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const HeadingBig = ({ headerText, descriptionText}) => {
  return (
  <div className="heading-big-wrapper grid-x grid-margin-x">
    <div className="cell  medium-4 large-4">
        <Heading type='2' label={headerText} />
    </div>
    <div className="cell  medium-8 large-8">
        <Heading type='4' label={descriptionText} />
    </div>
  </div>
  );
};
