export function Cardgradient() {
  $('.wide-card__description .button-arrow').mouseenter(() => {
    $('.wide-card__image a').addClass('card-gradient');
  });
  $('.wide-card__description .button-arrow').mouseleave(() => {
    $('.wide-card__image a').removeClass('card-gradient');
  });
}
