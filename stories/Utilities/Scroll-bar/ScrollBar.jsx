import React from 'react';
import './scrollbar.scss';

export const ScrollBar = () => (
  <>
    <div className="scrollbar-horizontal-wrapper scrollbar-horizontal" tabIndex="0">
      <div className="scrollbar-data">.</div>
    </div>
    <div className="scrollbar-vertical-wrapper scrollbar-vertical" tabIndex="0">
      <div className="scrollbar-data__vertical" />
    </div>
  </>
);
