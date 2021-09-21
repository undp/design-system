import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.scss';

export const Blockquote = ({ text }) => {
  return (
      <blockquote >
        {text}
      </blockquote>
  );
};

Blockquote.propTypes = {
  text: PropTypes.string,
};

