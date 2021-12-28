import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './headingbig.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import '../../../assets/js/smoothbgchange';

export const HeadingBig = ({ headerText, descriptionText }) => {
  useEffect(() => {
    viewport('.heading-big');
  }, []);
  return (
    <div className="grid-x heading-big  align-center" data-color="blue">
      <div className="cell  medium-4">
        <Heading type="2" label={headerText} />
      </div>
      <div className="cell  medium-6">
        <Heading type="4" label={descriptionText} />
      </div>
    </div>
  );
};
