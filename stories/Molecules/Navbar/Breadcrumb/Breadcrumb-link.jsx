import React from 'react';
import './breadcrumb-link.scss';
import { Breadcrumb } from '../../../Atom/Navigation/Breadcrumb/Breadcrumb';

export const Breadcrumbcomponent = ({ data, active }) => {
  const lastIndex = data.length - 1;
  return (
    <ul className={['breadcrumb__wrapper', `breadcrumb__wrapper--${active}`].join(' ')}>
      {data.map((item, i) => {
        if (i === lastIndex) {
          return (
            <li key={i}><span className="last-item">{item.text}</span></li>
          );
        }

        return (
          <li key={i}>
            {' '}
            <Breadcrumb text={item.text} />
          </li>
        );
      })}
    </ul>
  );
};
