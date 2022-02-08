import React, { useEffect } from 'react';
import toggleFilter from '../../assets/js/filter-seach-bar';
import { Chips } from '../../Components/UIcomponents/Buttons/Chips/Chips';
import SelectTag from '../../Components/Forms/Dropdowns/Multiselect/MultiSelect';
import './filter-and-search-bar.scss';
import { SearchExpand } from '../../Components/Forms/SearchExpand/SearchExpand';

const FilterAndSearchBar = ({
  args, data, clearText, activeFilterText, locale,
}) => {
  useEffect(() => {
    toggleFilter(locale);
  }, [locale]);

  return (
    <div className="search-filter">
      <SearchExpand />
      <div className="select-wrapper">
        <SelectTag {...args} text={data} eleId="1" />
        <SelectTag {...args} text={data} eleId="2" />
        <SelectTag {...args} text={data} eleId="3" />
        <SelectTag {...args} text={data} eleId="4" />

        <span className="active-filter">{activeFilterText}</span>
        <div className="selected-Chips"></div>
        <button className='clear-search-filter'>{clearText}</button>

      </div>
    </div>
  );
};

export default FilterAndSearchBar;
