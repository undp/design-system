import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/Menu-items/Menu-Items';

export const Menu = ({ data }) => (
  <ul className="menu">
    {data.map((item, index) => (
      <li key={index} id={item.id}><MenuItems text={item.label} /></li>
    ))}
  </ul>
);
