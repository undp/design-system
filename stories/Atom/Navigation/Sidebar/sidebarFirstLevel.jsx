import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import './sidebar.scss';

export const SidebarFirstLevel = ({ mode, active, text,  ...props }) => {
  return (
      <div className={['Sidebar_item',`Sidebar_item--${active}`].join(' ')}  {...props}>
        <Heading type='6'  label={text} />
      </div>
  );
};

SidebarFirstLevel.propTypes = {
  active: PropTypes.oneOf(['Default', 'Selected'])
};
