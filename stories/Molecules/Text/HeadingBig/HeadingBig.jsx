import React from 'react';
import './headingbig.scss';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';

export const HeadingBig = ({ headerText, descriptionText}) => {
  return (
  <div className="heading-big-wrapper grid-x grid-margin-x">
    <div className="cell  medium-4 large-4">
        <H2 label={headerText} />
    </div>
    <div className="cell  medium-8 large-8">
        <H4 label={descriptionText} />
    </div>
  </div>
  );
};
