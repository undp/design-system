import React from 'react';
import PropTypes from 'prop-types';
import './Menu-Items.scss';

export const MenuItems = ({ select, text, ...props }) => {
  return (
     <a href="#" className={['menu_item',`${select}`].join(' ')}  {...props}>{text}</a>
  );
};

MenuItems.propTypes = {
  select: PropTypes.oneOf(['Default', 'selected'])
};
