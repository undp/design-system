import React from 'react';
import PropTypes from 'prop-types';
import './LanguageSwitcherRow.scss';

export const LanguageSwitcherRow = ({ color, text, ...props }) => {
  return (
     <div className="language_item">{text}</div>
  );
};

LanguageSwitcherRow.propTypes = {
  color: PropTypes.oneOf(['Red', 'White' ])
};
