import React from 'react';
import PropTypes from 'prop-types';
import './blockquote.scss';

/**
 * Primary UI component for user interaction
 */
export const Blockquote = ({ text }) => {
  return (
    <blockquote
      cite=""
    >
      {text}
    </blockquote>
  );
};

Blockquote.propTypes = {
  /**
   * Blockquote contents
   */
  text: PropTypes.string,
};

