import React, { useEffect } from 'react';
import './sidebardata.scss';

export const Sidebardata = ({ data, headerText }) => {
  return (
    <>
      <a href="#" className="accordion-navbar__item--headertext">{headerText}</a>
      <span className="icon-chevron-down"></span>
      <ul class="accordion__panel">
        {data.map(function (item, index) {
          return (
            <li className="accordion__panel--description"><a href="#" key={index}> {item.descriptionText} </a></li>
          )
        })}
      </ul>
    </>
  );
};
