import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../Base-typography/Heading/Heading';
import './sidebar.scss';

export const SidebarFirstLevel = ({
  mode, active, text, ...props
}) => (
  <div className={['sidebar_item', `${active}`].join(' ')} {...props}>
    <Heading type="6" label={text} />
  </div>
);

SidebarFirstLevel.defaultProps = {
  active: 'default',
};
