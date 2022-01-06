const toggleFilter = function () {
  const selectWrapper = $('.select-wrapper');
  $('.toggle-search').click(function () {
    $(this).siblings(selectWrapper).toggleClass('show-filter');
  });
  const searchOption = $('.multi-select li input');
  const chipsWrapper = $('.search-filter .selected-chips');

  $('.multi-select').on('click', function (e) {
    $(this).toggleClass('open');
  });

  $(searchOption).on('click', function () {
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    const eleId = el.attr('id');
    if (el.is(':checked')) {
      const optionValue = $(this).siblings().text();
      const chips = $(currentChipsWrapper).find('.chips:first-child').clone();
      chips.text(optionValue);
      chips.attr({ href: 'javascript:void(0)', 'option-name': eleId });
      $(currentChipsWrapper).append(chips);

      if (currentChipsWrapper.find('.chips__cross').length > 1) {
        $(currentChipsWrapper).siblings('.clear_section').addClass('show-clear');
      }
      if ($(currentChipsWrapper).find('.chips__cross').length > 1) {
        $(currentChipsWrapper).siblings('.active-filter').addClass('show-activefilter');
      }
    } else {
      if (currentChipsWrapper.find('.chips__cross').length < 3) {
        currentChipsWrapper.siblings('.clear_section').removeClass('show-clear');
      }
      if (currentChipsWrapper.find('.chips__cross').length < 3) {
        currentChipsWrapper.siblings('.active-filter').removeClass('show-activefilter');
      }
      $(el).parents('.select-wrapper').find(`[option-name='${eleId}']`).remove();
    }
  });

  $(chipsWrapper).on('click', '.chips__cross', function () {
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    if ($(currentChipsWrapper).find('.chips__cross').length < 3) {
      el.parents('.select-wrapper').find('.clear_section').removeClass('show-clear');
      el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    }
    const id = $(this).attr('option-name');
    $(this).parents('.select-wrapper').find(`#${id}`).prop('checked', false);
    $(this).remove();
  });

  $(document).on('click', '.clear_chips', function () {
    const el = $(this);
    const currentChipsWrapper = el.parents('.select-wrapper').find('.selected-chips');
    $(currentChipsWrapper).find('a').not(':first-child').remove();
    el.parents('.select-wrapper').find('.clear_section').removeClass('show-clear');
    el.parents('.select-wrapper').find('.active-filter').removeClass('show-activefilter');
    el.parents('.select-wrapper').find("input[type='checkbox']").prop('checked', false);
  });
};

export default toggleFilter;
