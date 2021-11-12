import React from 'react';
import '../../../assets/scss/_grid.scss';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const BodyColumnTwo = ({ descriptionText }) => (
  <div className="grid-x grid-margin-x">
    <div className="cell medium-4 large-4">
      <P label={descriptionText} />
    </div>
    <div className="cell medium-4 large-4">
      <P label={descriptionText} />
    </div>
  </div>
);
