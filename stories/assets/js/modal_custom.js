/* Modal JS start custom */
export function ModalFun() {
  const $modalOverlay = $('.modal');
  const $modal = $('.modal-content');
  const $modalClose = $('.modal-close-button');
  const $modalOpen = $('.bio-card');
  const modal = '#myModal';

  $(modal).css('visibility', 'hidden');

  function modalOpen(modal) {
    $modalOpen.click(() => {
      $(modal).css('visibility', 'visible').addClass('open');
    });
    $modalOverlay.click(() => {
      $(modal).css('visibility', 'hidden').removeClass('open');
    });
  }

  $modal.click((e) => {
    e.stopPropagation();
  });

  $modalClose.click(() => {
    $modalOverlay.click();
  });

  modalOpen(modal);
}
/* Modal JS end custom */
