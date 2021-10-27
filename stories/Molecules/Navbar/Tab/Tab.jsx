import React, { useEffect } from 'react';
import { TabFun } from '../../../assets/js/Tab_custom';
import './tab.scss';

export const Tab = ({ tabdata }) => {
  useEffect(() => {
    TabFun();
  }, []);
  return (
    <div>
      <ul className="tab__items" id="tab">
        {tabdata.map((item, index) => (
          <li key={index} className="tab__item " data-tab={item.text_id}>
            {item.text}
          </li>
        ))}
      </ul>
      {tabdata.map((item, index) => (
        <div key={index} id={item.text_id} className="tab__content ">{item.data}</div>
      ))}
    </div>
  );
};
