/* Modal JS start custom */
export function ModalFun() {
  var $modalOverlay = $('#myModal');
  var $modal = $('.modal-content');
  var $modalClose = $('.modal-close-button');
  var $modalOpen = $('#bio-card');
  var modal = '#myModal';

  $(modal).css("visibility", "hidden");

  function modalOpen(modal) {
    $modalOpen.click(function() {
      $(modal).css("visibility", "visible").addClass('open');
    });
    $modalOverlay.click(function() {
      $(modal).css("visibility", "hidden").removeClass('open');
    });
  }
  
  $modal.click(function(e) {
    e.stopPropagation();
  });

  $modalClose.click(function() {
    $modalOverlay.click();
  });

  modalOpen(modal);

}
/* Modal JS end custom */
