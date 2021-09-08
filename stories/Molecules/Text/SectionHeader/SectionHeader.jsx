import React from 'react';
import './SectionHeader.scss';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';

export const SectionHeader = ({ }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className='header-wrapper' >  
          <H2 label='Section Header' />
          <H4 label='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      </div>
    </div>
  );
};


