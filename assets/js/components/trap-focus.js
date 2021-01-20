const init = function () {
    const navSubmenus = document.querySelectorAll('.modal-nav-hover, .menu-modal'); // select the modals
    const navSubmenusArray = Array.prototype.slice.call(navSubmenus, 0);
    navSubmenusArray.forEach(trapFocusOnModal);

    function trapFocusOnModal(modal) {
        // add all the elements inside modal which you want to make focusable
        const  focusableElements =
            'button:not([tabindex="-1"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        modal.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.wich === 9;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus(); // add focus for the last focusable element
                    e.preventDefault();
                }
            } else { // if tab key is pressed
                if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                    firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });

        if(firstFocusableElement) {
            firstFocusableElement.focus();
        }
    }
}

export default init
