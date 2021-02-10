class ModalTrapFocus {
    constructor(element) {
        this.modal = element;
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.currentFocusableElement = null;

        // Add all the elements inside modal which you want to make focusable
        this.focusableElements =
            'button:not([tabindex="-1"]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        this.focusableContent = null;


        this.handleTrapFocus = e => {
            let isTabPressed = e.key === 'Tab' || e.wich === window.UNDP.keyCode.TAB;

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
                    this.firstFocusableElement.focus(); // add focus for the first focusable element
                    e.preventDefault();
                }
            }
        }

        this.saveCurrentFocus = () => {
            if(this.currentFocusableElement !== null) {
                this.currentFocusableElement.removeEventListener('blur', this.saveCurrentFocus)
            }
            this.currentFocusableElement = document.activeElement;
            this.currentFocusableElement.addEventListener('blur', this.saveCurrentFocus)
        }
    }

    init() {
        this.addListener();
        this.observer();
    }

    observer() {
        // Re run listener for new DOM elements added dynamically
        const observer = new MutationObserver((mutationsList) => {
            let recreateFocusableElements = false;
            // Use traditional 'for loops' for IE 11
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' ||
                    (mutation.type === 'attributes' && mutation.attributeName === 'disabled')) {
                    recreateFocusableElements = true;
                    break;
                }
            }

            if(recreateFocusableElements) {
                this.addListener();
            }
        });

        const config = { childList: true, subtree: true, attributes: true };

        observer.observe(this.modal, config);
    }

    addListener() {
        this.modal.removeEventListener('keydown', this.handleTrapFocus);

        this.getFirstAndLastFocusables()

        this.modal.addEventListener('keydown', this.handleTrapFocus);
        this.modal.addEventListener('keyup', this.saveCurrentFocus)

        if(this.currentFocusableElement !== null) {
            this.currentFocusableElement.focus();
        }else if(this.firstFocusableElement) {
            this.firstFocusableElement.focus();
        }

        this.findCloseButton();
    }

    getFirstAndLastFocusables() {
        this.focusableContent = this.modal.querySelectorAll(this.focusableElements);
        const focusablesArray = [...this.focusableContent];

        for(let i = 0; i < focusablesArray.length; i++) {
            let element = focusablesArray[i];
            let computedStyle = window.getComputedStyle(element);

            if(computedStyle.display === 'none' || element.disabled === true) {
                continue;
            }

            this.firstFocusableElement = element; // get first element to be focused inside modal
            break;
        }

        for(let i = focusablesArray.length-1; i >= 0; i--) {
            let element = focusablesArray[i];
            let computedStyle = window.getComputedStyle(element);

            if(computedStyle.display === 'none' || element.disabled === true) {
                continue;
            }

            this.lastFocusableElement = element; // get last element to be focused inside modal
            break;
        }

        this.focusableContent = focusablesArray;
    }

    findCloseButton() {
        // Location and Search modals have close button outside of modal,
        // We have to find the element and add it to the TrapFocus array to loop back to it
        const modalsWithCloseButtonsOutside = ['modal-search-offices', 'modal-popular-search'];

        modalsWithCloseButtonsOutside.forEach(id => {
            if(this.modal.id === id) {
                let openCloseButton = document.querySelector(`.header [data-modal-open][data-modal=${id}]`)
                this.focusableContent.unshift(openCloseButton)
                this.firstFocusableElement = openCloseButton
            }
        })
    }
}

export default ModalTrapFocus;
