import React, { useEffect } from 'react';
import './sidebardata.scss';

export const Sidebardata = ({ data, headerText }) => (
  <>
    <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
    <span className="accordion-navbar__item--chevron" />
    <ul className="accordion__panel">
      {data.map((item, index) => (
        <li>
          <a href="#" key={index}>
            {item.descriptionText}
          </a>
        </li>
      ))}
    </ul>
  </>
);
