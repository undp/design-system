import React from 'react';
import './chips.scss';

export const Chips = ({ label, Type }) => {

  let type = 'no-cross';
  if(Type == 'With X'){
    type = 'cross'
  }
  
  return(
  <a className={['chips', `chips__${type}`].join(' ')} href="#">
    {label}
  </a>
)};
