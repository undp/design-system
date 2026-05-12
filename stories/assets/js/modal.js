/* Modal JS start custom */
export function modal() {
  const modalOverlays = Array.from(document.querySelectorAll('.modal'));
  const modalContents = Array.from(document.querySelectorAll('.modal-content'));
  const modalCloseButtons = Array.from(document.querySelectorAll('.modal-close-button'));
  const modalOpenButtons = Array.from(document.querySelectorAll('[data-toggle="modal"]'));
  let currentModalSelector = '';

  // modal function
  function bindModalOpen() {
    modalOpenButtons.forEach((openButton) => {
      if (openButton.dataset.modalOpenInited === 'true') {
        return;
      }

      openButton.addEventListener('click', (event) => {
        currentModalSelector = event.currentTarget?.getAttribute('data-target-modal') || '';
        event.preventDefault();

        if (!currentModalSelector) {
          return;
        }

        const modalElement = document.querySelector(currentModalSelector);
        if (modalElement) {
          modalElement.classList.add('open');
        }
      });

      openButton.dataset.modalOpenInited = 'true';
    });
  }

  modalOverlays.forEach((overlayElement) => {
    if (overlayElement.dataset.modalOverlayInited === 'true') {
      return;
    }

    overlayElement.addEventListener('click', () => {
      overlayElement.classList.remove('open');
    });

    overlayElement.dataset.modalOverlayInited = 'true';
  });

  // stop close function for modal content
  modalContents.forEach((modalContentElement) => {
    if (modalContentElement.dataset.modalContentInited === 'true') {
      return;
    }

    modalContentElement.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    modalContentElement.dataset.modalContentInited = 'true';
  });

  // handle escape key
  if (document.body.dataset.modalEscInited !== 'true') {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalCloseButtons.length > 0) {
        modalCloseButtons[0].click();
      }
    });

    document.body.dataset.modalEscInited = 'true';
  }

  const closeCurrentModal = (event) => {
    event.preventDefault();

    const overlayElement = event.currentTarget?.closest('.modal');
    if (overlayElement) {
      overlayElement.classList.remove('open');
      return;
    }

    if (!currentModalSelector) {
      return;
    }

    const modalElement = document.querySelector(currentModalSelector);
    if (modalElement) {
      modalElement.classList.remove('open');
    }
  };

  // Close icon function
  modalCloseButtons.forEach((closeButton) => {
    if (closeButton.dataset.modalCloseInited === 'true') {
      return;
    }

    closeButton.addEventListener('click', closeCurrentModal);
    closeButton.dataset.modalCloseInited = 'true';
  });

  bindModalOpen();
}
/* Modal JS end custom */
