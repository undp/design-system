import React, { useEffect } from 'react';
import { Sidebardata } from '../../../Molecules/SidebarData/SidebarData';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './sidebar.scss';
import loader from '../../../assets/js/loader';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function Sidebar({
  headerText,
  label,
  data,
  size,
  Height,
}) {
  useEffect(() => {
    if (loader) {
      loader();
    }
  }, []);

  let height = '';
  if (Height == 'Narrow') {
    height = 'narrow';
  }

  return (
    <nav role="navigation" aria-label="Sidebar" className={cls('sidebar-accordion', `${height}`)} data-undpds="data-undpds-sidebar">
      <div className="grid-x">
        <div className={['cell', `${size}`].join(' ')}>
          <Heading type="6" label={label} />
          <ul>
            <li aria-label="Sidebar heading" className="active">
              <Sidebardata data={data} headerText={headerText} />
            </li>
            <li aria-label="Sidebar heading">
              <a href="#">{headerText}</a>
            </li>
            <li aria-label="Sidebar heading">
              <Sidebardata data={data} headerText={headerText} />
            </li>
            <li aria-label="Sidebar heading">
              <a href="#">{headerText}</a>
            </li>
            <li aria-label="Sidebar heading">
              <a href="#">{headerText}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
