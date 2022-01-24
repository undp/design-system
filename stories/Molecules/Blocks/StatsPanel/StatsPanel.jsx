import React from 'react';
import './stats-panel.scss';
import { StatsCards } from '../../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const Hovercolors_options = {
  yellow: '',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const StatsPanel = ({
  number, percent, content, imageback, ...args
}) => {
  let screen_variant = Hovercolors_options[`${args.Hovercolors}`];
  return (
    <div className={cls('stats-panel', `${screen_variant}`)}>
      <img src={imageback} alt={imageback} />
      <StatsCards number={number} percent={percent} content={content} />
    </div>
  );
};

StatsPanel.defaultProps = {
  Hovercolors: 'yellow'
};
