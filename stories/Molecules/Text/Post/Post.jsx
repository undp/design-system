import React from 'react';
import './post.scss';
import { H2 } from '../../../Atom/Base-typography/Heading/h2';
import { H5 } from '../../../Atom/Base-typography/Heading/h5';
import { H6 } from '../../../Atom/Base-typography/Heading/h6';

export const Post = ({ headerText, countryText, descriptionText }) => {
  return (
    <div className='post-wrapper' >  
     <H2 label={headerText} />
     <H5 label={countryText} />
     <H6 label={descriptionText} />
    </div>
  );
};
