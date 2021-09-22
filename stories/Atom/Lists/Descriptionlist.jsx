import React from 'react';
import './lists.scss';

export const Descriptionlist = ({ data }) => {
  return (
    <dl>
    {data.map(function(item){
       return (
          <>
          <dt>{item.label}</dt>
          <dd>{item.text}</dd>
          </>
       )})}
    </dl>
  );
};
