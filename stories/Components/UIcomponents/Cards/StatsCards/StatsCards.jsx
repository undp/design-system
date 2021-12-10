import React from 'react';
import './statscards.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

export const StatsCards = ({
  title, number, percent, content, Size,
}) => {
  
  let size;
  switch(Size){
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
  <div className={['statscard', 'cell', `${size}`].join(' ')}>
    <div className="statscard__box">
      {Size == 'Extra_large' ? (<Heading type="2" className="statscard__title" label={title} />) : (<></>)}
      {Size == 'Large' ? (<Heading type="3" className="statscard__title" label={title} />) : (<></>)}
      <div className="statscard__number">{number}</div>
      <div className="statscard__per">{percent}</div>
      <P label={content} />
    </div>
  </div>
)};