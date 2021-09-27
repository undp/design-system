import React from 'react';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';

export const SectionHeader = ({ headerText, descriptionText}) => {
  return (
    <div className='header-wrapper' >  
        <H2 label={headerText} />
        <H4 label={descriptionText} />
    </div>
  );
};
