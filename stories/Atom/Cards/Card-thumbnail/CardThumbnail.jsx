import React from 'react';
import './card-thumbnail.scss';

export const hover_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  azure: 'azure',
};

export const Cardthumb = ({ image, ...args }) => {
  let color_variant = hover_color_options[`${args.hovercolor}`];
  return (
    <div className={['card-thumbnail__image', `${color_variant}`].join(' ')}>
      <img src={image} alt={image} />
    </div>
  );
};

Cardthumb.defaultProps = {
  hovercolor: 'yellow',
};
