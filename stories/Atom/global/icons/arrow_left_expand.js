import React from 'react';
import icon from '../../../assets/images/icon/arrow-left-expand.svg'
import '../icons/icons.scss';

export const Iconarrowleftexpand = ({ varient,...props}) => {
  const image = {
    src: icon,
    alt: 'icon',
  };
  return (
  <div className={'icon'} {...props} > 
    <svg class="arrow-expand" viewBox="0 0 80 16" xmlns="http://www.w3.org/2000/svg">
      <g class="arrow-expand-group" stroke-width="2">
          <line class="arrow-line" x1="0" y1="8" x2="80" y2="8"></line>
          <polyline class="arrow-point" points="39.5 0.5, 48 8, 39.5 16"></polyline>
      </g>
    </svg>
    </div > 
  );
};