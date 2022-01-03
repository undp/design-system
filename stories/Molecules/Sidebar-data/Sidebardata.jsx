import React, { useEffect } from 'react';
import './sidebardata.scss';

export const Sidebardata = ({ data, headerText }) => (
  <>
    <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
    <span className="accordion-navbar__item--chevron" tabIndex='0'/>
    <ul className="accordion__panel">
      {data.map((item, index) => (
        <li key={index}>
          <a href="#">
            {item.descriptionText}
          </a>
        </li>
      ))}
    </ul>
  </>
);
