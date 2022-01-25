import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './author-summary.scss';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Authorimg } from '../../../Atom/Images/Authorimage/Authorimages';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const AuthorSummary = ({
  Authorlabel, para, image, text, para1,
}) => {
  useEffect(() => {
    viewport('.author-summary');
  }, []);
  return (
    <div className="author-summary left-right">
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
};
