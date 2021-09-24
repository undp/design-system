import React from 'react';
import './breadcrumb.scss';

export const BreadcrumbLast = ({ style, text, ...props }) => {
  return (
      <span className={['breadcrumb_item',`breadcrumb_item--${style}`].join(' ')}   {...props}>{text}</span>
  );
};
