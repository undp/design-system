import React, { useEffect } from 'react';
import { StatsPanel } from '../../Molecules/Blocks/StatsPanel/StatsPanel';
import { StatsHover } from '../../assets/js/stats';
import './stats.scss';

export const Stats = ({ data, imageback }) => {
  useEffect(() => {
    StatsHover();
  }, []);
  return (
    <div className="grid-x stats-grid">
      {data.map((item, index) => (
        <div className={`cell medium-3 delay-${2 + index++}`} key={index} data-viewport="true">
          <StatsPanel number={item.number} imageback={imageback} percent={item.percent} content={item.content} />
        </div>
      ))}
    </div>
  );
};
