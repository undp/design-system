class Modal {
    constructor() {
        this.modalFilter = null;
        this.currentModal = null;

        this.$body = $('body');
        this.$modals = $('[data-modal-open]');
        this.$modalFilterName = 'modal-filter';
        this.$btnOpenFilter = '[data-open-filters]';
        this.$btnCloseCurrentModal = '[data-btn-close]';
        this.$btnBackModalFilter = '[data-action-back]';
    }

    init() {
        this.listeners();
    }

    listeners() {
        this.$modals.each((i, modal) => {
            $(modal).click((env) => {
                env.preventDefault();
                $('.menu-modal').addClass('hide');
                const idModalOpen = $(modal).data('modal');
                if (idModalOpen) {
                    this.currentModal = $('#' + $(modal).data('modal'));
                    if (this.currentModal) {
                        this.open();
                        this.listenerCloseModal();
                        this.listenerOpenFilters();
                    }
                }
            });
        });
    }

    listenerCloseModal() {
        const btnCloseModal = this.currentModal.find(this.$btnCloseCurrentModal);
        $(btnCloseModal).click((evt) => {
            evt.preventDefault();
            this.close()
        })
    }

    listenerOpenFilters() {
        const btnFilters = this.currentModal.find(this.$btnOpenFilter)
        if(btnFilters) {
            $(btnFilters).click((evt) => {
                evt.preventDefault();
                const modalFilter = btnFilters.data(this.$modalFilterName);
                if (modalFilter) {
                    this.modalFilter = $('#' + modalFilter);
                    this.openFilters()
                    this.listenerCloseModalFilters();
                }
            })
        }
    }

    listenerCloseModalFilters() {
        const btnCloseFilters = this.modalFilter.find(this.$btnBackModalFilter);
        if (btnCloseFilters) {
            btnCloseFilters.click((evt) => {
                evt.preventDefault();
                this.closeFilters();
            })
        }
    }

    open() {
        this.$body.addClass('modal-open');
        this.currentModal.removeClass('hide');
        this.inputSearchAutoFocus();
    }

    inputSearchAutoFocus() {
        this.currentModal.find('.input-search').focus();
    }

    close() {
        this.currentModal.addClass('hide');
        this.$body.removeClass('modal-open');
    }

    openFilters() {
        this.currentModal.addClass('hide');
        this.modalFilter.removeClass('hide');
    }

    closeFilters() {
        this.currentModal.removeClass('hide');
        this.modalFilter.addClass('hide');
    }
}

const init = function () {
    const modals = new Modal();
    modals.init();
};

export default init;