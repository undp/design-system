import React, { useEffect } from 'react';
import './breadcrumbs.scss';
import viewport from '../../../assets/js/viewport';
import { Breadcrumb } from '../../../Atom/Navigation/Breadcrumb/Breadcrumb';

export const type_options = {
  Black: 'black',
  White: 'white',
};

export const Breadcrumbcomponent = ({ data, Color, ...args }) => {
  useEffect(() => {
    viewport('.breadcrumb__wrapper');
  }, []);
  const lastIndex = data.length - 1;
  return (
    <ul className={['breadcrumb__wrapper left-right', `${type_options[`${Color}`]}`].join(' ')}>
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

Breadcrumbcomponent.defaultProps = {
  Black: 'black',
};
