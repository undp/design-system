import React, { Component, useEffect } from 'react';
import { StatsPanel } from '../../Molecules/Blocks/StatsPanel/StatsPanel';
import { StatsHover } from '../../assets/js/stats';
import viewport from '../../assets/js/viewport';
import './stats.scss';

export const Stats = ({ data, imageback }) => {
  useEffect(() => {
    StatsHover('.stats-grid .stats-panel');
    viewport('.stats-panel-card');
  }, []);
  return (
    <div className="grid-x stats-grid">
      {data.map((item, index) => (
        <div className={`cell medium-3 stats-panel-card left-right delay-${2 + index++}`} key={index}>
          <StatsPanel number={item.number} imageback={imageback} percent={item.percent} content={item.content} />
        </div>
      ))}
    </div>
  );
};
