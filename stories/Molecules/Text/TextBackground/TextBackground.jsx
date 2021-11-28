import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './textbackground.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const TextBackground = ({ headerText, descriptionText }) => {
  useEffect(() => {
    viewport('.heading-container');
  }, []);
  return (
    <div className="grid-x grid-margin-x heading-container left-right">
      <div className="cell medium-3">
        <Heading type="2" label={headerText} />
      </div>
      <div className="cell medium-7">
        <Heading type="4" label={descriptionText} />
      </div>
    </div>
  );
};
