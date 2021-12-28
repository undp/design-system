import React from 'react';
import './Menu-Items.scss';

export const MenuItems = ({ active, text }) => (
  <a href="#" className={active !== 'default' ? active : ''}>{text}</a>
);
