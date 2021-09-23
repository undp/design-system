import React from 'react';
import './breadcrumb.scss';

export const BreadcrumbLast = ({ style, text, ...props }) => {
  return (
    <ul className={['breadcrumb',`breadcrumb--${style}`].join(' ')}   {...props}>
      <li>{text}</li>
    </ul>
  );
};
