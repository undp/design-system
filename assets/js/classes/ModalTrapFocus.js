class ModalTrapFocus {
    constructor(element) {
        this.modal = element;
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;

        // Add all the elements inside modal which you want to make focusable
        this.focusableElements =
            'button:not([tabindex="-1"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.focusableContent = null;


        this.handleTrapFocus = e => {
            let isTabPressed = e.key === 'Tab' || e.wich === 9;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // if shift key pressed for shift + tab combination
                if (document.activeElement === this.firstFocusableElement) {
                    this.lastFocusableElement.focus(); // add focus for the last focusable element
                    e.preventDefault();
                }
            } else { // if tab key is pressed
                if (document.activeElement === this.lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                    console.log('in', this.firstFocusableElement)
                    this.firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        }
    }

    init() {
        this.addListener();
        this.observer();
    }

    observer() {
        // Re run listener for new DOM elements added dynamically
        const observer = new MutationObserver((mutationsList) => {
            if(mutationsList.length) {
                this.addListener();
            }
        });

        const config = { childList: true, subtree: true };

        observer.observe(this.modal, config);
    }

    addListener() {
        this.modal.removeEventListener('keydown', this.handleTrapFocus);

        this.getFocusableContent()

        this.firstFocusableElement = this.focusableContent[0]; // get first element to be focused inside modal
        this.lastFocusableElement = this.focusableContent[this.focusableContent.length - 1]; // get last element to be focused inside modal

        this.modal.addEventListener('keydown', this.handleTrapFocus);


        if(this.firstFocusableElement) {
            this.firstFocusableElement.focus();
        }

        this.findCloseButton();
    }

    getFocusableContent() {
        this.focusableContent = this.modal.querySelectorAll(this.focusableElements);
        this.focusableContent = this.removeHiddenElements();
    }

    removeHiddenElements() {
        const focusablesArray = [...this.focusableContent];

        // Use traditional 'for loops' for IE 11
        for (let i = 0; i < focusablesArray.length; i++) {
            let element = focusablesArray[i];
            let computedStyle = window.getComputedStyle(element);

            if(computedStyle.display === 'none') {
                focusablesArray.splice(i, 1);
            }
        }

        return focusablesArray;
    }

    findCloseButton() {
        // Location and Search modals have close button outside of modal,
        // We have to find the element and add it to the TrapFocus array to loop back to it
        const modalsWithCloseButtonsOutside = ['modal-search-offices', 'modal-popular-search'];

        modalsWithCloseButtonsOutside.forEach(id => {
            if(this.modal.id === id) {
                let openCloseButton = document.querySelector(`.header [data-modal-open][data-modal=${id}`)
                this.focusableContent.unshift(openCloseButton)
                this.firstFocusableElement = openCloseButton
            }
        })
    }
}

export default ModalTrapFocus;
