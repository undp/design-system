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
        <span className="accordion-navbar__menu">{label}</span>
        <ul className="accordion-navbar">
          <li className="accordion-navbar__item" tabindex="0" aria-label="Sidebar heading">
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li className="accordion-navbar__no-children" tabindex="0" aria-label="Sidebar heading">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
          <li className="accordion-navbar__item" tabindex="0" aria-label="Sidebar heading">
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li className="accordion-navbar__no-children" tabindex="0" aria-label="Sidebar heading">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
          <li className="accordion-navbar__no-children" tabindex="0" aria-label="Sidebar heading">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
