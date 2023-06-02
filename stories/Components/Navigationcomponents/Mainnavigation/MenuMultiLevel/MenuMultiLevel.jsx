import React from 'react';
import '../../../../assets/scss/_grid.scss';
import './menu-multi-level.scss';
import './menu-overflow.scss';

import { MenuItems } from '../../../../Atom/Navigation/MenuItems/MenuItems';

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
  let overflow_class = args.overflow || overflow ? 'overflow' : '';
  let menuData = data.find((item) => item.language === lang);
  menuData = (menuData.data) ? menuData.data : data;

  if (isGHeader != undefined && isGHeader) {
    return (
      <ul>
        {menuData.map((item, idx) => (
          <li key={idx} data-menu-id={item.id}>
            <MenuItems text={item.label} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className="menu" role={role} aria-label={arialabel}>
      <ul className={overflow_class}>
        {menuData.map((menuLevel, idx) => (
          <MenuLevel data={menuLevel} key={idx} level="1" {...args} />
        ))}
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
  const link_type = data?.type ?? data?.link?.type ?? '';

  if (submenu && submenu.length > 0) {
    return (
      <li className={['has-submenu'].join(' ')}>
        <a href={data?.url ?? '#'}
          className={[link_type].join(' ')}
          tabIndex="0"
          aria-expanded="true"
        >
          {label}
          {link_type == 'external' && (
            <span className="external-link-animated"><i /></span>
          )}
          {link_type == 'download' && (
            <span className="download-animated"><i /></span>
          )}
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
    <li className={[].join(' ')}>
      <a href={data?.url ?? '#'} className={[link_type].join(' ')} tabIndex="0">
        {label}
        {link_type == 'external' && (
          <span className="external-link-animated"><i /></span>
        )}
        {link_type == 'download' && (
          <span className="download-animated"><i /></span>
        )}
      </a>
    </li>
  );
}
