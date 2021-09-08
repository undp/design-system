import React from 'react';
import PropTypes from 'prop-types';

export const Orderlist = ({ text }) => {
  return (
    <ol>
        <li class="list-item">{ text }</li>
    </ol>
  );
};

Orderlist.propTypes = {
  text: PropTypes.string,
};
