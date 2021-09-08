import React from 'react';
import PropTypes from 'prop-types';

export const Definationlist = ({ text , label }) => {
  return (
    <dl>
      <dt>{ label }</dt>
        <dd class="list-item">{ text }</dd>
    </dl>
  );
};

Definationlist.propTypes = {
  text: PropTypes.string,
};
