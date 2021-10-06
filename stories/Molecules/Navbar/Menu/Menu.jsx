import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/Menu-items/Menu-Items';

export const Menu = ({ data }) => {
  return (
    <ul className= "menu__wrapper">
      {data.map(function(item, index) {
        return (
        <li key= {index} ><MenuItems text={ item.text }/></li>

        )})}
    </ul>
  );
};
