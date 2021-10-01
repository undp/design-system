import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import './sidebarsecondlevel.scss';

export const Sidebarsecondlevel = ({ text,  ...props }) => {
  return (
      <div className='sidebar_item__sub'  {...props}>
        {text}
      </div>
  );
};
