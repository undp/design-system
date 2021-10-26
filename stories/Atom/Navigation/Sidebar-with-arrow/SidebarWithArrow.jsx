import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../Base-typography/Heading/Heading';
import './SidebarWithArrow.scss';

export const SidebarWithArrow = ({
  mode, active, text, ...props
}) => (
  <div className={['Sidebar_item_arrow', `Sidebar_item_arrow--${active}`].join(' ')} {...props}>
    <Heading type="6" label={text} />
    <span className="arrow" />
  </div>
);

SidebarWithArrow.propTypes = {
  active: PropTypes.oneOf(['Default', 'Selected']),
};
