import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.scss';

export const Breadcrumb = ({ style, text, ...props }) => {
  return (
    <ul className={['breadcrumb',`breadcrumb--${style}`].join(' ')}   {...props}>
      <li><a href="#">{text}</a></li>
    </ul>
  );
};

Breadcrumb.propTypes = {
  color: PropTypes.oneOf(['Red', 'White' ])
};
