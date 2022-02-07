import React from 'react';
import './author-summary.scss';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Authorimg } from '../../../Atom/Images/AuthorImage/AuthorImages';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const AuthorSummary = ({
  Authorlabel, para, image, text, para1,
}) => (
  <div className="author-summary" data-viewport="true">
    <div className="author-summary-left">
      <Authorimg image={image} variant="Large" alt="Author" />
      <div className="author-summary-text">
        <Heading type="2" label={Authorlabel} />
        <P label={para1} />
      </div>
    </div>
    <div className="author-summary-right">
      <P label={para} />
    </div>
  </div>
);
