/* Modal JS start custom */
export function modal() {
  const $modalOverlay = jQuery('.modal');
  const $modal = jQuery('.modal-content');
  const $modalClose = jQuery('.modal-close-button');
  const $modalOpen = jQuery('[data-toggle="modal"]');

  // modal function
  function modalOpen(modal) {
    let modalSelector = '';
    $modalOpen.click((e) => {
      modalSelector = e.currentTarget.getAttribute('data-target-modal');
      e.preventDefault();
      jQuery(modalSelector).addClass('open');
    });
    $modalOverlay.click(() => {
      jQuery(modalSelector).removeClass('open');
    });
  }

  // stop close function for modal content
  $modal.click((e) => {
    e.stopPropagation();
  });

  // handle escape key
  jQuery(document).keydown((e) => {
    if (e.keyCode == 27 && $modalClose) {
      $modalClose.trigger('click');
    }
  });

  // Close icon function
  $modalClose.click((e) => {
    e.preventDefault();
    $modalOverlay.click();
  });

  modalOpen(modal);
}
/* Modal JS end custom */
