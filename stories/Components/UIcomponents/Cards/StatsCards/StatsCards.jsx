import React, { useEffect } from 'react';
import { FontResize } from '../../../../assets/js/font_resize';
import './stats-cards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Hovercolors_options = {
  yellow: '',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

export const StatsCards = ({
  title, number, percent, content, Size, ...args
}) => {
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
    case 'Extra_large':
      size = 'x-large';
      break;
    default:
      size = 'medium';
  }

  useEffect(() => {
    
  }, []);

  let screen_variant = Hovercolors_options[`${args.Hovercolors}`];
  return (
    <div className={cls('stats-card', `${size}`, `${screen_variant}`)}>
      {Size == 'Extra_large' || Size == 'Large' ? (<Heading type="3" label={title} />) : (<></>)}
      <Heading type="2" label={number} />
      <Heading type="4" label={percent} />
      <P label={content} />
    </div>
  );
};

StatsCards.defaultProps = {
  Hovercolors: 'yellow'
};
