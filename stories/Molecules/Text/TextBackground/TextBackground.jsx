import React from 'react';
import './textbackground.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export function TextBackground({ headerText, descriptionText }) {
  return (
    <div className="grid-x heading-container align-center" data-viewport="true">
      <div className="cell medium-3">
        <Heading type="2" label={headerText} />
      </div>
      <div className="cell medium-7">
        <Heading type="4" label={descriptionText} />
      </div>
    </div>
  );
}
