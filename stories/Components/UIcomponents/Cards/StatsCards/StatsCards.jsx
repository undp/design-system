import React from 'react';
import './statscards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

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
    <div className={['statscard', `${size} ${Hovercolors}`].join(' ')}>
      <div className="statscard__box">
        {Size == 'Extra_large' ? (<Heading type="2" className="statscard__title" label={title} />) : (<></>)}
        {Size == 'Large' ? (<Heading type="3" className="statscard__title" label={title} />) : (<></>)}
        <h2 className="statscard__number">{number}</h2>
        <h4 className="statscard__per">{percent}</h4>
        <P label={content} />
      </div>
    </div>
  );
};

StatsCards.defaultProps = {
  Hovercolors: 'yellow',
};
