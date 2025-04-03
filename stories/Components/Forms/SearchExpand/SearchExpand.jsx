import React, { useEffect, useRef } from 'react';
import './search-expand.scss';
import img from 'icons/search-black.svg';
import img_close from 'icons/times.svg';
import { expandSearch } from '../../../assets/js/expand-search';

export const SearchExpand = () => {
  const expandContainerRef = useRef(null);

  // useEffect(() => {
  //   if (expandContainerRef.current) {
  //     expandSearch(jQuery(expandContainerRef.current));
  //   }
  // }, []);
//ref={expandContainerRef}
  return (
    <div className="expand-search" data-undpds-component="expand-search" > 
      <button className='expand-button'>
        <img src={img} alt="search expand" />
      </button>
      <input type="text" aria-label="expand-search" />
      <button className='close-button'>
        <img src={img_close} alt="close search" />
      </button>
    </div>
  );
};