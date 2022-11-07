export function langSwitch() {
  jQuery('.dropdown-language').click(() => {
    jQuery('.dropdown-language').toggleClass('active');
    if(jQuery('.dropdown-language').hasClass('active'))
    {
      jQuery('.dropdown-language').find("a").attr("tabIndex","0");
    }else{
      jQuery('.dropdown-language').find("a").attr("tabIndex","-1");
    }
  });

  jQuery(document).on('click', (event) => {
    const $trigger = jQuery('.dropdown-language');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      jQuery('.dropdown-language').removeClass('active');
    }
  });
}
