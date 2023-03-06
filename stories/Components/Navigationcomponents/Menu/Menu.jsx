import React, { useEffect } from 'react';
import './menu.scss';
import { MenuItems } from '../../../Atom/Navigation/MenuItems/MenuItems';

export function Menu({
  data,
  role,
  arialabel,
  isGHeader,
  ...args
}) {
  let lang = args.locale === 'en' ? 'english' : args.locale;
  let menuData = data.find((item) => item.language === lang);
  menuData = (menuData && typeof (menuData.data) != 'undefined') ? menuData.data : data;
  if (isGHeader != undefined && isGHeader) {
    return (
      <ul>
        {menuData.map((item, index) => (
          <li key={index} data-menu-id={item.id}><MenuItems text={item.title ?? item.label} /></li>
        ))}
      </ul>
    );
  }

  return (
    <nav className="menu" role={role} aria-label={arialabel}>
      <ul className="dropdown">
        {menuData.map((item, index) => (
          <li key={index} data-menu-id={item.id}><MenuItems text={item.title ?? item.label} /></li>
        ))}
      </ul>
    </nav>
  );
}
