import React from 'react';
import './progress-bar-navigation.scss';
import '../../../assets/js/scrolling-progress-bar';

export const color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  blue: 'blue',
  accent: '',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function ProgressBarNavigation({ Type, Colors, ...args }) {
  let type;
  const types = ['Small'];
  type = types.includes(Type) ? Type.toLowerCase() : '';

  let { accent } = args;
  let arg_color = color_options[`${Colors}`];
  let color = (Boolean(accent)) && (!arg_color) ? accent : arg_color;

  return (
    <div className={cls('progress-container', `${type}`, `${color}`)}>
      <div className="progress-bar" />
    </div>
  );
}
