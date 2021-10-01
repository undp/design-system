import React from 'react';
import PropTypes from 'prop-types';
import { H6 } from '../../Base-typography/Heading/h6';
import './sidebar.scss';

export const SidebarFirstLevel = ({ mode, active, text,  ...props }) => {
  return (
      <div className={['Sidebar__item',`Sidebar__item--${active}`].join(' ')}  {...props}>
        <H6 label={text} />
      </div>
  );
};

SidebarFirstLevel.propTypes = {
  active: PropTypes.oneOf(['Default', 'Selected'])
};
