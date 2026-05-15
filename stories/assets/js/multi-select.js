/**
 * Multiselect item.
 */
class MultiSelect {
  constructor(element) {
    this.classOpen = 'open';
    this.currentSelect = element;
    this.selectTrigger = this.currentSelect.querySelector('button');
  }

  init() {
    if (this.currentSelect.dataset.multiSelectInitialized === 'true') {
      return;
    }

    this.addListeners();
    this.listenerWindowClick();
    this.currentSelect.dataset.multiSelectInitialized = 'true';
  }

  addListeners() {
    if (!this.selectTrigger) {
      return;
    }

    this.selectTrigger.addEventListener('click', (ev) => {
      ev.stopImmediatePropagation();
      this.toggleSelect();

      // Trigger on Multiselect dropdown toggle.
      this.currentSelect.dispatchEvent(createCustomEvent('multiSelectToggle', {
        bubbles: true,
        cancelable: false,
        select_trigger_dataset_id: this.selectTrigger.dataset?.id || false,
        select_trigger_id: this.selectTrigger.id || false,
        state: this.currentSelect.classList.contains(this.classOpen) ? 'open' : 'closed',
        open: this.currentSelect.classList.contains(this.classOpen),
        closed: !this.currentSelect.classList.contains(this.classOpen),
      }));
    });

    this.currentSelect.addEventListener('click', (ev) => {
      const selectedCheckbox = ev.target.closest('input[type="checkbox"]');
      if (selectedCheckbox && this.currentSelect.contains(selectedCheckbox)) {
        ev.stopImmediatePropagation();
        const selectedOption = selectedCheckbox.closest('li[role="option"]');
        if (selectedOption) {
          selectedOption.setAttribute('aria-selected', selectedCheckbox.checked ? 'true' : 'false');
        }

        updateCheckedCountForMultiSelect(this.currentSelect);

        selectedCheckbox.dispatchEvent(createCustomEvent('multiSelectInputToggle', {
          bubbles: true,
          cancelable: false,
          checkbox_id: selectedCheckbox.id,
          state: selectedCheckbox.checked,
          toggle_state: selectedCheckbox.checked ? 'checked' : 'unchecked',
          selected: selectedCheckbox.checked,
          unselected: !selectedCheckbox.checked,
        }));
        return;
      }

      // Open/Close sub groups (input is a caret).
      const checkboxItem = ev.target.closest('.has-submenu > .checkbox-item');
      if (checkboxItem && this.currentSelect.contains(checkboxItem)) {
        ev.stopImmediatePropagation();

        if (!ev.target.classList.contains('checkmark')) {
          ev.preventDefault();
          const rowHasSubmenu = checkboxItem.closest('li.has-submenu');
          const caretButton = rowHasSubmenu?.querySelector('button.caret');

          if (!rowHasSubmenu) {
            return;
          }

          const isOpen = rowHasSubmenu.classList.toggle('open');
          rowHasSubmenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          if (caretButton) {
            caretButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          }
        }
        return;
      }

      const caretButton = ev.target.closest('.has-submenu > button.caret');
      if (caretButton && this.currentSelect.contains(caretButton)) {
        const checkboxItemTrigger = caretButton.parentElement?.querySelector('.checkbox-item');
        checkboxItemTrigger?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
  }

  listenerWindowClick() {
    document.addEventListener('click', (evt) => {
      if (!this.currentSelect.contains(evt.target) && this.currentSelect.classList.contains(this.classOpen)) {
        this.currentSelect.classList.remove(this.classOpen);
        this.selectTrigger?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  toggleSelect() {
    this.currentSelect.classList.toggle(this.classOpen);
    const isExpanded = this.selectTrigger?.getAttribute('aria-expanded') === 'true';
    this.selectTrigger?.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
  }
}

const createCustomEvent = (type, payload) => {
  const event = new CustomEvent(type, {
    bubbles: payload.bubbles,
    cancelable: payload.cancelable,
    detail: payload,
  });
  Object.assign(event, payload);
  return event;
};

const updateCheckedCountForMultiSelect = (multiSelectElement) => {
  const checkedCount = multiSelectElement.querySelectorAll('input[type="checkbox"]:checked').length;
  const filterButton = multiSelectElement.querySelector('button');
  if (!filterButton) {
    return;
  }

  filterButton.querySelector('span')?.remove();

  if (checkedCount > 0) {
    const countElement = document.createElement('span');
    countElement.textContent = ` (${checkedCount}) `;
    filterButton.append(countElement);
  }
};

export function multiSelect() {
  // Display number of inputs that are selected on load.
  document.querySelectorAll('.multi-select').forEach((multiSelectElement) => {
    updateCheckedCountForMultiSelect(multiSelectElement);
  });

  // Initiate MultiSelect object.
  document.querySelectorAll('[data-multi-select]').forEach((selectElement) => {
    const multiSelect = new MultiSelect(selectElement);
    multiSelect.init();
  });
}
