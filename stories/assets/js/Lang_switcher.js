export function LangSwitch() {
  $("#switcher").click(function () {
    $(".dropdown-language").toggleClass("active");
    $(this).find(".dropdown-language__content").slideToggle();
  });

  $(document).on("click", function (event) {
    var $trigger = $("#switcher");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".dropdown-language").removeClass("active");
      $(".dropdown-language__content").slideUp();
    }
  });
}
