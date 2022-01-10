import React from 'react';
import './sidebardata.scss';

export const Sidebardata = ({ data, headerText }) => (
  <>
    <a href="#">{headerText}</a>
    <span tabIndex="0" />
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
