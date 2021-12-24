import React, { useEffect } from 'react';
import './statspanel.scss';
import {StatsCards} from '../../../Components/UIcomponents/Cards/StatsCards/StatsCards';
import viewport from '../../../assets/js/viewport';

export const StatsPanel = ({
  number, percent, Hovercolors, content, delaytime, imageback,
}) => {
  useEffect(() => {
    viewport('.statspanel-card');
  }, []);
  return (
    <div className={`cell medium-3 statspanel-card left-right delay-${delaytime}`}>
      <div className={['stats-panel', `${[`${Hovercolors}`]}`].join(' ')}>
        <img src={imageback} alt={imageback} />
        <StatsCards number={number} percent={percent}  content={content}/>
      </div>
    </div>
  );
};

StatsPanel.defaultProps = {
  Hovercolors: 'yellow',
};
