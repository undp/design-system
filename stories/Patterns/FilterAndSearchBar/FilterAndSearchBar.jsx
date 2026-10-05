import React, { useEffect, useId } from 'react';
import toggleFilter from '../../assets/js/filter-search-bar';
import SelectTag from '../../Components/Forms/Dropdowns/Multiselect/MultiSelect';
import './filter-and-search-bar.scss';
import '../../Components/UIcomponents/Buttons/Chips/chips.scss';
import { SearchExpand } from '../../Components/Forms/SearchExpand/SearchExpand';

/**
 * Render search and native filter disclosures with removable selection chips.
 * @param {object} props Localized captions, multiselect arguments and locale.
 * @param {string} [props.removeFilterLabel] Localized chip removal action label.
 * @returns {React.ReactElement} Search/filter controls; initializes DOM behavior.
 */
const FilterAndSearchBar = ({
  args, data, clearText, activeFilterText, locale, buttonData, removeFilterLabel = 'Remove filter'
}) => {
  const filterPanelId = `search-filter-${useId()}`;
  useEffect(() => {
    toggleFilter(locale);
  }, [locale]);

  return (
    <>
    <button type="button" className="button button-secondary sort-filter-search" aria-expanded="false" aria-controls={filterPanelId}>
      {buttonData.sort}<span>{buttonData.close}</span>
    </button>
    <div className="search-filter" id={filterPanelId}>
      <SearchExpand />
      <div className="select-wrapper" data-remove-filter-label={removeFilterLabel}>
        <SelectTag {...args} text={data} eleId="1" />
        <SelectTag {...args} text={data} eleId="2" />
        <SelectTag {...args} text={data} eleId="3" />
        <SelectTag {...args} text={data} eleId="4" />

        <span className="active-filter" hidden>{activeFilterText}</span>
        <div className="selected-chips"></div>
        <button type="button" className='clear-search-filter' hidden>{clearText}</button>
      </div>
    </div>
    </>
  );
};

export default FilterAndSearchBar;
