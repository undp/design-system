export function langSwitch() {
  $('.dropdown-language').click(() => {
    $('.dropdown-language').toggleClass('active');
    if($('.dropdown-language').hasClass('active'))
    {
      $('.dropdown-language').find("a").attr("tabIndex","0");
    }else{
      $('.dropdown-language').find("a").attr("tabIndex","-1");
    }
  });

  $(document).on('click', (event) => {
    const $trigger = $('.dropdown-language');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('.dropdown-language').removeClass('active');
    }
  });
}
