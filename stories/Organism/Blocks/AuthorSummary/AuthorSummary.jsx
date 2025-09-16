import React from 'react';
import './author-summary.scss';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';
import { Authorimg } from '../../../Atom/Images/AuthorImage/AuthorImages';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import isChromatic from "chromatic/isChromatic";

export function AuthorSummary({
  Authorlabel,
  para,
  image,
  text,
  para1,
  ...args
}) {
  return (
    <div className={['author-summary', isChromatic() ? 'inviewport' : ''].join(' ')} data-viewport={isChromatic() ? '' : 'true'}>
      <div className="author-summary-left">
        <Authorimg image={image} variant="Large" alt="Author" {...args} />
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
}
