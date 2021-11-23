import React from 'react';
import './scrollbar.scss';

export const ScrollBar = ({}) => (
  <>
    <div className="scrollbar-horizontal-wrapper scrollbar-horizontal">
      <div className="scrollbar-data">.</div>
    </div>
    <div className="scrollbar-vertical-wrapper scrollbar-vertical">
      <div className="scrollbar-data__vertical" />
    </div>
  </>
);
