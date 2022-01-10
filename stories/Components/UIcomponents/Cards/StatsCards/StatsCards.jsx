import React from 'react';
import './statscards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const StatsCards = ({
  title, number, percent, content, Size, Hovercolors,
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

  return (
    <div className={cls('statscard', `${size}`, `${Hovercolors}`)}>
      <div className="statscard__box">
        {Size == 'Extra_large' || Size == 'Large' ? (<Heading type="3" label={title} />) : (<></>)}
        <Heading type="2" label={number} />
        <Heading type="4" label={percent} />
        <P label={content} />
      </div>
    </div>
  );
};

StatsCards.defaultProps = {
  Hovercolors: '',
};
