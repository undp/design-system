import React from 'react';
import './tertiary.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { P } from '../../../Atom/Base-typography/Paragraph/p';

export const Tertiary = ({ headerText, countryText, descriptionText}) => {
  return (
     <div className='tertiary-wrapper' >
        <H4 label={headerText}/>
        <H5 label={countryText} />
        <P label={descriptionText}/>
    </div>
  );
};
