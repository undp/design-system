import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/Menu-items/Menu-Items';

export const Menu = ({ data }) => (
  <nav className="menu" role="navigation" aria-label="menu">
    <ul>
      {data.map((item, index) => (
        <li key={index} id={item.id}><MenuItems text={item.label} /></li>
      ))}
    </ul>
  </nav>
);
