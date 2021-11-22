import React from 'react';
import './Menu-Items.scss';

export const MenuItems = ({ active, text }) => (
  <a href="#" className={['menu_item', `${active}`].join(' ')}>{text}</a>
);

MenuItems.defaultProps = {
  active: 'default',
};
