import React from 'react';
import './post.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import isChromatic from "chromatic/isChromatic";

export const Post = ({ headerText, countryText, descriptionText }) => (
  <div className="post-wrapper" data-viewport={isChromatic() ? '' : 'true'}>
    <Heading type="2" label={headerText} />
    {countryText && <Heading type="5" label={countryText} />}
    <Heading type="6" label={descriptionText} />
  </div>
);
