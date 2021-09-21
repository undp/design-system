import React from 'react';
import PropTypes from 'prop-types';
import './page.scss';
import { H4 } from '../../../Atom/Base-typography/Heading/h4';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';

export const Page = ({ sizes}) => {
  return (
<div className={sizes}>
    <div className='Page-title' > 
      <H4 label='Our Focus' />
      <H2 label='OThe sdgs in action' />
    </div>
</div>
  );
};

