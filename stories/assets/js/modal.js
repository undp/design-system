/* Modal JS start custom */
export function modal() {
  const $modalOverlay = $('.modal');
  const $modal = $('.modal-content');
  const $modalClose = $('.modal-close-button');
  const $modalOpen = $('.bio-card, #modal');
  const modalSelector = '.modal';

  // modal function
  function modalOpen(modal) {
    $modalOpen.click(() => {
      event.preventDefault();
      $(modalSelector).addClass('open');
    });
    $modalOverlay.click(() => {
      $(modalSelector).removeClass('open');
    });
  }

  // stop close function for modal content
  $modal.click((e) => {
    e.stopPropagation();
  });

  // Close icon function
  $modalClose.click(() => {
    event.preventDefault();
    $modalOverlay.click();
  });

  modalOpen(modal);
}
/* Modal JS end custom */
