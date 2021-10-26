import React from 'react';
import './page.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const Page = ({ headerText, countryText, style }) => (
  <div className={['Page-title', `Page-title--${style}`].join(' ')}>
    <Heading type="4" label={headerText} />
    <Heading type="2" label={countryText} />
  </div>
);
