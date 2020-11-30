class ModalNavHover {
    constructor() {
        this.classHide = 'hide';
        this.dataModalId = 'modal';
        this.currentModal = null;
        this.classMenuActive = 'active';
        this.modalBody = '[data-modal-body]';
        this.menuOptions = '[data-menu-option]';
        this.dataMenuOptionId = 'menu-option-value';
        this.classAnimationColor = 'color-transition';
        this.classAnimation = 'circle-square-transition';
        this.classAnimationOpacity = 'opacity-transition';

        this.$modalMenuOptions = null;
        this.$modals = $('[data-modal-nav-hover]');
        this.$modalBody = null;
        this.$modalContent = null;
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
                    this.$modalContent  = this.currentModal.find('.opacity');
                    this.listenerHoverCloseModal();
                    this.listenerOpenMenuOption();
                    this.openModal();
                }
            });
        })
    }

    listenerHoverCloseModal() {
        this.$modalBody = this.currentModal.find(this.modalBody);
        this.$modalBody.mouseleave(() => {
            this.closeModal();
        })
    }

    openModal() {
        this.currentModal.removeClass(this.classHide).addClass(this.classAnimationColor);
        this.$modalBody.addClass(this.classAnimation).removeClass(this.classHide);
        this.$modalContent.addClass(this.classAnimationOpacity);
    }

    closeModal() {
        this.currentModal.addClass(this.classHide).removeClass(this.classAnimationColor);
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
export default ModalNavHover;

