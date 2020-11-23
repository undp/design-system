import 'foundation-sites/dist/js/foundation'

class Menu {

    constructor(container) {
        this.expanded = false
        this.currentSubmenu = '';
        this.hiddenClass = 'hide'
        this.menuOpenClass = 'is-active'
        this.bodyMenuOpenClass = 'menu-open modal-open'

        this.$body = $('body')
        this.$window = $(window)
        this.$container = container
        this.$middleLogo = '[data-middle-logo]'
        this.$primaryNav = $('[data-primary-navigation]')
        this.$hamburguer = this.$container.find('[data-hamburger]')
        this.$mainMenu = this.$container.find('[data-menu-main-options]')
        this.$menuItemDetails = this.$container.find('[data-item-details]')
    }

    init() {
        this.bindScrollEvents()
        this.bindSubmenuEvents()
        this.bindHamburgerEvents()
    }


    bindHamburgerEvents() {
        this.$hamburguer.click(() => {
            if (this.expanded) this.closeMenu()
            else this.openMenu()
            this.expanded = !this.expanded;
            this.$hamburguer.toggleClass(this.menuOpenClass);
        })
    }

    bindSubmenuEvents() {
        this.$menuItemDetails.each((i, item) => {
            $(item).click(() => {
                const subMenu = $(item).data('submenu');
                if (subMenu && subMenu === 'modal-search-offices') {
                    this.closeMenu();
                    this.$container.addClass('static');
                }
                if (subMenu) {
                    this.currentSubmenu = $('#' + subMenu);
                    if (this.currentSubmenu) {
                        this.closeMenu();
                        this.openSubmenu();
                        this.bindCloseSubmenu();
                    }
                }
            })
        })
    }

    bindCloseSubmenu() {
        const btnBack = this.currentSubmenu.find('[data-action-back]');
        if (btnBack) {
            btnBack.click(() => {
                this.openMenu();
                this.closeSubmenu();
            });
        }
    }

    bindScrollEvents() {
        this.$window.on('scroll', () => {
            const navHeight = this.$container.height();
            const currentScroll = this.$window.scrollTop();
            const logo = this.$container.find(this.$middleLogo);
            if (currentScroll > navHeight && logo) {
                logo.addClass('scrolled')
            } else {
                logo.removeClass('scrolled')
            }
        })
    }

    openMenu() {
        this.$primaryNav.addClass('open');
        this.$body.addClass(this.bodyMenuOpenClass)
        this.$mainMenu.removeClass(this.hiddenClass);
    }

    openSubmenu() {
        this.$primaryNav.addClass('open');
        this.currentSubmenu.removeClass('hide');
    }

    closeSubmenu() {
        this.currentSubmenu.addClass('hide');
        this.$container.removeClass('static');
    }

    closeMenu() {
        this.$primaryNav.removeClass('open');
        this.$mainMenu.addClass(this.hiddenClass);
        this.$body.removeClass(this.bodyMenuOpenClass)
        if (this.currentSubmenu) {
            this.currentSubmenu.addClass(this.hiddenClass);
        }
    }
}

export default Menu
