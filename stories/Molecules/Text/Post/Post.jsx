import React from 'react';
import './post.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const Post = ({ headerText, countryText, descriptionText }) => (
  <div className="post-wrapper">
    <Heading type="2" label={headerText} />
    {countryText && <Heading type="5" label={countryText} />}
    <Heading type="6" label={descriptionText} />
  </div>
);
