class ModalNavHover {
    constructor() {
        this.classHide = 'hide';
        this.dataModalId = 'modal';
        this.currentModal = null;
        this.classMenuActive = 'active';
        this.modalBody = '[data-modal-body]';
        this.menuOptions = '[data-menu-option]';
        this.dataMenuOptionId = 'menu-option-value';

        this.$modalMenuOptions = null;
        this.$modals = $('[data-modal-nav-hover]');
    }

    init() {
        this.listenersHoverOpenModal();
    }

    listenersHoverOpenModal() {
        this.$modals.each((i, modal) => {
            $(modal).hover(() => {
                const modalId = $(modal).data(this.dataModalId);
                this.currentModal = $('#' + modalId);
                if (this.currentModal) {
                    this.openModal();
                    this.listenerHoverCloseModal();
                    this.listenerOpenMenuOption();
                }
            });
        })
    }

    listenerHoverCloseModal() {
        const modalBody = this.currentModal.find(this.modalBody);
        modalBody.mouseleave(() => {
            this.closeModal();
        })
    }

    openModal() {
        this.currentModal.removeClass(this.classHide);
    }

    closeModal() {
        this.currentModal.addClass(this.classHide);
    }

    closeMenuAllOption() {
        this.$modalMenuOptions.each((i, menuOption) => {
            const menuOptionId = $(menuOption).data(this.dataMenuOptionId);
            $('#' + menuOptionId).addClass(this.classHide);
            $(menuOption).removeClass(this.classMenuActive);
        })
    }

    listenerOpenMenuOption() {
        this.$modalMenuOptions = this.currentModal.find(this.menuOptions);
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

const init = function () {
    const modalNavHover = new ModalNavHover();
    modalNavHover.init();
};

export default init;