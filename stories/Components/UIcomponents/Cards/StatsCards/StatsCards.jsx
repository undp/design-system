import React, { useEffect } from 'react';
import { fitText } from '../../../../assets/js/fitText';
import './stats-cards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';

const cls = (...classes) => {
  if (typeof fitText == 'function') {
    setTimeout(() => { fitText('.stats-card h2'); }, 200);
  }
  return classes.filter(Boolean).length > 0 ? classes.filter(Boolean).join(' ') : null;
};

export const color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
  accent: '',
};

export function StatsCards({
  title, number, percent, content, Size, ...args
}) {
  let size;
  switch (Size) {
    case 'Small':
      size = 'small';
      break;
    case 'Medium':
      size = 'medium';
      break;
    case 'Large':
      size = 'large';
      break;
    case 'Extra large':
      size = 'x-large';
      break;
    default:
      size = 'medium';
  }

  useEffect(() => {
    if (typeof fitText == 'function') {
      fitText('.stats-card h2');
    }
  }, []);

  let { accent } = args;
  let color_option = color_options[`${args.Hovercolor}`];
  let Hovercolor = (Boolean(accent)) && (!color_option) ? accent : color_option;

  return (
    <div className={cls('stats-card', `${size}`, `${Hovercolor}`)}>
      <div>
        {size == 'x-large' || size == 'large' ? (<Heading type="3" label={title} />) : null}
        <div><Heading type="2" label={number} /></div>
      </div>
      <div>
        <Heading type="4" label={percent} />
        <P label={content} />
      </div>
    </div>
  );
}
