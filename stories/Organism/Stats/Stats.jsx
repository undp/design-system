import React, { useEffect } from 'react';
import { StatsPanel } from '../../Molecules/Blocks/StatsPanel/StatsPanel';
import { statsHover } from '../../assets/js/stats';
import './stats.scss';
import '../../assets/scss/_grid.scss';

export function Stats({
  data,
  imageback,
  ...args
}) {
  useEffect(() => {
    statsHover();
  }, []);
  return (
    <div className="grid-x stats-grid">
      {data.map((item, index) => (
        <div className={`cell medium-3 delay-${2 + index++}`} key={index} data-viewport="true">
          <StatsPanel number={item.number} imageback={imageback} percent={item.percent} content={item.content} {...args} />
        </div>
      ))}
    </div>
  );
}
