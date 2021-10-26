import React from 'react';
import PropTypes from 'prop-types';
import './LanguageSwitcherRow.scss';

export const LanguageSwitcherRow = ({ color, text, ...props }) => (
  <span className="language_item">{text}</span>
);
