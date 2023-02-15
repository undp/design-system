import React, { useEffect } from 'react';
import '../../../../assets/scss/_grid.scss';
import './menu-multi-level.scss';
// import menuJsonData from '../../../../assets/js/navigation-data.json';

function MenuLevel({ data, ...args }) {
  let submenu;
  let col2 = [];

  // Simplify the different "sub menu" keys from navigation-data.json
  // or navigation-multi-level-data.json into one usable variable.
  if (data?.submenu && data?.submenu.length > 0) {
    submenu = data.submenu;
  } else if (data?.submenus && data?.submenus.length > 0) {
    submenu = data.submenus;
  } else if (data?.linksCol1 && data?.linksCol1.length > 0) {
    if (data?.linksCol2 && data?.linksCol2.length > 0) {
      col2 = data.linksCol2;
    }
    submenu = [...data.linksCol1, ...col2];
  }

  const label = data?.title ?? data?.label;

  if (submenu && submenu.length > 0) {
    return (
      <li className="menu-item has-submenu is-dropdown-submenu-parent opens-right" role="none" data-is-click="false">
        <a href={data?.url ?? '#'} className="menu-link" aria-haspopup="true" aria-label={label} aria-expanded="true" data-toggle="dropdown">
          {label}
        </a>
        <ul className="sub-menu menu submenu is-dropdown-submenu first-sub vertical" data-submenu role="menubar">
          {submenu.map((subdata, idx) => (
            <MenuLevel data={subdata} key={idx} {...args} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="menu-item" role="none" data-is-click="false">
      <a href={data?.url ?? '#'} className="menu-link" role="menuitem">
        {label}
      </a>
    </li>
  );
}

function MenuMultiLevel({ data, ...args }) {
  let lang = args.locale === 'en' ? 'english' : args.locale;
  const menuData = data.find((item) => item.language === lang);

  return (
    <nav className="menu-navigation" aria-labelledby="menu-label">
      <div id="menu-label" className="show-for-sr">Main Menu</div>
      <ul className="dropdown menu menu--multi-level" data-dropdown-menu role="menubar">
        {menuData.data.map((menuLevel, idx) => (
          <MenuLevel data={menuLevel} key={idx} {...args} />
        ))}
      </ul>
    </nav>
  );
}

export default MenuMultiLevel;
