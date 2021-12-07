import React from 'react';
import './statscards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

export const size_options = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  Extra_large: 'x-large',
};

export const StatsCards = ({
  title, number, percent, content, Size,
}) => (
  <div className={['statscard', 'cell', `${size_options[`${Size}`]}`].join(' ')}>
    <div className="statscard__box">
      {Size == 'Extra_large' ? (<Heading type="2" className="statscard__title" label={title} />) : (<></>)}
      {Size == 'Large' ? (<Heading type="3" className="statscard__title" label={title} />) : (<></>)}
      <div className="statscard__number">{number}</div>
      <div className="statscard__per">{percent}</div>
      <P label={content} />
    </div>
  </div>
);
