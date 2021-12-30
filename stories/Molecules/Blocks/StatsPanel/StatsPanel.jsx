import React, { useEffect } from 'react';
import './statspanel.scss';
import { StatsCards } from '../../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const StatsPanel = ({
  number, percent, Hovercolors, content, delaytime, imageback,
}) => (
  <div className={['stats-panel', `${[`${Hovercolors}`]}`].join(' ')}>
    <img src={imageback} alt={imageback} />
    <StatsCards number={number} percent={percent} content={content} />
  </div>
);

StatsPanel.defaultProps = {
  Hovercolors: 'yellow',
};
