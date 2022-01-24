const selectCount = [];
const toggleFilter = function () {
  const searchOption = $('.multi-select li input:checkbox');
  const chipsWrapper = $('.search-filter .selected-chips');

  $(".multi-select").each(function( index ) { 
    const numberOfCheck = $(this).find('input:checkbox:checked').length;
    if(numberOfCheck > 0){
      $(this).find('button').first().find('span').remove();
      $(this).find('button').first().append('<span> (' + numberOfCheck + ') </span>');
    }
  });
  
  $(searchOption).on('click', function (e) {
    e.stopImmediatePropagation();
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    const eleId = el.attr('id');
    const numberOfChecked = $(this).parents('.multi-select').find('input:checkbox:checked').length;
    const filterButton = $(this).parents('ul').not('.sub-menu').siblings();
    if(numberOfChecked > 0){
      filterButton.find('span').remove();
      filterButton.append('<span> (' + numberOfChecked + ') </span>');
    }else{
      filterButton.find('span').remove();
    }
    if (el.is(':checked')) {
      const optionValue = $(this).siblings().text();
      const chips = $(currentChipsWrapper).find('.chips:first-child').clone();
      chips.text(optionValue);
      chips.attr({'option-name': eleId });
      $(currentChipsWrapper).append(chips);

      if (currentChipsWrapper.find('.chips__cross').length > 1) {
        $(currentChipsWrapper).siblings('.clear-search-filter').addClass('show-clear');
      }
      if ($(currentChipsWrapper).find('.chips__cross').length > 1) {
        $(currentChipsWrapper).siblings('.active-filter').addClass('show-activefilter');
      }
    } else {
      if (currentChipsWrapper.find('.chips__cross').length < 3) {
        currentChipsWrapper.siblings('.clear-search-filter').removeClass('show-clear');
      }
      if (currentChipsWrapper.find('.chips__cross').length < 3) {
        currentChipsWrapper.siblings('.active-filter').removeClass('show-activefilter');
      }
      $(el).parents('.select-wrapper').find(`[option-name='${eleId}']`).remove();
    }
  });

  $(chipsWrapper).on('click', '.chips__cross', function (event) {
    event.preventDefault();
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    if ($(currentChipsWrapper).find('.chips__cross').length < 3) {
      el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
      el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    }
    const id = $(this).attr('option-name');
    const findId = $(this).parents('.select-wrapper').find(`#${id}`);
    findId.prop('checked', false);
    const inputCount = findId.parents('.multi-select').find('input:checkbox:checked').length;
    const currentInputCount = findId.parents('ul').not('.sub-menu').siblings();
    if(inputCount > 0){
      currentInputCount.find('span').remove();
      currentInputCount.append('<span> (' + inputCount + ') </span>');
    }else{
      currentInputCount.find('span').remove();
    }
    $(this).remove();
  });

  $(document).on('click', '.clear-search-filter', function () {
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    $(currentChipsWrapper).find('a').not(':first-child').remove();
    el.parents('.select-wrapper').find('.clear-search-filter').removeClass('show-clear');
    el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    el.parents('.select-wrapper').find("input[type='checkbox']").prop('checked', false);
    el.parents('.select-wrapper').find("button").find('span').remove();
  });
};

export default toggleFilter;

// for webpack build
export {toggleFilter as toggleFilter}
