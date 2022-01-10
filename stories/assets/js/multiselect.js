class MultiSelect {
  constructor(element) {
    this.classOpen = 'open';

    this.$window = $(window);
    this.$currentSelect = $(element);
    this.$selectTrigger = this.$currentSelect.find('button').first();
  }

  init() {
    this.addListeners();
    this.listenerWindowClick();
  }

  addListeners() {
    this.$selectTrigger.click(() => {
      this.toggleSelect();
    });

    this.$currentSelect.on('click', 'input[type=checkbox]', (ev) => {
      ev.stopImmediatePropagation();

      const $selectedCheckbox = $(ev.target);
      const $selectedOption = $selectedCheckbox.closest('li[role=option]');

      $selectedOption.attr('aria-selected', $selectedCheckbox.is(':checked'));
    });

    this.$currentSelect.on('click', '.has-submenu > .checkbox-item', (ev) => {
      ev.stopImmediatePropagation();
      const $clickedElement = $(ev.target);

      if (!$clickedElement.hasClass('checkmark')) {
        ev.preventDefault();

        const $rowHasSubmenu = $(ev.currentTarget).closest('li.has-submenu');
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
      const $caretButton = $(ev.currentTarget);
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
  const $selects = $('[data-multi-select]');
  $selects.each((i, select) => {
    const multiSelect = new MultiSelect(select);
    multiSelect.init();
  });
}
