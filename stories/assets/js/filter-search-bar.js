const selectCount = [];
const toggleFilter = function () {
  const $searchOption = jQuery('.multi-select li input:checkbox');
  const $chipWrapper = jQuery('.search-filter .selected-chips');

  jQuery('.multi-select').each(function (index) {
    const $el = jQuery(this);
    const $numberOfCheck = $el.find('input:checkbox:checked').length;
    if ($numberOfCheck > 0) {
      $el.find('button').first().find('span')
        .remove();
      $el.find('button').first().append(`<span> (${$numberOfCheck}) </span>`);
    }
  });

  $searchOption.on('click', function (e) {
    e.stopImmediatePropagation();

    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    const $eleId = $el.attr('id');
    const $numberOfChecked = jQuery(this).parents('.multi-select').find('input:checkbox:checked').length;
    const $filterButton = jQuery(this).parents('ul').not('.sub-menu').siblings();
    if ($numberOfChecked > 0) {
      $filterButton.find('span').remove();
      $filterButton.append(`<span> (${$numberOfChecked}) </span>`);
    } else {
      $filterButton.find('span').remove();
    }
    if ($el.is(':checked')) {
      const $optionValue = jQuery(this).siblings().text();
      const $chip = jQuery('<span class="chip chip__cross" tabindex="0" role="button"></span>').clone();
      $chip.text($optionValue);
      $chip.attr({ 'option-name': $eleId });
      $currentchipWrapper.append($chip);

      if ($currentchipWrapper.find('.chip__cross').length > 0) {
        $currentchipWrapper.siblings('.clear-search-filter').addClass('show-clear')
          .siblings('.active-filter').addClass('show-activefilter');
      }
    } else {
      if ($currentchipWrapper.find('.chip__cross').length < 2) {
        $currentchipWrapper.siblings('.clear-search-filter').removeClass('show-clear')
          .siblings('.active-filter').removeClass('show-activefilter');
      }
      $el.parents('.select-wrapper').find(`[option-name='${$eleId}']`).remove();
    }

    // Add checkbox toggle event watcher.
    jQuery(this).trigger({
      type: 'filterSearchMultiSelectToggle',
      bubbles: true,
      cancelable: false,
      state: $el[0].checked,
      toggle_state: ($el.is(':checked')) ? 'checked' : 'unchecked',
      checkbox_id: $eleId,
    });
  });

  $chipWrapper.on('click', '.chip__cross', function (event) {
    event.preventDefault();
    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    if ($currentchipWrapper.find('.chip__cross').length < 2) {
      $el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
      $el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    }
    const $id = $el.attr('option-name');
    const $findId = $el.parents('.select-wrapper').find(`#${$id}`);
    $findId.prop('checked', false);
    const $inputCount = $findId.parents('.multi-select').find('input:checkbox:checked').length;
    const $currentInputCount = $findId.parents('ul').not('.sub-menu').siblings();
    if ($inputCount > 0) {
      $currentInputCount.find('span').remove();
      $currentInputCount.append(`<span> (${$inputCount}) </span>`);
    } else {
      $currentInputCount.find('span').remove();
    }

    // Add Chip removal event watcher.
    $el.trigger({
      type: 'filterSearchChipRemoval',
      bubbles: true,
      cancelable: false,
      chip_id: $id,
    });

    $el.remove();
  });

  jQuery(document).on('click', '.clear-search-filter', function () {
    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    jQuery($currentchipWrapper).find('.chip').remove();
    $el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
    $el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    $el.parents('.select-wrapper').find("input[type='checkbox']").prop('checked', false);
    $el.parents('.select-wrapper').find('button').find('span').remove();

    // Add search filter clear event watcher.
    jQuery(this).trigger({
      type: 'filterSearchClear',
      bubbles: true,
      cancelable: false,
    });
  });

  jQuery(document).on('click', '.sort-filter-search', function () {
    const $el = jQuery(this);
    $el.toggleClass('close');
    $el.next('.search-filter').toggleClass('show-filter');
  });

  // For testing custom events
  jQuery(document).on('filterSearchChipRemoval', (event) => {
    // console.log('I fire on Chip removal');
  });

  jQuery(document).on('filterSearchMultiSelectToggle', (event) => {
    // console.log('I fire on multi-select toggle');
  });

  jQuery(document).on('filterSearchClear', (event) => {
    // console.log('I fire on search filter clearing');
  });
};

export default toggleFilter;

// for webpack build
export { toggleFilter };
