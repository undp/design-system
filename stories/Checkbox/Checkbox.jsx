import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({}) => {
  return (
    <span className="checkbox-label">
      <input type="checkbox" />
      <span id="checkmark" className="checkbox-custom"></span>
    </span>
  );
};

Checkbox.propTypes = {
 
};

Checkbox.defaultProps = {

};

