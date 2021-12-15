import React, { useEffect } from 'react';
import './breadcrumbs.scss';
import viewport from '../../../assets/js/viewport';
import { Breadcrumb } from '../../../Atom/Navigation/Breadcrumb/Breadcrumb';


export const Breadcrumbcomponent = ({ data, Color, ...args}) => {
  useEffect(() => {
    viewport('.breadcrumb__wrapper');
  }, []);
  const lastIndex = data.length - 1;
  
  let color = '';
  if(Color == 'White'){
    color = 'white';
  }
  
  return (
    <ul className={['breadcrumb__wrapper left-right', `${color}`].join(' ')}>
      {data.map((item, i) => {
        if (i === lastIndex) {
          return (
            <li key={i}>{item.text}</li>
          );
        }

        return (
          <li key={i}>
            <Breadcrumb text={item.text} />
          </li>
        );
      })}
    </ul>
  );
};