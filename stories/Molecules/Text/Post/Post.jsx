import React from 'react';
import PropTypes from 'prop-types';
import './post.scss';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { H6 } from '../../../Atom/Base-typography/Heading/h6';

export const Post = ({ }) => {
  return (
    <div className='post-wrapper' >  
     <H2 label='Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19' />
    <H5 label='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet consequat vulputate.' />
    <H6 label='Posted 27 January, 2021' />
    </div>
  );
};

