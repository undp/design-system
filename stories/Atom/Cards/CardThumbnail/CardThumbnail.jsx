import React from 'react';
import './card-thumbnail.scss';

export function Cardthumb({ image, ...args }) {
  return (
    <div className={['card-thumbnail__image', args.accent].join(' ')}>
      <img src={image} alt={image} />
    </div>
  );
}
