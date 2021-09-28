import React from 'react';
import './page.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';

export const Page = ({ headerText, countryText, style }) => {
  return (
    <div className={['Page-title',`Page-title--${style}`].join(' ')}  > 
      <H4 label={headerText} />
      <H2 label={countryText} />
    </div>
  );
};
