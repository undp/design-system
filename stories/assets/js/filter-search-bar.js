let isDocumentFilterEventsBound = false;

const getFilterButton = (checkbox) => checkbox.closest('ul')?.closest('.multi-select')?.querySelector('button');

const updateFilterButtonCount = (checkbox) => {
  const multiSelect = checkbox.closest('.multi-select');
  const filterButton = getFilterButton(checkbox);

  if (!multiSelect || !filterButton) {
    return;
  }

  const checkedCount = multiSelect.querySelectorAll('input[type="checkbox"]:checked').length;
  const existingCount = filterButton.querySelector('span');

  if (existingCount) {
    existingCount.remove();
  }

  if (checkedCount > 0) {
    const countElement = document.createElement('span');
    countElement.textContent = ` (${checkedCount}) `;
    filterButton.append(countElement);
  }
};

const updateFilterStateVisibility = (selectWrapper) => {
  if (!selectWrapper) {
    return;
  }

  const chipWrapper = selectWrapper.querySelector('.selected-chips');
  const clearButton = selectWrapper.querySelector('.clear-search-filter');
  const activeFilter = selectWrapper.querySelector('.active-filter');
  const hasChips = chipWrapper && chipWrapper.querySelectorAll('.chip__cross').length > 0;

  if (clearButton) {
    clearButton.classList.toggle('show-clear', hasChips);
  }

  if (activeFilter) {
    activeFilter.classList.toggle('show-activefilter', hasChips);
  }
};

const toggleFilter = function () {
  const multiSelects = Array.from(document.querySelectorAll('.multi-select'));
  const searchOptions = Array.from(document.querySelectorAll('.multi-select li input[type="checkbox"]'));

  multiSelects.forEach((multiSelect) => {
    const checkbox = multiSelect.querySelector('input[type="checkbox"]');
    if (checkbox) {
      updateFilterButtonCount(checkbox);
    }
  });

  searchOptions.forEach((option) => {
    if (option.dataset.filterSearchInitialized === 'true') {
      return;
    }

    option.dataset.filterSearchInitialized = 'true';
    option.addEventListener('click', () => {
      const selectWrapper = option.closest('.select-wrapper');
      const chipWrapper = selectWrapper?.querySelector('.selected-chips');
      const optionId = option.id;

      updateFilterButtonCount(option);

      if (!chipWrapper || !optionId) {
        return;
      }

      if (option.checked) {
        const optionValue = option.nextElementSibling?.textContent?.trim() || '';
        const existingChip = chipWrapper.querySelector(`[option-name='${optionId}']`);

        if (!existingChip) {
          const chip = document.createElement('span');
          chip.className = 'chip chip__cross';
          chip.tabIndex = 0;
          chip.setAttribute('role', 'button');
          chip.setAttribute('option-name', optionId);
          chip.textContent = optionValue;
          chipWrapper.append(chip);
        }
      } else {
        chipWrapper.querySelector(`[option-name='${optionId}']`)?.remove();
      }

      updateFilterStateVisibility(selectWrapper);
    });
  });

  if (isDocumentFilterEventsBound) {
    return;
  }

  isDocumentFilterEventsBound = true;

  document.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip__cross');
    if (chip) {
      event.preventDefault();

      const selectWrapper = chip.closest('.select-wrapper');
      const optionId = chip.getAttribute('option-name');
      const checkbox = optionId ? selectWrapper?.querySelector(`#${optionId}`) : null;

      if (checkbox) {
        checkbox.checked = false;
        updateFilterButtonCount(checkbox);
      }

      chip.dispatchEvent(new CustomEvent('filterSearchChipRemoval', {
        bubbles: true,
        cancelable: false,
        detail: { chip_id: optionId },
      }));

      chip.remove();
      updateFilterStateVisibility(selectWrapper);
      return;
    }

    const clearButton = event.target.closest('.clear-search-filter');
    if (clearButton) {
      const selectWrapper = clearButton.closest('.select-wrapper');
      const chipWrapper = selectWrapper?.querySelector('.selected-chips');
      const checkboxes = Array.from(selectWrapper?.querySelectorAll("input[type='checkbox']") || []);

      chipWrapper?.querySelectorAll('.chip').forEach((chipElement) => chipElement.remove());
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      const filterButton = selectWrapper?.querySelector('button');
      filterButton?.querySelector('span')?.remove();

      updateFilterStateVisibility(selectWrapper);

      clearButton.dispatchEvent(new CustomEvent('filterSearchClear', {
        bubbles: true,
        cancelable: false,
      }));
      return;
    }

    const sortFilterButton = event.target.closest('.sort-filter-search');
    if (sortFilterButton) {
      sortFilterButton.classList.toggle('close');
      sortFilterButton.nextElementSibling?.classList.toggle('show-filter');
    }
  });
};

export default toggleFilter;

// for webpack build
export { toggleFilter };
