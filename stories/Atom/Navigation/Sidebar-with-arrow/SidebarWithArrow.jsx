import React from 'react';
import PropTypes from 'prop-types';
import { H6 } from '../../Base-typography/Heading/h6';
import './SidebarWithArrow.scss';

export const SidebarWithArrow = ({ mode, active, text,  ...props }) => {
  return (
    <div className={['Sidebar_item_arrow',`Sidebar_item_arrow--${active}`].join(' ')}  {...props}>
      <H6 label={text} />
      <span className="arrow"></span>
    </div>
  );
};

SidebarWithArrow.propTypes = {
  active: PropTypes.oneOf(['Default', 'Selected'])
};

