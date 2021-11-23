import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/Menu-items/Menu-Items';

export const Menu = ({ data }) => (
  <ul className="menu__wrapper">
    {data.map((item, index) => (
      <li key={index} className="menu-item" id={item.id}><MenuItems text={item.label} /></li>
    ))}
  </ul>
);
