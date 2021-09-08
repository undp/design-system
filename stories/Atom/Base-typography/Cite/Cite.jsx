import React from 'react';
import PropTypes from 'prop-types';
import './cite.scss';

/**
 * Primary UI component for user interaction
 */
export const Cite = ({ text }) => {
  return (
    <cite>
      {text}
    </cite>
  );
};

Cite.propTypes = {
  /**
   * Blockquote contents
   */
  text: PropTypes.string.isRequired,
};

