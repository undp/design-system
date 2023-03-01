import React, { useEffect } from 'react';
import '../../../../assets/scss/_grid.scss';
import './menu-multi-level.scss';
import { MenuItems } from '../../../../Atom/Navigation/MenuItems/MenuItems';
// import menuJsonData from '../../../../assets/js/navigation-data.json';

export default MenuMultiLevel;

function MenuMultiLevel({
  data,
  role,
  arialabel,
  isGHeader,
  multiLevel,
  overflow,
  ...args
}) {
  let lang = args.locale === 'en' ? 'english' : args.locale;
  const menuData = data.find((item) => item.language === lang);

  if (isGHeader != undefined && isGHeader) {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index} data-menu-id={item.id}>
            <MenuItems text={item.label} />
          </li>
        ))}
      </ul>
    );
  }

  if (!multiLevel) {
    return (
      <nav className="menu" role={role} aria-label={arialabel}>
        <ul>
          {data.map((item, index) => (
            <li key={index} data-menu-id={item.id}>
              <MenuItems text={item.label} />
            </li>
          ))}

          {overflow && (
            <li className="menu__overflow__item hidden">
              <button className="menu__overflow__toggle" aria-hidden="true" aria-controls="navigation-dropdown" aria-label="Menu overflow">
                <span className="hidden">Menu toggle</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="menu" role={role} aria-label={arialabel}>
      <ul className="dropdown" data-dropdown-menu>
        {menuData.data.map((menuLevel, idx) => (
          <MenuLevel data={menuLevel} key={idx} level="1" {...args} />
        ))}

        {overflow && (
          <li className="menu__overflow__item hidden">
            <button className="menu__overflow__toggle" aria-hidden="true" aria-controls="navigation-dropdown" aria-label="Menu overflow">
              <span className="hidden">Menu toggle</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

function MenuLevel({
  data,
  level,
  ...args
}) {
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
  const menu_id = data?.id ?? data?.link?.id;

  if (submenu && submenu.length > 0) {
    return (
      <li className="menu-item has-submenu" role="none">
        <a href={data?.url ?? '#'}
          className="menu-link"
          tabIndex="0"
          aria-haspopup="true"
          aria-expanded="true"
          data-menu-id={menu_id}
        >
          {label}
        </a>
        <ul className="submenu" data-submenu>
          {submenu.map((subdata, idx) => (
            <MenuLevel data={subdata} key={idx} level={level++} {...args} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="menu-item" role="none">
      <a href={data?.url ?? '#'} className="menu-link" tabIndex="0">
        {label}
      </a>
    </li>
  );
}
