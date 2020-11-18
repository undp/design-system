class Modal {
    constructor() {
        this.currentModal = null;

        this.$body = $('body');
        this.$modals = $('[data-modal-open]');
    }

    init() {
        this.listeners();
    }

    listeners() {
        this.$modals.each((i, modal) => {
            $(modal).click((env) => {
                env.preventDefault();
                const idModalOpen = $(modal).data('modal');
                if (idModalOpen) {
                    this.currentModal = $('#' + $(modal).data('modal'));
                    if (this.currentModal) {
                        this.open();
                        this.listenerCloseModal();
                    }
                }
            });
        });
    }

    listenerCloseModal() {
        const btnCloseModal = this.currentModal.find('[data-btn-close]');
        $(btnCloseModal).click(() => { this.close()})
    }

    open() {
        this.$body.addClass('modal-open');
        this.currentModal.removeClass('hide');
    }

    close() {
        this.currentModal.addClass('hide');
        this.$body.removeClass('modal-open');
    }
}

const init = function () {
    const modals = new Modal();
    modals.init();
};

export default init;