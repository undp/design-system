import React from 'react';
import './stats-panel.scss';
import { StatsCards } from '../../../Components/UIcomponents/Cards/StatsCards/StatsCards';

export const accent_color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function StatsPanel({
  number,
  percent,
  content,
  imageback,
  ...args
}) {
  let color = (args.Hovercolors) ? accent_color_options[`${args.Hovercolors}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className={cls('stats-panel', `${accent_color}`)}>
      <img src={imageback} alt={imageback} />
      <StatsCards number={number} percent={percent} content={content} />
    </div>
  );
}

StatsPanel.defaultProps = {
  Hovercolors: 'accent',
};
