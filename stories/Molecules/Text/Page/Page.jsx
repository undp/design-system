import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';

export const Page = ({ }) => {
  return (
<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
    <div className='Page-title' > 
      <H4 label='Our Focus' />
      <H2 label='OThe sdgs in action' />
    </div>
</div>
  );
};

