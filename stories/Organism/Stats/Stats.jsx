import React, { Component, useEffect } from 'react';
import { StatsPanel } from '../../Molecules/Blocks/StatsPanel/StatsPanel';
import { StatsFun } from '../../assets/js/Stats-custom';
import viewport from '../../assets/js/viewport';
import './stats.scss';

export const Stats = ({ data }) => {
  useEffect(() => {
    StatsFun('.stats-grid .statspanel');
    viewport('.stats-grid .statspanel');
  }, []);
  return (
    <div className="grid-x stats-grid">
      {data.map((item, index) => <StatsPanel number={item.number} percent={item.percent} content={item.content} delaytime={2 + index++} key={index} />)}
    </div>
  );
};
