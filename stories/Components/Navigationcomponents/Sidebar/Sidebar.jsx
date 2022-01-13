import React, { useEffect } from 'react';
import { sidebarNav, sidebarMenu } from '../../../assets/js/sidebar';
import { Sidebardata } from '../../../Molecules/Sidebar-data/Sidebardata';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './sidebar.scss';

export const Sidebar = ({
  headerText, label, data, size,
}) => {
  useEffect(() => {
    sidebarNav();
    sidebarMenu();
  }, []);

  return (
    <nav className="sidebar-accordion" role="navigation" aria-label="Sidebar">
      <div className="grid-x grid-margin-x">
        <div className={['cell', `${size}`].join(' ')}>
          <Heading type="6" label={label} />
          <ul>
            <li aria-label="Sidebar heading">
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
