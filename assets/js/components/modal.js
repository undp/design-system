import 'foundation-sites/dist/js/foundation'

class Modal {
    constructor() {
        this.classHide = 'hide';
        this.modalFilter = null;
        this.currentModal = null;
        this.classModalActive = 'active';
        this.dataOptionDefault = '[data-icon]';
        this.dataOptionClose = '[data-icon-close]';

        this.$body = $('body');
        this.$optionClose = null;
        this.$window = $(window);
        this.$optionDefalt = null;
        this.$modalReference = null;
        this.$modals = $('[data-modal-open]');
        this.$modalFilterName = 'modal-filter';
        this.$btnOpenFilter = '[data-open-filters]';
        this.$btnCloseCurrentModal = '[data-btn-close]';
        this.$btnBackModalFilter = '[data-action-back]';
    }

    init() {
        this.listeners();
        this.listenerWindowResize();
    }

    listeners() {
        this.$modals.each((i, modal) => {
            $(modal).click((env) => {
                env.preventDefault();
                this.$modals.removeClass(this.classModalActive);
                this.$modalReference = $(modal);
                $('.menu-modal').addClass('hide');
                const idModalOpen = $(modal).data('modal');
                if (Foundation.MediaQuery.is('large down') && this.$optionClose) {
                    this.showOptionDefault();
                    this.$optionClose = null;
                    this.close();
                    return;
                }
                if (idModalOpen) {
                    this.currentModal = $('#' + $(modal).data('modal'));
                    if (this.currentModal) {
                        this.$optionClose = this.$modalReference.find(this.dataOptionClose);
                        this.$optionDefalt = this.$modalReference.find(this.dataOptionDefault);
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
        if (btnFilters) {
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

    listenerWindowResize() {
        this.$window.resize(() => {
            if (Foundation.MediaQuery.is('large down') && this.$optionClose) {
                this.showOptionClose();
            } else if (this.$optionClose) {
                this.showOptionDefault();
            }
        })
    }

    open() {
        this.$body.addClass('modal-open');
        this.currentModal.removeClass('hide');
        this.inputSearchAutoFocus();
        this.$modalReference.addClass(this.classModalActive);

        if (Foundation.MediaQuery.is('large down')) {
            this.showOptionClose();
        }
    }

    inputSearchAutoFocus() {
        this.currentModal.find('.input-search').focus();
    }

    close() {
        this.currentModal.addClass('hide');
        this.$body.removeClass('modal-open');
        this.$modalReference.removeClass(this.classModalActive)
    }

    openFilters() {
        this.currentModal.addClass('hide');
        this.modalFilter.removeClass('hide');
    }

    closeFilters() {
        this.currentModal.removeClass('hide');
        this.modalFilter.addClass('hide');
    }

    showOptionClose() {
        this.$optionDefalt.addClass(this.classHide);
        this.$optionClose.removeClass(this.classHide);
    }

    showOptionDefault() {
        this.$optionDefalt.removeClass(this.classHide);
        this.$optionClose.addClass(this.classHide);
    }
}

const init = function () {
    const modals = new Modal();
    modals.init();
};

export default init;