import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/FilterAndSearchBar';
import { Chips } from '../../Components/UIcomponents/Buttons/Chips/chips';
import { IconsSearchBlack } from '../../Atom/Icons/search_black';
import SelectTag from '../../Components/Forms/Dropdowns/Multiselect/MultiSelect';
import './FilterAndSearchBar.scss';

const FilterAndSearchBar = ({ data, clearText, activeFilterText }) => {
  useEffect(() => {
    toggleFilter();
  }, []);

  return (
    <div className="search-filter">
      <button type="button" className="toggle-search" aria-label="filter and search" />
      <div className="select-wrapper">
        <SelectTag text={data} eleId="select-1" />
        <SelectTag text={data} eleId="select-2" />
        <SelectTag text={data} eleId="select-3" />
        <SelectTag text={data} eleId="select-4" />

        <div className="active-filter"><span>{activeFilterText}</span></div>
        <div className="selected-chips">
          <Chips label="demo" Type='With X' />
        </div>
        <div className="clear_section"><span className="clear_chips">{clearText}</span></div>
      </div>
    </div>
  );
};

export default FilterAndSearchBar;
