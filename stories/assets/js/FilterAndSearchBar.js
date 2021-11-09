const toggleFilter = function () {
  $(document).on('click', '#toggle-search', () => {
    $('#select-wrapper').toggleClass('show-filter');
  });
  const searchOption = $('.options li input');

  const chipsWrapper = $('#search-filter #selected-chips');
  $('.select-control').on('click', function () {
    $(this).parent('.regions-select').toggleClass('open');
  });

  $(searchOption).on('click', function () {
    if ($(chipsWrapper).find('.chips__cross').length < 3) {
      $(document).find('.clear_section').remove();
    }
    const el = $(this);
    const eleId = el.attr('id');
    if (el.is(':checked')) {
      const optionValue = $(this).siblings().text();
      const chips = $(chipsWrapper).find('.chips:first-child').clone();
      chips.text(optionValue);
      chips.attr('href', 'javascript:void(0);');
      chips.attr('option-name', eleId);
      $(chipsWrapper).append(chips);
      if ($('#search-filter').find('.clear_section').length === 0) {
        $(chipsWrapper).after("<div class='clear_section'><span class='clear_chips'>Clear all</span></div>");
      }
    } else {
      $(chipsWrapper).find(`[option-name='${eleId}']`).remove();
    }
  });

  $(chipsWrapper).on('click', '.chips__cross', function () {
    if ($(chipsWrapper).find('.chips__cross').length < 3) {
      $(document).find('.clear_section').remove();
    }
    const id = $(this).attr('option-name');
    $(this).remove();
    $('.multi-select').find(`#${id}`).prop('checked', false);
  });

  $(document).on('click', '.clear_chips', () => {
    $(chipsWrapper).find('a').not(':first-child').remove();
    $('.clear_section').remove();
    $('.multi-select').find("input[type='checkbox']").prop('checked', false);
  });
};

export default toggleFilter;
