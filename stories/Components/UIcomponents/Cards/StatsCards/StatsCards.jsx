import React from 'react';
import './statscards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

export const StatsCards = ({
  title, titlesec, number, percent, content, size,
}) => (
  <div className={['statscard', 'cell', `${size}`].join(' ')}>
    <div className="statscard__box">
      {title && <Heading type="2" className="statscard__title" label={title} />}
      {titlesec && <Heading type="3" className="statscard__title" label={titlesec} />}
      <div className="statscard__number">{number}</div>
      <div className="statscard__per">{percent}</div>
      <P label={content} />
    </div>
  </div>
);
