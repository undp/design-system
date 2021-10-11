import React from 'react';
import './lists.scss';

export const List = ({ data, type }) => {
  const ListTag = `${type}`;
  return (
    <ListTag>
      {data.map(function(item, index) {
        return (
        <li key={index}>{item.text}</li>
        )})}
    </ListTag>
  );
};
