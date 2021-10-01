import React from 'react';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';

export const SectionHeader = ({ headerText, descriptionText}) => {
  return (
    <div className='header-wrapper' >  
        <Heading type='2' label={headerText} />
        <Heading type='4' label={descriptionText} />
    </div>
  );
};
