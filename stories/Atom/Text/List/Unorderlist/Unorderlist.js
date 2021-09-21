import React from 'react';
import PropTypes from 'prop-types';

export const Unorderlist = ({ text }) => {
  return (
    <ul>
      <li class="list-item">{ text }</li>
    </ul>
  );
};

Unorderlist.propTypes = {
  text: PropTypes.string,
};
