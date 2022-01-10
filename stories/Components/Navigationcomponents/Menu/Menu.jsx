import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/Menu-items/Menu-Items';

export const Menu = ({ data, role, arialabel }) => (
  <nav className="menu" role={role} aria-label={arialabel}>
    <ul>
      {data.map((item, index) => (
        <li key={index} data-menu-id={item.id}><MenuItems text={item.label} /></li>
      ))}
    </ul>
  </nav>
);
