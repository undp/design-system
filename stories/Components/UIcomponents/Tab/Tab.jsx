import React from 'react';
import './tab.scss';
import { BodyColumnTwo } from '../../../Molecules/Text/BodyColumn/BodyColumn';
import isChromatic from "chromatic/isChromatic";

export function Tab({ tabdata }) {
  const tabsCls = isChromatic() ? 'tabs inviewport' : 'tabs';
  return (
    <div className={tabsCls} data-viewport={isChromatic() ? '' : 'true'} data-undpds-component="tabs">
      <ul data-deep-link="true" data-tabs id="tablist_1" role="tablist">
        {tabdata.map((item, index) => (
          <li
            key={index}
            className={index == 0 ? 'tabs-title is-active' : 'tabs-title'}
            role="tab"
            aria-selected={index == 0 ? 'true' : 'false'}
            aria-controls={item.text_id}
            id={`tablist_1-tab-${index + 1}`}
            tabIndex={index == 0 ? 0 : -1}
          >
            <a href={`#${item.text_id}`}>{item.text}</a>
          </li>
        ))}
      </ul>

      <div className="tabs-content" data-tabs-content="tablist_1">
        {tabdata.map((item, index) => (
          <div key={index} id={item.text_id} role="tabpanel" className={index == 0 ? 'tabs-panel is-active' : 'tabs-panel'}><BodyColumnTwo descriptionText={item.data} /></div>
        ))}
      </div>
    </div>
  );
}
