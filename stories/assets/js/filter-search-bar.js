const selectCount = [];
const toggleFilter = function () {
  const $searchOption = jQuery('.multi-select li input:checkbox');
  const $chipWrapper = jQuery('.search-filter .selected-chips');

  jQuery(".multi-select").each(function( index ) {
    const $numberOfCheck = jQuery(this).find('input:checkbox:checked').length;
    if($numberOfCheck > 0){
      jQuery(this).find('button').first().find('span').remove();
      jQuery(this).find('button').first().append('<span> (' + $numberOfCheck + ') </span>');
    }
  });

  jQuery($searchOption).on('click', function (e) {
    e.stopImmediatePropagation();
    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    const $eleId = $el.attr('id');
    const $numberOfChecked = jQuery(this).parents('.multi-select').find('input:checkbox:checked').length;
    const $filterButton = jQuery(this).parents('ul').not('.sub-menu').siblings();
    if($numberOfChecked > 0){
      $filterButton.find('span').remove();
      $filterButton.append('<span> (' + $numberOfChecked + ') </span>');
    }else{
      $filterButton.find('span').remove();
    }
    if ($el.is(':checked')) {
      const $optionValue = jQuery(this).siblings().text();
      const $chip = jQuery('<span class="chip chip__cross" tabindex="0" role="button"></span>').clone();
      $chip.text($optionValue);
      $chip.attr({'option-name': $eleId });
      jQuery($currentchipWrapper).append($chip);

      if ($currentchipWrapper.find('.chip__cross').length > 0) {
        $currentchipWrapper.siblings('.clear-search-filter').addClass('show-clear')
        .siblings('.active-filter').addClass('show-activefilter');
      }
    } else {
      if ($currentchipWrapper.find('.chip__cross').length < 2) {
        $currentchipWrapper.siblings('.clear-search-filter').removeClass('show-clear')
        .siblings('.active-filter').removeClass('show-activefilter');
      }
      jQuery($el).parents('.select-wrapper').find(`[option-name='${$eleId}']`).remove();
    }
  });

  jQuery($chipWrapper).on('click', '.chip__cross', function (event) {
    event.preventDefault();
    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    if (jQuery($currentchipWrapper).find('.chip__cross').length < 2) {
      $el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
      $el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    }
    const $id = jQuery(this).attr('option-name');
    const $findId = jQuery(this).parents('.select-wrapper').find(`#${$id}`);
    $findId.prop('checked', false);
    const $inputCount = $findId.parents('.multi-select').find('input:checkbox:checked').length;
    const $currentInputCount = $findId.parents('ul').not('.sub-menu').siblings();
    if($inputCount > 0){
      $currentInputCount.find('span').remove();
      $currentInputCount.append('<span> (' + $inputCount + ') </span>');
    }else{
      $currentInputCount.find('span').remove();
    }
    jQuery(this).remove();
  });

  jQuery(document).on('click', '.clear-search-filter', function () {
    const $el = jQuery(this);
    const $currentchipWrapper = $el.parents('.select-wrapper').find('.selected-chips');
    jQuery($currentchipWrapper).find('.chip').remove();
    $el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
    $el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    $el.parents('.select-wrapper').find("input[type='checkbox']").prop('checked', false);
    $el.parents('.select-wrapper').find("button").find('span').remove();
  });
  jQuery(document).on('click', '.sort-filter-search', function () {
    jQuery(this).toggleClass('close');
    jQuery(this).next('.search-filter').toggleClass('show-filter');
  });
};

export default toggleFilter;

// for webpack build
export {toggleFilter as toggleFilter}
