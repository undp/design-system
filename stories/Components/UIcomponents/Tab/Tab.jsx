import React, { useEffect } from 'react';
import { tabs } from '../../../assets/js/tabs';
import './tab.scss';
import viewport from '../../../assets/js/viewport';
import { BodyColumnTwo } from '../../../Molecules/Text/BodyColumn/BodyColumn';

export const Tab = ({ tabdata }) => {
  useEffect(() => {
    tabs();
    viewport('.tabs, .tabs-content');
  }, []);
  return (
    <>
      <ul className="tabs left-right" data-deep-link="true" data-tabs id="tab" role="tablist">
        {tabdata.map((item, index) => (
          <li key={index} className="tabs-title">
            <a href={`#${item.text_id}`} aria-selected="true">{item.text}</a>
          </li>
        ))}
      </ul>

      <div className="tabs-content left-right" data-tabs-content="tab">
        {tabdata.map((item, index) => (
          <div key={index} id={item.text_id} className="tabs-panel"><BodyColumnTwo descriptionText={item.data} /></div>
        ))}
      </div>
    </>
  );
};
