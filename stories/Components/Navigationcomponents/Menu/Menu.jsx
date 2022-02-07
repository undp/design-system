import React from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/MenuItems/MenuItems';

export const Menu = ({ data, role, arialabel,isGHeader }) => {
  if(isGHeader != undefined && isGHeader){
    return(
        <ul>
          {data.map((item, index) => (
            <li key={index} data-menu-id={item.id}><MenuItems text={item.label} /></li>
          ))}
        </ul>
    );
  }else{
    return(
      <nav className="menu" role={role} aria-label={arialabel}>
        <ul>
          {data.map((item, index) => (
            <li key={index} data-menu-id={item.id}><MenuItems text={item.label} /></li>
          ))}
        </ul>
      </nav>
    );
  }
};
