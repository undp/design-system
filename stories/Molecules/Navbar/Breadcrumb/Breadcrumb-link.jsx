import React, { useEffect } from 'react';
import './breadcrumb-link.scss';
import viewport from '../../../assets/js/viewport';
import { Breadcrumb } from '../../../Atom/Navigation/Breadcrumb/Breadcrumb';

export const Breadcrumbcomponent = ({ data, active }) => {
  useEffect(() => {
    viewport('.breadcrumb__wrapper');
  }, []);
  const lastIndex = data.length - 1;
  return (
    <ul className={['breadcrumb__wrapper left-right', `breadcrumb__wrapper--${active}` ].join(' ')}>
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
