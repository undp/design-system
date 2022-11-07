/* Modal JS start custom */
export function modal() {
  const $modalOverlay = jQuery('.modal');
  const $modal = jQuery('.modal-content');
  const $modalClose = jQuery('.modal-close-button');
  const $modalOpen = jQuery('[data-toggle="modal"]');

  // modal function
  function modalOpen(modal) {
    let modalSelector = '';
    $modalOpen.click((event) => {
      modalSelector = event.currentTarget.getAttribute('data-target-modal');
      event.preventDefault();
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
  jQuery(document).keydown(function(e) {
    if (e.keyCode == 27 && $modalClose) {
      $modalClose.trigger('click');
    }
  });

  // Close icon function
  $modalClose.click((event) => {
    event.preventDefault();
    $modalOverlay.click();
  });

  modalOpen(modal);
}
/* Modal JS end custom */
