import 'foundation-sites/dist/js/foundation'
import ModalSdgs from "../classes/ModalSdgs";

class Menu {

    constructor(container) {
        this.expanded = false
        this.currentSubmenu = '';
        this.hiddenClass = 'hide'
        this.menuOpenClass = 'is-active'
        this.dataBtnBack = '[data-action-back]'
        this.modalLocations = 'modal-search-offices'
        this.bodyMenuOpenClass = 'menu-open modal-open'

        this.$body = $('body')
        this.$window = $(window)
        this.$container = container
        this.$middleLogo = '[data-middle-logo]'
        this.$subMenus = $('.menu-item-options')
        this.$primaryNav = $('[data-primary-navigation]')
        this.$hamburguer = this.$container.find('[data-hamburger]')
        this.$mainMenu = this.$container.find('[data-menu-main-options]')
        this.$menuItemDetails = this.$container.find('[data-item-details]')


        //modals: references to close modals opened when the user open the main menu (this class)
        this.classModalActive = 'active';
        this.classModalOpen = 'modal-opened';
        this.$modals = $('[data-modal-open]');
    }

    init() {
        this.bindScrollEvents()
        this.bindSubmenuEvents()
        this.bindHamburgerEvents()
    }


    bindHamburgerEvents() {
        this.$hamburguer.click(() => {
            this.expanded = this.$hamburguer.hasClass(this.menuOpenClass);
            if (this.expanded) this.closeMenu()
            else this.openMenu()
            this.$hamburguer.toggleClass(this.menuOpenClass);
            this.closeSubmenu()
        })
    }

    bindSubmenuEvents() {
        this.$menuItemDetails.each((i, item) => {
            $(item).click(() => {
                const subMenu = $(item).data('submenu');
                this.currentSubmenu = $('#' + subMenu);
                if (this.currentSubmenu) {
                    this.closeMenu();
                    this.openSubmenu();
                    this.$body.addClass(this.bodyMenuOpenClass);
                    if (subMenu === this.modalLocations) {
                        this.$primaryNav.removeClass('open')
                    }
                    this.bindCloseSubmenu();
                }
            })
        })
    }

    bindCloseSubmenu() {
        const btnBack = this.currentSubmenu.find(this.dataBtnBack);
        if (btnBack) {
            btnBack.click((event) => {
                event.stopPropagation();

                if(!btnBack.hasClass('open-from-footer')) {
                    this.openMenu();
                    this.closeSubmenu();
                }
            });
        }
    }

    bindScrollEvents() {
        this.$window.on('scroll', () => {
            const currentScroll = this.$window.scrollTop();
            const logo = this.$container.find(this.$middleLogo);
            if (currentScroll > 0) {
                logo.addClass('scrolled')
            } else {
                logo.removeClass('scrolled')
            }
        })
    }

    openMenu() {
        this.closeModals();
        this.closeModalSdg();
        this.$primaryNav.addClass('open');
        this.$body.addClass(this.bodyMenuOpenClass)
        this.$mainMenu.removeClass(this.hiddenClass);
    }

    openSubmenu() {
        this.$primaryNav.addClass('open');
        this.currentSubmenu.removeClass('hide');
    }

    closeSubmenu() {
        this.$subMenus.addClass('hide');
    }

    closeMenu() {
        this.$primaryNav.removeClass('open');
        this.$mainMenu.addClass(this.hiddenClass);
        this.$body.removeClass(this.bodyMenuOpenClass)
        if (this.currentSubmenu) {
            this.currentSubmenu.addClass(this.hiddenClass);
        }
    }

    closeModals() {
        this.$modals.removeClass(this.classModalActive);
        this.$modals.find('[data-icon]').removeClass(this.hiddenClass);
        this.$modals.find('[data-icon-close]').addClass(this.hiddenClass);
        this.$modals.each((i, modal) => {
            $(modal).removeClass(this.classModalOpen);
            $('#' + $(modal).data('modal')).addClass(this.hiddenClass);
        });
    }

    closeModalSdg() {
        const modalSdg = new ModalSdgs();
        modalSdg.close();
    }
}

export default Menu
