import React from 'react';
import './page.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';

export const Page = ({ headerText, countryText, style }) => {
  let style_variant = style ? ` ${style}` : '';
  return (
    <div className={['page-title', `${style_variant}`].join('')}>
      <Heading type="4" label={headerText} />
      <Heading type="2" label={countryText} />
    </div>
  );
};
