import React, { useEffect } from 'react';
import { sidebarNav, sidebarMenu } from '../../../assets/js/sidebar';
import { Sidebardata } from '../../../Molecules/Sidebar-data/Sidebardata';
import './sidebar.scss';

export const Sidebar = ({ headerText, label, data }) => {
  useEffect(() => {
    sidebarNav();
    sidebarMenu();
  }, []);

  return (
    <div className="grid-x grid-margin-x">
      <div className="cell medium-4 accordion-wrapper" role="complementary" aria-label="Sidebar">
        <span>{label}</span>
        <ul className="accordion-navbar">
          <li tabIndex="0" aria-label="Sidebar heading">
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li tabIndex="0" aria-label="Sidebar heading">
            <a href="#">{headerText}</a>
          </li>
          <li tabIndex="0" aria-label="Sidebar heading">
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li tabIndex="0" aria-label="Sidebar heading">
            <a href="#">{headerText}</a>
          </li>
          <li tabIndex="0" aria-label="Sidebar heading">
            <a href="#">{headerText}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
