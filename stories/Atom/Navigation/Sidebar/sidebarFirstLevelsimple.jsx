import React from 'react';
import PropTypes from 'prop-types';
import { H6 } from '../../Base-typography/Heading/h6';
import './sidebar.scss';

export const SidebarFirstLevelSimple = ({ active, text,  ...props }) => {
  return (
    <div className={['Sidebar_item',`Sidebar_item--${active}`].join(' ')}   {...props}>
      <H6 label= "Page Title" />
    </div>
  );
};

SidebarFirstLevelSimple.propTypes = {
  active: PropTypes.oneOf(['Default', 'Selected'])
};
