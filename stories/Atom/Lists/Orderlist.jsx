import React from 'react';
import './lists.scss'

export const Orderlist = ({ data }) => {
  return (
    <ol>
    {data.map(function(item){
       return (
       <li className="list-item">{item.text}</li>
       )})}
    </ol>
  );
};
