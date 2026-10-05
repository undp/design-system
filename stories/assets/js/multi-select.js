let disclosureId = 0;

/**
 * Identify filter-chip interactions that must not dismiss open multiselects.
 * @param {Element|null} target Click target or next focused element.
 * @returns {boolean} Whether the target is a removable filter chip.
 */
const isFilterChip = (target) => Boolean(target?.closest('.chip__cross[option-name]'));

/**
 * Connect a native disclosure button to its panel and accessible group name.
 * @param {HTMLButtonElement} trigger Button controlling the panel.
 * @param {HTMLElement} panel Disclosure content containing native form controls.
 * @returns {void} Assigns missing IDs and normalizes legacy listbox markup.
 */
const initializeDisclosure = (trigger, panel) => {
  if (!trigger || !panel) {
    return;
  }
  [trigger, panel].forEach((element) => {
    if (!element.id) {
      do {
        disclosureId += 1;
        element.id = `multi-select-disclosure-${disclosureId}`;
      } while (document.getElementById(element.id) !== element);
    }
  });
  trigger.setAttribute('type', 'button');
  trigger.setAttribute('aria-controls', panel.id);
  panel.setAttribute('role', 'group');
  panel.setAttribute('aria-labelledby', trigger.id);
  panel.removeAttribute('aria-modal');
  panel.removeAttribute('aria-multiselectable');
  panel.querySelectorAll('li').forEach((option) => {
    option.setAttribute('role', 'none');
    option.removeAttribute('aria-selected');
    option.removeAttribute('aria-expanded');
  });
};

/**
 * Synchronize a disclosure panel's visual and accessibility visibility.
 * @param {HTMLButtonElement} trigger Button controlling the panel.
 * @param {HTMLElement} panel Disclosure content.
 * @param {boolean} isOpen Whether the disclosure is expanded.
 * @returns {void} Updates hidden and ARIA state.
 */
const updateDisclosureState = (trigger, panel, isOpen) => {
  trigger?.setAttribute('aria-expanded', String(isOpen));
  if (panel) {
    panel.hidden = !isOpen;
    panel.setAttribute('aria-hidden', String(!isOpen));
  }
};

/**
 * Multiselect item.
 */
class MultiSelect {
  constructor(element) {
    this.classOpen = 'open';
    this.currentSelect = element;
    this.selectTrigger = this.currentSelect.querySelector('button');
    this.selectPanel = this.currentSelect.querySelector(':scope > ul');
  }

  init() {
    if (this.currentSelect.dataset.multiSelectInitialized === 'true') {
      return;
    }

    initializeDisclosure(this.selectTrigger, this.selectPanel);
    this.setOpen(this.currentSelect.classList.contains(this.classOpen), false);
    this.currentSelect.querySelectorAll('li.has-submenu').forEach((group) => {
      const trigger = group.querySelector(
        ':scope > button.checkbox-item, :scope > button.caret'
      );
      const panel = group.querySelector(':scope > ul');
      initializeDisclosure(trigger, panel);
      updateDisclosureState(
        trigger,
        panel,
        group.classList.contains(this.classOpen)
      );
    });
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
      ev.preventDefault();
      this.toggleSelect();
    });

    this.currentSelect.addEventListener('click', (ev) => {
      const selectedCheckbox = ev.target.closest('input[type="checkbox"]');
      if (selectedCheckbox && this.currentSelect.contains(selectedCheckbox)) {
        ev.stopImmediatePropagation();
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
      const checkboxItem = ev.target.closest(
        '.has-submenu > .checkbox-item, .has-submenu > button.caret'
      );
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
          updateDisclosureState(
            rowHasSubmenu.querySelector(
              ':scope > button.checkbox-item, :scope > button.caret'
            ),
            rowHasSubmenu.querySelector(':scope > ul'),
            isOpen
          );
          caretButton?.setAttribute('aria-expanded', String(isOpen));
        }
      }
    });

    this.currentSelect.addEventListener('keydown', (event) => {
      if (
        event.key !== 'Escape' ||
        !this.currentSelect.classList.contains(this.classOpen)
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const group = event.target.closest('li.has-submenu.open');
      if (group && this.currentSelect.contains(group)) {
        const trigger = group.querySelector(
          ':scope > button.checkbox-item, :scope > button.caret'
        );
        trigger?.focus();
        group.classList.remove(this.classOpen);
        updateDisclosureState(
          trigger,
          group.querySelector(':scope > ul'),
          false
        );
      } else {
        this.setOpen(false);
        this.selectTrigger.focus();
      }
    });

    this.currentSelect.addEventListener('focusout', (event) => {
      if (
        event.relatedTarget &&
        !isFilterChip(event.relatedTarget) &&
        !this.currentSelect.contains(event.relatedTarget)
      ) {
        this.setOpen(false);
      }
    });
  }

  listenerWindowClick() {
    document.addEventListener('click', (evt) => {
      if (
        !this.currentSelect.contains(evt.target) &&
        !isFilterChip(evt.target) &&
        this.currentSelect.classList.contains(this.classOpen)
      ) {
        this.setOpen(false);
      }
    });
  }

  toggleSelect() {
    this.setOpen(!this.currentSelect.classList.contains(this.classOpen));
  }

  /**
   * Set disclosure state for trigger, outside-click, focus exit, and Escape.
   * @param {boolean} isOpen Desired open state.
   * @param {boolean} emitEvent Whether to emit a changed-state event.
   * @returns {void} Updates visibility and moves focus before hiding active content.
   */
  setOpen(isOpen, emitEvent = true) {
    const wasOpen = this.currentSelect.classList.contains(this.classOpen);
    if (!isOpen && this.selectPanel?.contains(document.activeElement)) {
      this.selectTrigger?.focus();
    }
    this.currentSelect.classList.toggle(this.classOpen, isOpen);
    updateDisclosureState(this.selectTrigger, this.selectPanel, isOpen);
    if (emitEvent && wasOpen !== isOpen && this.selectTrigger) {
      this.currentSelect.dispatchEvent(
        createCustomEvent('multiSelectToggle', {
          bubbles: true,
          cancelable: false,
          select_trigger_dataset_id: this.selectTrigger.dataset?.id || false,
          select_trigger_id: this.selectTrigger.id || false,
          state: isOpen ? 'open' : 'closed',
          open: isOpen,
          closed: !isOpen
        })
      );
    }
  }
}

const createCustomEvent = (type, payload) => {
  const { bubbles, cancelable, ...eventProperties } = payload;
  const event = new CustomEvent(type, {
    bubbles,
    cancelable,
    detail: payload,
  });
  Object.assign(event, eventProperties);
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
