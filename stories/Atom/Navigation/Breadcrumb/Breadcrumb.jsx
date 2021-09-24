import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.scss';

export const Breadcrumb = ({ style, text, ...props }) => {
  return (
    <span className={['breadcrumb_item',`breadcrumb_item--${style}`].join(' ')}   {...props}><a href="#">{text}</a></span>
  );
};
