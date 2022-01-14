import React, { useEffect } from 'react';
import { sidebarNav, sidebarMenu } from '../../../assets/js/sidebar';
import { Sidebardata } from '../../../Molecules/Sidebar-data/Sidebardata';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './sidebar.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const Sidebar = ({
  headerText, label, data, size, Height,
}) => {
  useEffect(() => {
    sidebarNav();
    sidebarMenu();
  }, []);

  let height = '';
  if (Height == 'Narrow') {
    height = 'narrow';
  }

  return (
    <nav role="navigation" aria-label="Sidebar" className={cls('sidebar-accordion', `${height}`)}>
      <div className="grid-x grid-margin-x">
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
};
