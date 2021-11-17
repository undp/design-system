import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './authorsummary.scss';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Authorimg } from '../../../Atom/Images/Authorimage/Authorimages';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const AuthorSummary = ({
  Authorlabel, para, image, text, para1,
}) => {
  useEffect(() => {
    viewport('.author-card');
  }, []);
  return (
    <div className="author-card-wrapper">
      <Heading type="4" label={text} />
      <div className="author-card left-right">
        <div className="author-card__summary">
          <Authorimg
            className="author-card__summary--image"
            image={image}
            variant="Large"
          />
          <div className="author-card__summary--text">
            <Heading type="2" label={Authorlabel} />
            <P label={para1} />
          </div>
        </div>
        <P label={para} className="author-card__paragraph" />
      </div>
    </div>
  );
};
