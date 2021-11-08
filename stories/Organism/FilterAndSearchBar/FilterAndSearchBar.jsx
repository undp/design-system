import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/FilterAndSearchBar';
import { Chips } from '../../Atom/Buttons-and-labels/Chips/chips';
import { IconsSearch } from '../../Atom/Global/Icons/search';
import SelectTag from '../../Molecules/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';

export const FilterAndSearchBar = () => {
  useEffect(() => {
    toggleFilter();
  }, []);

  return (
    <div className="search_filter">
      <button className="toggleSearch">
        {' '}
        <IconsSearch />
      </button>
      <br />

      <div className="select-wrapper">
        <SelectTag text="Category" eleId="select-1" />
        <SelectTag text="Category" eleId="select-2" />
        <SelectTag text="Category" eleId="select-3" />
        <SelectTag text="Category" eleId="select-4" />
        <div className="Selected_chips">
          <Chips label="demo" variant="Cross" />
        </div>
      </div>

    </div>
  );
};
