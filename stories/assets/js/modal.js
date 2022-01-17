/* Modal JS start custom */
export function modal() {
  const $modalOverlay = $('.modal');
  const $modal = $('.modal-content');
  const $modalClose = $('.modal-close-button');
  const $modalOpen = $('[data-toggle="modal"]');

  // modal function
  function modalOpen(modal) {
    let modalSelector = '';
    $modalOpen.click((event) => {
      modalSelector = event.currentTarget.getAttribute('data-target-modal');
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
  $modalClose.click((event) => {
    event.preventDefault();
    $modalOverlay.click();
  });

  modalOpen(modal);
}
/* Modal JS end custom */
