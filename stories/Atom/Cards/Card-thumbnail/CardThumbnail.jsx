import React from 'react';
import './card-thumbnail.scss';

export const hover_color_options = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
  azure: 'azure',
};

export const Cardthumb = ({ image, ...args }) => (
  <div className={['card-thumbnail__image', `${hover_color_options[`${args.hovercolor}`]}`].join(' ')}>
    <img src={image} alt={image} />
  </div>
);

Cardthumb.defaultProps = {
  hovercolor: 'yellow',
};
