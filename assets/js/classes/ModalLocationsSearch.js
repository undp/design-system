import Foundation from "foundation-sites";

class ModalLocationsSearch {
    constructor() {
        this.classHide = 'hide';
        this.modalFilter = null;
        this.$currentModal = null;
        this.classModalActive = 'active';
        this.dataOptionDefault = '[data-icon]';
        this.dataOptionClose = '[data-icon-close]';
        this.classModalOpened = 'modal-opened';
        this.navPreviewWidth = 0;
        this.navCurrrentWidth = 0;
        this.mobileLocationCloseBtnTrigger = '[data-btn-close]';
        this.classModalOpenFromFooter = 'open-from-footer';
        this.window = $(window);

        this.$body = $('body');
        this.$html = $('html');
        this.$optionClose = null;
        this.$optionDefalt = null;
        this.$modalTriggers = $('[data-modal-open]');
        this.$modalTriggerReference = null;
        this.$header = $('[data-navigation]');
        this.$modalFilterName = 'modal-filter';

        //modals: references to close menu opened when the user open a new modal (this class)
        this.menuOpenClass = 'is-active';
        this.bodyMenuOpenClass = 'menu-open modal-open';

        this.$hamburguer = $('[data-hamburger]');
        this.$mainMenu = $('[data-menu-main-options]');
        this.$primaryNav = $('[data-primary-navigation]');
    }

    init() {
        this.listeners();
        this.listenerKeyPress();
    }

    listeners() {
        this.$body.on('UNDP.openSearchModal', () => {
            $('[data-modal="modal-popular-search"]')[0].click()
        })

        this.$body.on('UNDP.closeOtherModals', (event, data) => {
            if(data.currentModal !== this.$currentModal) {
                this.beforeCloseModal()
            }
        })

        this.$modalTriggers.each((i, modalTrigger) => {
            let $modalTrigger = $(modalTrigger);

            $modalTrigger.click((env) => {
                env.preventDefault();
                this.$modalTriggers.removeClass(this.classModalActive);

                const modalIdToOpen = $modalTrigger.data('modal');

                if (modalIdToOpen === 'modal-popular-search') {
                    this.closeMobileNavMenu();
                    this.$modalTriggerReference = $('[data-modal="modal-popular-search"]')
                }else if (modalIdToOpen === 'modal-search-offices') {
                    this.$modalTriggerReference = $('[data-modal="modal-search-offices"]')
                }

                if (this.$modalTriggerReference.hasClass(this.classModalOpened)) {
                    this.beforeCloseModal();
                    return;
                }

                this.closeAllModals();

                if (modalIdToOpen) {
                    this.$currentModal = $('#' + modalIdToOpen);

                    if (this.$currentModal) {
                        this.navPreviewWidth = this.$header.width();
                        this.$modalTriggerReference.addClass(this.classModalOpened)
                        this.$optionClose = this.$modalTriggerReference.find(this.dataOptionClose);
                        this.$optionDefalt = this.$modalTriggerReference.find(this.dataOptionDefault);

                        this.open();
                        this.navCurrrentWidth = this.$header.width();

                        this.mobileFiltersBindListener();
                        this.navSetMargin();

                        const mobileModalLocationListenerClose = () => {
                            const btnBack = this.$currentModal.find(this.mobileLocationCloseBtnTrigger);

                            if (typeof $modalTrigger.data(this.classModalOpenFromFooter) !== 'undefined') {
                                this.closeMobileNavMenu();
                                this.listenerCloseModal();
                                btnBack.addClass(this.classModalOpenFromFooter);
                            }else {
                                btnBack.removeClass(this.classModalOpenFromFooter);
                            }
                        };
                        mobileModalLocationListenerClose();

                    }
                }
            });
        });
    }

    mobileFiltersBindListener() {
        const btnFilters = this.$currentModal.find('[data-open-filters]')

        if (btnFilters) {
            $(btnFilters).click((evt) => {
                evt.preventDefault();
                const modalFilter = btnFilters.data(this.$modalFilterName);
                if (modalFilter) {
                    this.modalFilter = $('#' + modalFilter);
                    this.openFilters()
                    this.mobileFiltersCloseBindListener();
                }
            })
        }
    }

    mobileFiltersCloseBindListener() {
        const btnCloseFilters = this.modalFilter.find('[data-action-back]');

        if (btnCloseFilters) {
            btnCloseFilters.click((evt) => {
                evt.preventDefault();
                this.closeFilters();
            })
        }
    }

    open() {
        this.closeOtherModals();

        this.$body.addClass('modal-open');
        this.$html.addClass('modal-open');
        this.$currentModal.removeClass('hide');

        if($(window).width() > Foundation.MediaQuery.get('medium')){
            this.inputSearchAutoFocus();
        }

        this.$modalTriggerReference.addClass(this.classModalActive);
        this.showOptionClose();

        this.$body.trigger('UNDP.modalOpened')
    }

    // Modal hides the (scroll y) so we add his width on navigation to keep the same size
    navSetMargin() {
        let pixels = this.navCurrrentWidth - this.navPreviewWidth;
        if(pixels !== 0) {
            this.$header.css('padding-right', pixels > 0 ? pixels : 0);
        }
    }

    inputSearchAutoFocus() {
        this.$currentModal.find('.input-search').focus();
    }

    close() {
        this.$currentModal.addClass('hide');
        this.$body.removeClass('modal-open');
        this.$html.removeClass('modal-open');
        this.$modalTriggerReference.removeClass(this.classModalActive)
        this.$header.css('padding-right', 'unset')
        this.$body.trigger('UNDP.modalClosed')
    }

    closeAllModals() {
        $('.menu-modal').addClass('hide');
        this.$modalTriggers.removeClass(this.classModalOpened);
        this.$modalTriggers.find('[data-icon]').removeClass(this.classHide);
        this.$modalTriggers.find('[data-icon-close]').addClass(this.classHide);
    }

    openFilters() {
        this.$currentModal.addClass('hide');
        this.modalFilter.removeClass('hide');
    }

    closeFilters() {
        this.$currentModal.removeClass('hide');
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

    closeMobileNavMenu() {
        this.$primaryNav.removeClass('open');
        this.$mainMenu.addClass(this.classHide);
        this.$body.removeClass(this.bodyMenuOpenClass)
        this.$hamburguer.removeClass(this.menuOpenClass);
    }

    closeOtherModals() {
        this.$body.trigger('UNDP.closeOtherModals', {'currentModal': this.$currentModal});
    }

    //modal opened from footer
    listenerCloseModal() {
        let btnBack = this.$currentModal.find(this.mobileLocationCloseBtnTrigger);
        btnBack.click(() => {
            this.close();
        })
    }

    listenerKeyPress() {
        this.window.keyup((e) => {
            if (e.keyCode === window.UNDP.keyCode.ESC) { //esc
                this.beforeCloseModal();
            }
        });
    }

    beforeCloseModal() {
        if (this.$modalTriggerReference && this.$modalTriggerReference.hasClass(this.classModalOpened)) {
            this.showOptionDefault();
            this.$modalTriggerReference.removeClass(this.classModalOpened);
            this.close();
        }
    }
}

export default ModalLocationsSearch;