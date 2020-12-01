class ModalNavHover {
    constructor() {
        this.classHide = 'hide';
        this.dataModalId = 'modal-nav';
        this.allowOpenModal = true;
        this.classMenuActive = 'active';
        this.dataContentOpacity = '.opacity';
        this.modalBody = '[data-modal-body]';
        this.dataMenuOptionId = 'menu-option';
        this.menuOptions = '[data-menu-option]';
        this.classAnimationColor = 'color-transition';
        this.classAnimationNextModal = 'change-modal';
        this.classAnimation = 'circle-square-transition';
        this.classAnimationOpacity = 'opacity-transition';

        this.$lastModal = null;
        this.$modalBody = null;
        this.$window = $(window);
        this.$currentModal = null;
        this.$modalContent = null;
        this.$modalMenuOptions = null;
        this.$nav = $('[data-navigation]');
        this.$modals = $('[data-modal-nav]');
    }

    init() {
        this.listenersHoverOpenModal();
    }

    listenersHoverOpenModal() {
        this.$modals.each((i, modal) => {
            $(modal).hover(() => {
                const modalId = $(modal).data(this.dataModalId);
                this.$currentModal = $('#' + modalId);
                if (this.$lastModal && this.$currentModal &&
                    !this.$lastModal.is(this.$currentModal)) {
                    this.closeModal();
                    this.allowOpenModal = true;
                }
                if (this.$currentModal && this.allowOpenModal) {
                    this.$modalContent = this.$currentModal.find(this.dataContentOpacity);
                    this.listenerHoverCloseModal();
                    this.listenerOpenMenuOption();
                    this.openModal();
                    this.allowOpenModal = false;
                }
                this.$lastModal = this.$currentModal;
            });
        })
    }

    listenerHoverCloseModal() {
        this.$modalBody = this.$currentModal.find(this.modalBody);

        this.$window.hover((evt) => {
            //close modal when the hover event is outside of nav and modal content
            if (!this.$modalBody.is(evt.target) && this.$modalBody.has(evt.target).length === 0 &&
                !this.$nav.is(evt.target) && this.$nav.has(evt.target).length === 0) {
                this.allowOpenModal = true;
                if (this.$lastModal) {
                    this.$lastModal = null;
                    this.resetTransitionAllModals();
                }
            }
        })
    }

    openModal() {
        this.$currentModal.removeClass(this.classHide).addClass(this.classAnimationColor);
        this.$modalBody.addClass(this.classAnimation).removeClass(this.classHide);
        this.$modalContent.addClass(this.classAnimationOpacity);
        this.removeTransitions();
    }

    //if we open our seconds modal, we not require transitions so remove it
    removeTransitions() {
        if (this.$lastModal) {
            this.$currentModal.addClass(this.classAnimationNextModal);
            this.$modalBody.addClass(this.classAnimationNextModal);
            this.$modalContent.addClass(this.classAnimationNextModal);
        }
    }

    addTransitions() {
        this.$modalBody.removeClass(this.classAnimationNextModal);
        this.$modalContent.removeClass(this.classAnimationNextModal);
        this.$currentModal.removeClass(this.classAnimationNextModal);
    }

    resetTransitionAllModals() {
        this.$modals.each((i, modal) => {
            const modalId = $(modal).data(this.dataModalId);
            this.$currentModal = $('#' + modalId);
            this.$modalBody = this.$currentModal.find(this.modalBody);
            this.$modalContent = this.$currentModal.find(this.dataContentOpacity);
            this.addTransitions();
            this.closeModal();
        });
    }

    closeModal() {
        if (this.$lastModal) {
            this.$lastModal.addClass(this.classHide).removeClass(this.classAnimationColor);
        } else {
            this.$currentModal.addClass(this.classHide).removeClass(this.classAnimationColor);
        }
        this.$modalBody.addClass(this.classHide).removeClass(this.classAnimation);
        this.$modalContent.removeClass(this.classAnimationOpacity);
    }

    closeMenuAllOption() {
        this.$modalMenuOptions.each((i, menuOption) => {
            const menuOptionId = $(menuOption).data(this.dataMenuOptionId);
            $('#' + menuOptionId).addClass(this.classHide);
            $(menuOption).removeClass(this.classMenuActive);
        })
    }

    listenerOpenMenuOption() {
        this.$modalMenuOptions = this.$currentModal.find(this.menuOptions);
        if (this.$modalMenuOptions) {
            this.$modalMenuOptions.each((i, menuOption) => {
                $(menuOption).hover(() => {
                    this.closeMenuAllOption();
                    const menuOptionId = $(menuOption).data(this.dataMenuOptionId);
                    $('#' + menuOptionId).removeClass(this.classHide);
                    $(menuOption).addClass(this.classMenuActive);
                })
            })
        }
    }
}
export default ModalNavHover;

