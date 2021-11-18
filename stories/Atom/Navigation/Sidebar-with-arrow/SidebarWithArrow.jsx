import React from 'react';
import { Heading } from '../../Base-typography/Heading/Heading';
import './SidebarWithArrow.scss';

export const SidebarWithArrow = ({ Mode, text }) => (
  <div className={['sidebar_item_arrow', `${Mode}`].join(' ')}>
    <Heading type="6" label={text} />
    {Mode === 'default' || Mode === 'default-up'
      ? (
        <>
          <div className="icon-chevron-down" />
        </>
      )
      : (
        <>
          <div className="icon-chevron-down-white" />
        </>
      )}
  </div>
);

SidebarWithArrow.defaultProps = {
  Mode: 'default',
};
