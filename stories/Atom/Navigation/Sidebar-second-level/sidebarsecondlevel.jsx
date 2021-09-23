import React from 'react';
import PropTypes from 'prop-types';
import { H5 } from '../../Base-typography/Heading/h5';
import './sidebarsecondlevel.scss';

export const Sidebarsecondlevel = ({ text,  ...props }) => {
  return (
      <div className='sidebar_item__sub'  {...props}>
        {text}
      </div>
  );
};
