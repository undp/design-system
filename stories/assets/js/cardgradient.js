export function Cardgradient() {
  $(".wide-card__description .button-arrow").mouseenter(function () {
    $(".wide-card__image a").addClass("card-gradient");
  });
  $(".wide-card__description .button-arrow").mouseleave(function () {
    $(".wide-card__image a").removeClass("card-gradient");
  });
}
