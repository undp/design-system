
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
    this.$selectTrigger.click((ev) => {
      ev.stopImmediatePropagation();
      this.toggleSelect();
    });

    this.$currentSelect.on('click', 'input[type=checkbox]', (ev) => {
      ev.stopImmediatePropagation();

      const $selectedCheckbox = jQuery(ev.target);
      const $selectedOption = $selectedCheckbox.closest('li[role=option]');

      $selectedOption.attr('aria-selected', $selectedCheckbox.is(':checked'));
    });

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
  (function( $ ) {
    jQuery(".multi-select").each(function( index ) {
      const numberOfCheck = jQuery(this).find('input:checkbox:checked').length;
      if(numberOfCheck > 0){
        jQuery(this).find('button').first().find('span').remove();
        jQuery(this).find('button').first().append('<span> (' + numberOfCheck + ') </span>');
      }
    });
    const searchOption = jQuery('.multi-select li input:checkbox');
    jQuery(searchOption).on('click', function () {
      const numberOfChecked = jQuery(this).parents('.multi-select').find('input:checkbox:checked').length;
      const filterButton = jQuery(this).parents('ul').not('.sub-menu').siblings();
      if(numberOfChecked > 0){
        filterButton.find('span').remove();
        filterButton.append('<span> (' + numberOfChecked + ') </span>');
      }else{
        filterButton.find('span').remove();
      }
    });
    const $selects = jQuery('[data-multi-select]');
    $selects.each((i, select) => {
      const multiSelect = new MultiSelect(select);
      multiSelect.init();
    });
  })(jQuery);
}
