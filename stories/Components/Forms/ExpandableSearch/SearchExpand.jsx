import React, { useEffect } from 'react';
import './search-expand.scss';
import img from '../../../assets/icons/Search_black.svg';
import img_close from '../../../assets/icons/Times.svg';
import { expandSearch } from '../../../assets/js/expand_search';

export const SearchExpand = () => {
  useEffect(() => {
    expandSearch();
  }, []);
  return (
    <div className="expand-search">
      <button className='expand-button'><img src={img} alt="search expand" /></button>
      <input type="text" aria-label="expand-search" />
      <button className='close-button'><img src={img_close} alt="search close" /></button>
    </div>
  );
};
