import React, { useEffect } from 'react';
import { TabFun } from '../../../assets/js/Tab_custom';
import './tab.scss';
import viewport from '../../../assets/js/viewport';
import { BodyColumnTwo } from '../../../Molecules/Text/BodyColumn/BodyColumn';

export const Tab = ({ tabdata }) => {
  useEffect(() => {
    TabFun();
    viewport('.tab__items, .tab__content-wrapper');
  }, []);
  return (
    <>
      <ul className="tab__items left-right">
        {tabdata.map((item, index) => (
          <li key={index} className="tab__item" data-tab={item.text_id}>
            <a href="javascript:void(0)" >{item.text}</a>
          </li>
        ))}
      </ul>
      <div className="tab__content-wrapper left-right">
      {tabdata.map((item, index) => (
        <div key={index} id={item.text_id} className="tab__content"><BodyColumnTwo descriptionText={item.data} /></div>
      ))}</div>
    </>
  );
};
