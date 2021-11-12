import React, { useEffect } from 'react';
import './post.scss';
import viewport from '../../../assets/js/viewport';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const Post = ({ headerText, countryText, descriptionText }) => {
  useEffect(() => {
    viewport('.post-wrapper');
  }, []);
  return (
    <div className="post-wrapper left-right">
      <Heading type="2" label={headerText} />
      {countryText && <Heading type="5" label={countryText} />}
      <Heading type="6" label={descriptionText} />
    </div>
  );
};
