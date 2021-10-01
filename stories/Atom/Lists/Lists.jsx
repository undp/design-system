import React from 'react';
import './lists.scss';

export const List = ({ data, type }) => {
  const ListTag = `${type}`;
  return (
    <ListTag>
      {data.map(function(item) {
        return (
        <li>{item.text}</li>
        )})}
    </ListTag>
  );
};
