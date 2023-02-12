import React from 'react';
import './stats-panel.scss';
import { StatsCards } from '../../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
  accent: '',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function StatsPanel({
  number,
  percent,
  content,
  imageback,
  ...args
}) {
  const { accent } = args;
  const hovercolor = color_options[`${args.Hovercolors}`];
  const Color = (Boolean(accent)) && (!hovercolor) ? accent : hovercolor;
  return (
    <div className={cls('stats-panel', `${Color}`)}>
      <img src={imageback} alt={imageback} />
      <StatsCards number={number} percent={percent} content={content} />
    </div>
  );
}

StatsPanel.defaultProps = {
  Hovercolors: 'accent',
};
