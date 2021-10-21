import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../Base-typography/Heading/Heading';
import './SidebarWithArrow.scss';

export const SidebarWithArrow = ({ mode, active, text, ...args }) => {
  return (
    <div className={['Sidebar_item_arrow',`Sidebar_item_arrow--${active}`].join(' ')} >
      <Heading type='6' label={text} />
      {active === 'Default' || active === 'Default-up' ?
        <>
          <div className='icon-chevron-down'></div>
        </>
        :
        <>
          <div className='icon-chevron-down-white'></div>
        </>
      }
    </div>
  );
};

SidebarWithArrow.defaultProps = {
  active: "Default",
};
