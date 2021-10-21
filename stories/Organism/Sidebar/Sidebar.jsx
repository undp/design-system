import React, { useEffect } from 'react';
import { SidebarNav, SidebarMenu } from '../../assets/js/Sidebar_custom';
import { Sidebardata } from '../../Molecules/Sidebar-data/Sidebardata';
import './sidebar.scss';

export const Sidebar = ({ headerText, label, data }) => {
  useEffect(() => {
    SidebarNav();
    SidebarMenu();
  }, []);

  return (
    <div className='grid-x grid-margin-x'>
      <div className='cell medium-4 accordion-wrapper'>
        <div className='accordion-navbar__menu' id='sidebar-menu'>{label} <span className='icon-chevron-down'></span></div>
        <ul className='accordion-navbar' id='accordion-menu'>
          <li className='accordion-navbar__item'>
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li className="accordion-navbar__no-children">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
          <li className="accordion-navbar__item">
            <Sidebardata data={data} headerText={headerText} />
          </li>
          <li className="accordion-navbar__no-children">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
          <li className="accordion-navbar__no-children">
            <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
