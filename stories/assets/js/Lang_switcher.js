export function LangSwitch() {
  $('.dropdown-language').click(function () {
    $('.dropdown-language').toggleClass('active');
    $(this).find('.dropdown-language__content').slideToggle();
  });

  $(document).on('click', (event) => {
    const $trigger = $('.dropdown-language');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('.dropdown-language').removeClass('active');
      $('.dropdown-language__content').slideUp();
    }
  });
}
