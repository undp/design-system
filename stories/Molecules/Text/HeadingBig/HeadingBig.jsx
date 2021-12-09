import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './headingbig.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import '../../../assets/js/smoothbgchange';

export const HeadingBig = ({ headerText, descriptionText }) => {
  useEffect(() => {
    viewport('.heading-big');
  }, []);
  return(
    <div className="heading-big grid-x grid-margin-x" data-color="blue">
      <div className="cell  medium-4 large-4">
        <Heading type="2" label={headerText} />
      </div>
      <div className="cell  medium-8 large-8">
        <Heading type="4" label={descriptionText} />
      </div>
    </div>
  );
}
