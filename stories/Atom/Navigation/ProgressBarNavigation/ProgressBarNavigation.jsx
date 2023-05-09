import React from 'react';
import './progress-bar-navigation.scss';
import '../../../assets/js/scrolling-progress-bar';

export const accent_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function ProgressBarNavigation({ Type, Colors, ...args }) {
  const types = ['Small'];
  let type = types.includes(Type) ? Type.toLowerCase() : '';

  let color = (Colors) ? accent_color_options[`${Colors}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className={cls('progress-container', `${type}`, `${accent_color}`)}>
      <div className="progress-bar" />
    </div>
  );
}
