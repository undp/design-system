import React from 'react';
import './page.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';

export const Page = ({ headerText, countryText}) => {
  return (
    <div className='Page-title' > 
      <H4 label={headerText} />
      <H2 label={countryText} />
    </div>
  );
};
