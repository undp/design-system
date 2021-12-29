import React, { useEffect } from 'react';
import './breadcrumbs.scss';
import viewport from '../../../assets/js/viewport';

export const Breadcrumbcomponent = ({ data, Color, ...args }) => {
  useEffect(() => {
    viewport('.breadcrumb');
  }, []);
  const lastIndex = data.length - 1;

  let color = '';
  if (Color == 'White') {
    color = 'white';
  }

  return (
    <nav aria-label="breadcrumbs">
      <ul className={['breadcrumb left-right', `${color}`].join(' ')}>
        {data.map((item, i) => {
          if (i === lastIndex) {
            return (
              <li key={i} aria-current="page">{item.text}</li>
            );
          }

          return (
            <li key={i}>
              <a href="#">{item.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
