let isDocumentFilterEventsBound = false;
let filterPanelId = 0;

const getFilterButton = (checkbox) => checkbox.closest('ul')?.closest('.multi-select')?.querySelector('button');

/**
 * Read the option's associated labels, regardless of their position.
 * @param {HTMLInputElement} option Checkbox whose display label is needed.
 * @returns {string} Trimmed label text, with legacy sibling markup as a fallback.
 */
const getOptionLabel = (option) => Array.from(option.labels || [], (label) => label.textContent.trim()).join(' ')
  || option.nextElementSibling?.textContent?.trim() || '';

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
    clearButton.setAttribute('type', 'button');
    clearButton.hidden = !hasChips;
    clearButton.classList.toggle('show-clear', hasChips);
  }

  if (activeFilter) {
    activeFilter.hidden = !hasChips;
    activeFilter.classList.toggle('show-activefilter', hasChips);
  }
};

/**
 * Reflect responsive filter-panel visibility in its disclosure and ARIA state.
 * @param {HTMLButtonElement} button Responsive search/filter disclosure.
 * @returns {void} Links the panel and prevents focus inside collapsed content.
 */
const updateSearchFilterVisibility = (button) => {
  const panel = button.nextElementSibling;
  if (!panel?.classList.contains('search-filter')) {
    return;
  }
  if (!panel.id) {
    do {
      filterPanelId += 1;
      panel.id = `search-filter-panel-${filterPanelId}`;
    } while (document.getElementById(panel.id) !== panel);
  }
  const isMobile = window.getComputedStyle(button).display !== 'none';
  const isVisible = !isMobile || panel.classList.contains('show-filter');
  if (!isVisible && panel.contains(document.activeElement)) {
    button.focus();
  }
  button.setAttribute('type', 'button');
  button.setAttribute('aria-controls', panel.id);
  button.setAttribute('aria-expanded', String(isVisible));
  panel.setAttribute('aria-hidden', String(!isVisible));
  panel.inert = !isVisible;
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
  document.querySelectorAll('.select-wrapper').forEach(updateFilterStateVisibility);
  document.querySelectorAll('.sort-filter-search').forEach(updateSearchFilterVisibility);

  searchOptions.forEach((option) => {
    if (option.dataset.filterSearchInitialized === 'true') {
      return;
    }

    option.dataset.filterSearchInitialized = 'true';
    const updateChip = () => {
      const selectWrapper = option.closest('.select-wrapper');
      const chipWrapper = selectWrapper?.querySelector('.selected-chips');
      const optionId = option.id;

      updateFilterButtonCount(option);

      if (!chipWrapper || !optionId) {
        return;
      }

      if (option.checked) {
        const optionValue = getOptionLabel(option);
        const existingChip = chipWrapper.querySelector(`[option-name='${optionId}']`);

        if (!existingChip) {
          const chip = document.createElement('a');
          chip.className = 'chip chip__cross';
          chip.setAttribute('href', '#');
          chip.setAttribute('role', 'button');
          chip.setAttribute('option-name', optionId);
          chip.setAttribute('aria-label', `${selectWrapper.dataset.removeFilterLabel || 'Remove filter'}: ${optionValue}`);
          chip.textContent = optionValue;
          chipWrapper.append(chip);
        }
      } else {
        chipWrapper.querySelector(`[option-name='${optionId}']`)?.remove();
      }

      updateFilterStateVisibility(selectWrapper);
    };
    option.addEventListener('click', updateChip);
    updateChip();
  });

  if (isDocumentFilterEventsBound) {
    return;
  }

  isDocumentFilterEventsBound = true;

  window.addEventListener('resize', () => {
    document.querySelectorAll('.sort-filter-search').forEach(updateSearchFilterVisibility);
  });

  document.addEventListener('keydown', (event) => {
    const chip = event.target.closest('.selected-chips .chip__cross');
    if (chip && event.key === ' ') {
      event.preventDefault();
      if (!event.repeat) {
        chip.click();
      }
    }
    if (event.key === 'Escape') {
      const panel = event.target.closest('.search-filter.show-filter');
      const button = panel?.previousElementSibling;
      if (button?.classList.contains('sort-filter-search') && window.getComputedStyle(button).display !== 'none') {
        event.preventDefault();
        button.focus();
        panel.classList.remove('show-filter');
        button.classList.remove('close');
        updateSearchFilterVisibility(button);
      }
    }
  });

  document.addEventListener('click', (event) => {
    const chip = event.target.closest('.selected-chips .chip__cross');
    if (chip) {
      event.preventDefault();

      const selectWrapper = chip.closest('.select-wrapper');
      const optionId = chip.getAttribute('option-name');
      const targetCheckbox = optionId ? document.getElementById(optionId) : null;
      const checkbox = selectWrapper?.contains(targetCheckbox) ? targetCheckbox : null;

      if (checkbox) {
        checkbox.checked = false;
        updateFilterButtonCount(checkbox);
      }

      const removalEvent = new CustomEvent('filterSearchChipRemoval', {
        bubbles: true,
        cancelable: false,
        detail: { chip_id: optionId },
      });
      removalEvent.chip_id = optionId;
      chip.dispatchEvent(removalEvent);

      if (document.activeElement === chip) {
        checkbox?.closest('.multi-select')?.querySelector('button')?.focus();
      }
      chip.remove();
      updateFilterStateVisibility(selectWrapper);
      return;
    }

    const clearButton = event.target.closest('.clear-search-filter');
    if (clearButton) {
      event.preventDefault();
      const selectWrapper = clearButton.closest('.select-wrapper');
      const chipWrapper = selectWrapper?.querySelector('.selected-chips');
      const checkboxes = Array.from(selectWrapper?.querySelectorAll("input[type='checkbox']") || []);

      chipWrapper?.querySelectorAll('.chip').forEach((chipElement) => chipElement.remove());
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      selectWrapper?.querySelectorAll('.multi-select').forEach((multiSelect) => {
        multiSelect.querySelector('button span')?.remove();
      });

      if (document.activeElement === clearButton) {
        selectWrapper?.querySelector('.multi-select > button')?.focus();
      }
      updateFilterStateVisibility(selectWrapper);

      clearButton.dispatchEvent(new CustomEvent('filterSearchClear', {
        bubbles: true,
        cancelable: false,
      }));
      return;
    }

    const sortFilterButton = event.target.closest('.sort-filter-search');
    if (sortFilterButton) {
      event.preventDefault();
      sortFilterButton.classList.toggle('close');
      sortFilterButton.nextElementSibling?.classList.toggle('show-filter');
      updateSearchFilterVisibility(sortFilterButton);
    }
  });
};

export default toggleFilter;

// for webpack build
export { toggleFilter };
