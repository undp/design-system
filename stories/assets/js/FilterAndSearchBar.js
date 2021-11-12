const toggleFilter = function () {
  const selectWrapper = $('.select-wrapper');
  $(document).on('click', '#toggle-search', () => {
    $(selectWrapper).toggleClass('show-filter');
  });
  const searchOption = $('.options li input');
  const chipsWrapper = $('#search-filter .selected-chips');
  $('.select-control').on('click', function () {
    $(this).parent('.regions-select').toggleClass('open');
  });

  $(searchOption).on('click', function () {
    if ($(chipsWrapper).find('.chips__cross').length < 3) {
      // $(document).find('.clear_section').remove();
    }
    const el = $(this);
    const eleId = el.attr('id');
    if (el.is(':checked')) {
      const optionValue = $(this).siblings().text();
      const chips = $(chipsWrapper).find('.chips:first-child').clone();
      chips.text(optionValue);
      chips.attr({ href: 'javascript:void(0)', 'option-name': eleId });
      $(chipsWrapper).append(chips);
      if ($(chipsWrapper).find('.chips__cross').length > 1) {
        $(selectWrapper).find('.clear_section').addClass('show-clear');
      }
      if ($(chipsWrapper).find('.chips__cross').length > 1) {
        $(selectWrapper).find('.active-filter').addClass('show-activefilter');
      }
    } else {
      $(chipsWrapper).find(`[option-name='${eleId}']`).remove();
    }
  });

  $(chipsWrapper).on('click', '.chips__cross', function () {
    console.log($(chipsWrapper).find('.chips__cross').length);
    if ($(chipsWrapper).find('.chips__cross').length < 3) {
      $(selectWrapper).find('.clear_section').removeClass('show-clear');
      $(selectWrapper).find('.active-filter').removeClass('show-activefilter');
    }
    const id = $(this).attr('option-name');
    $(this).remove();
    $('.multi-select').find(`#${id}`).prop('checked', false);
  });

  $(document).on('click', '.clear_chips', () => {
    $(chipsWrapper).find('a').not(':first-child').remove();
    $(selectWrapper).find('.clear_section').removeClass('show-clear');
    $(selectWrapper).find('.active-filter').removeClass('show-activefilter');
    $('.multi-select').find("input[type='checkbox']").prop('checked', false);
  });
};

export default toggleFilter;
