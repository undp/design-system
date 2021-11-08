import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/FilterAndSearchBar';
import { Chips } from '../../Atom/Buttons-and-labels/Chips/chips';
import { IconsSearch } from '../../Atom/Global/Icons/search';
import SelectTag from '../../Molecules/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';

const FilterAndSearchBar = () => {
  useEffect(() => {
    toggleFilter();
  }, []);

  return (
    <div id="search-filter">
      <button type="button" id="toggleSearch"><IconsSearch /></button>
      <br />
      <div id="select-wrapper">
        <SelectTag text="Category" eleId="select-1" />
        <SelectTag text="Category" eleId="select-2" />
        <SelectTag text="Category" eleId="select-3" />
        <SelectTag text="Category" eleId="select-4" />
        <div id="selectedchips">
          <Chips label="demo" variant="Cross" />
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
