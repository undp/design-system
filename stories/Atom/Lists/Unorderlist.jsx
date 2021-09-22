import React from 'react';
import './lists.scss';

export const Unorderlist = ({ data }) => {
    return (
      <ul>
       {data.map(function(item){
         return ( 
         <li className="list-item">{item.text}</li>
         )})}
      </ul>
    );
};
