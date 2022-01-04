export function langSwitch() {
  $('.dropdown-language').click(function () {
    $('.dropdown-language').toggleClass('active');
  });

  $(document).on('click', (event) => {
    const $trigger = $('.dropdown-language');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('.dropdown-language').removeClass('active');
    }
  });
}
