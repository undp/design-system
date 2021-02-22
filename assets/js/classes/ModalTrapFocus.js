class ModalTrapFocus {
    constructor(element) {
        this.modal = element;
        this.html = document.querySelector('html')
        this.body = document.querySelector('body')
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.currentFocusableElement = null;
        this.mutationObserverObject = null;

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

        this.saveCurrentFocus = (e, onBlur = false) => {
            let isTabPressed = e.key === 'Tab' || e.wich === window.UNDP.keyCode.TAB;

            if ((!isTabPressed && !onBlur)
                || this.currentFocusableElement === document.activeElement
                || document.activeElement === this.body) {
                return;
            }

            if(this.currentFocusableElement !== null) {
                this.currentFocusableElement.removeEventListener('blur', this.saveCurrentFocus)
            }
            this.currentFocusableElement = document.activeElement;
            this.currentFocusableElement.addEventListener('blur', e => {
                this.saveCurrentFocus(e, true)
            })
        }
    }

    init() {
        this.bindEvents()
        this.keyboardInputObserver()
    }

    bindEvents() {
        if(this.html.dataset.whatinput === 'keyboard'
            && this.html.dataset.whatintent === 'keyboard') {

            this.addListener();
            this.modalElementsChangedObserver();
        } else {

            if(this.mutationObserverObject !== null) {
                this.mutationObserverObject.disconnect()
            }

            this.modal.removeEventListener('keydown', this.handleTrapFocus);
            this.modal.removeEventListener('keyup', this.saveCurrentFocus)
        }
    }

    keyboardInputObserver() {
        const keyboardIntentObserver = new MutationObserver((mutationsList) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-whatinput') {
                    this.bindEvents()
                    break;
                }
            }
        });

        keyboardIntentObserver.observe(this.html, { attributes: true });
    }

    modalElementsChangedObserver() {
        // Re run listener for new DOM elements added/removed/disabled dynamically
        this.mutationObserverObject = new MutationObserver((mutationsList) => {
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
            } else {
                // Check if first and last focusable elements are still visible
                let computedStyle = window.getComputedStyle(this.lastFocusableElement);
                let isParentHidden = this.isParentHidden(this.lastFocusableElement)

                if(computedStyle.display === 'none' || isParentHidden) {
                    this.getFirstAndLastFocusables()
                }
            }
        });

        const config = { childList: true, subtree: true, attributes: true };

        this.mutationObserverObject.observe(this.modal, config);
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
            let isParentHidden = this.isParentHidden(element);

            if(computedStyle.display === 'none' || computedStyle.visibility === 'hidden'
                || element.disabled === true || isParentHidden) {
                continue;
            }

            this.firstFocusableElement = element; // get first element to be focused inside modal
            break;
        }

        for(let i = focusablesArray.length-1; i >= 0; i--) {
            let element = focusablesArray[i];
            let computedStyle = window.getComputedStyle(element);
            let isParentHidden = this.isParentHidden(element);

            if(computedStyle.display === 'none' || computedStyle.visibility === 'hidden'
                || element.disabled === true  || isParentHidden) {
                continue;
            }

            this.lastFocusableElement = element; // get last element to be focused inside modal
            break;
        }

        this.focusableContent = focusablesArray;
    }

    isParentHidden(element) {
        let $parentsUntilModal = $(element).parentsUntil(this.modal)
        let parentHidden = false;

        $parentsUntilModal.each((i, parent) => {
            if(!parentHidden) {
                let parentComputedStyle = window.getComputedStyle(parent);

                if(parentComputedStyle.display === 'none') {
                    parentHidden = true
                }
            }
        })

        return parentHidden
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
