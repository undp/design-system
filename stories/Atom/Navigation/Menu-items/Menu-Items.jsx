import React from 'react';
import PropTypes from 'prop-types';
import './Menu-Items.scss';

export const MenuItems = ({ select, text, ...props }) => {
  return (
     <div className={['menu_item',`${select}`].join(' ')}  {...props}>{text}</div>
  );
};

MenuItems.propTypes = {
  select: PropTypes.oneOf(['Default', 'selected'])
};

MenuItems.defaultProps = {
    mode: null,
};

