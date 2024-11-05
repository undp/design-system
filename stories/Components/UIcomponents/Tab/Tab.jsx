import React, { useEffect } from 'react';
import './tab.scss';
import { BodyColumnTwo } from '../../../Molecules/Text/BodyColumn/BodyColumn';
import loader from '../../../assets/js/loader';
import { tabs } from '../../../assets/js/tabs';

export function Tab({ tabdata }) {
  useEffect(() => {
    if (loader) {
      loader();
    } 
  }, []);
  return (
    <div className="tabs" data-viewport="true" data-undpds="data-undpds-tab">
      <ul data-deep-link="true" data-tabs id="tablist_1" role="tablist">
        {tabdata.map((item, index) => (
          <li key={index} className={index == 0 ? 'tabs-title is-active' : 'tabs-title'}>
            <a href={`#${item.text_id}`} aria-selected="true">{item.text}</a>
          </li>
        ))}
      </ul>

      <div className="tabs-content" data-tabs-content="tablist_1">
        {tabdata.map((item, index) => (
          <div key={index} id={item.text_id} className={index == 0 ? 'tabs-panel is-active' : 'tabs-panel'}><BodyColumnTwo descriptionText={item.data} /></div>
        ))}
      </div>
    </div>
  );
}
