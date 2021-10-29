import React, { useEffect } from 'react';
import { TabFun } from '../../../assets/js/Tab_custom';
import './tab.scss';
import viewport from '../../../assets/js/viewport';
import { BodyColumnTwo } from '../../Text/BodyColumn/BodyColumn';

export const Tab = ({ tabdata }) => {
  useEffect(() => {
    TabFun();
    viewport('.tab__items');
    viewport('.tab__content');
  }, []);
  return (
    <div>
      <ul className="tab__items left-right " id="tab">
        {tabdata.map((item, index) => (
          <li key={index} className="tab__item" data-tab={item.text_id}>
            {item.text}
          </li>
        ))}
      </ul>
      {tabdata.map((item, index) => (
        <div key={index} id={item.text_id} className="tab__content left-right"><BodyColumnTwo descriptionText={item.data} /></div>
      ))}
    </div>
  );
};
