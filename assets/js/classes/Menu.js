import 'foundation-sites/dist/js/foundation'

class Menu {

    constructor(container) {
        this.expanded = false
        this.currentSubmenu = '';
        this.hiddenClass = 'hide'
        this.menuOpenClass = 'is-active'
        this.bodyMenuOpenClass = 'menu-open modal-open'

        this.$body = $('body')
        this.$container = container
        this.$hamburguer = this.$container.find('[data-hamburger]')
        this.$mainMenu = this.$container.find('[data-menu-main-options]')
        this.$menuItemDetails = this.$container.find('[data-item-details]')
    }

    init() {
        this.bindSubmenuEvents()
        this.bindHamburgerEvents()
    }


    bindHamburgerEvents() {
        this.$hamburguer.click(() => {
            console.log('testing::', this.$hamburguer);
            if (!this.expanded) {
                this.openMenu()
                this.$hamburguer.addClass(this.menuOpenClass);
            } else if (this.expanded) {
                this.closeMenu()
                this.$hamburguer.removeClass(this.menuOpenClass);
            }
            this.expanded = !this.expanded;
        })
    }

    bindSubmenuEvents() {
        this.$menuItemDetails.each((i, item) => {
            $(item).click(() => {
                const subMenu = $(item).data('submenu');
                if (subMenu && subMenu === 'modal-search-offices') {
                    this.closeMenu();
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


    openMenu() {
        this.$body.addClass(this.bodyMenuOpenClass)
        this.$mainMenu.removeClass(this.hiddenClass);

    }

    openSubmenu() {
        this.currentSubmenu.removeClass('hide');
    }

    closeSubmenu() {
        this.currentSubmenu.addClass('hide');
    }

    closeMenu() {
        this.$mainMenu.addClass(this.hiddenClass);
        this.$body.removeClass(this.bodyMenuOpenClass)
        if (this.currentSubmenu) {
            this.currentSubmenu.addClass(this.hiddenClass);
        }
    }
}

export default Menu
