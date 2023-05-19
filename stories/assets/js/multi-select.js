/**
 * Multiselect item.
 */
class MultiSelect {
  constructor(element) {
    this.classOpen = 'open';

    this.$window = jQuery(window);
    this.$currentSelect = jQuery(element);
    this.$selectTrigger = this.$currentSelect.find('button').first();
  }

  init() {
    this.addListeners();
    this.listenerWindowClick();
  }

  addListeners() {
    this.$selectTrigger.on('click', (ev) => {
      ev.stopImmediatePropagation();
      this.toggleSelect();

      // Trigger on Multiselect dropdown toggle.
      this.$currentSelect.trigger({
        type: 'multiSelectToggle',
        bubbles: true,
        cancelable: false,
        select_trigger_dataset_id: this.$selectTrigger?.[0]?.dataset?.id ?? false,
        select_trigger_id: this.$selectTrigger?.[0]?.id ?? false,
        state: (this.$currentSelect.hasClass('open')) ? 'open' : 'closed',
        open: (this.$currentSelect.hasClass('open')),
        closed: (!this.$currentSelect.hasClass('open')),
      });
    });

    // Respond to the toggle of a checkbox input.
    this.$currentSelect.on('click', 'input[type=checkbox]', (ev) => {
      ev.stopImmediatePropagation();
      const $selectedCheckbox = jQuery(ev.target);
      const $selectedOption = $selectedCheckbox.closest('li[role=option]');
      $selectedOption.attr('aria-selected', $selectedCheckbox.is(':checked'));
    });

    // Open/Close sub groups (input is a caret).
    this.$currentSelect.on('click', '.has-submenu > .checkbox-item', (ev) => {
      ev.stopImmediatePropagation();
      const $clickedElement = jQuery(ev.target);
      if (!$clickedElement.hasClass('checkmark')) {
        ev.preventDefault();
        const $rowHasSubmenu = jQuery(ev.currentTarget).closest('li.has-submenu');
        const $caretButton = $rowHasSubmenu.find('button.caret');
        $rowHasSubmenu.toggleClass('open');
        if ($rowHasSubmenu.attr('aria-expanded') === 'true') {
          $rowHasSubmenu.attr('aria-expanded', 'false');
          $caretButton.attr('aria-expanded', 'false');
        } else {
          $rowHasSubmenu.attr('aria-expanded', 'true');
          $caretButton.attr('aria-expanded', 'true');
        }
      }
    });

    this.$currentSelect.on('click', '.has-submenu > button.caret', (ev) => {
      const $caretButton = jQuery(ev.currentTarget);
      $caretButton.siblings('.checkbox-item').trigger('click');
    });
  }

  listenerWindowClick() {
    this.$window.click((evt) => {
      if (this.$currentSelect && !this.$currentSelect.is(evt.target)
        && this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
        this.$currentSelect.removeClass(this.classOpen);
        this.$selectTrigger.attr('aria-expanded', 'false');
      }
    });
  }

  toggleSelect() {
    this.$currentSelect.toggleClass(this.classOpen);
    if (this.$selectTrigger.attr('aria-expanded') === 'true') {
      this.$selectTrigger.attr('aria-expanded', 'false');
    } else {
      this.$selectTrigger.attr('aria-expanded', 'true');
    }
  }
}

export function multiSelect() {
  (function ($) {
    // Display number of inputs that are selected on load.
    jQuery('.multi-select').each(function (index) {
      const $el = jQuery(this);
      const numberOfCheck = $el.find('input:checkbox:checked').length;
      if (numberOfCheck > 0) {
        $el.find('button').first().find('span')
          .remove();
        $el.find('button').first().append(`<span> (${numberOfCheck}) </span>`);
      }
    });

    // Update the display of number of inputs that have been selected.
    jQuery('.multi-select li input:checkbox').on('click', function () {
      const $el = jQuery(this);
      const numberOfChecked = $el.parents('.multi-select').find('input:checkbox:checked').length;
      const filterButton = $el.parents('ul').not('.sub-menu').siblings();
      if (numberOfChecked > 0) {
        filterButton.find('span').remove();
        filterButton.append(`<span> (${numberOfChecked}) </span>`);
      } else {
        filterButton.find('span').remove();
      }
    });

    // Trigger event on input toggle.
    jQuery('.multi-select li input').on('click', function (e) {
      const $el = jQuery(this);
      $el.trigger({
        type: 'multiSelectInputToggle',
        bubbles: true,
        cancelable: false,
        checkbox_id: $el[0].id,
        state: $el[0].checked,
        toggle_state: ($el[0].checked) ? 'checked' : 'unchecked',
        selected: $el[0].checked,
        unselected: !$el[0].checked,
      });
      e.stopImmediatePropagation();
    });

    // Initiate MultiSelect Object.
    jQuery('[data-multi-select]').each((i, select) => {
      const multiSelect = new MultiSelect(select);
      multiSelect.init();
    });
  }(jQuery));
}
