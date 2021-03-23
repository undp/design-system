class NavMenu {

    constructor(container) {
        this.expanded = false
        this.currentSubmenu = '';
        this.navPreviewWidth = 0
        this.navCurrrentWidth = 0
        this.hiddenClass = 'hide'
        this.menuOpenClass = 'is-active'
        this.dataBtnBack = '[data-action-back]'
        this.modalLocations = 'modal-search-offices'
        this.bodyMenuOpenClass = 'menu-open modal-open'

        this.$body = $('body')
        this.$html = $('html')
        this.$window = $(window)
        this.$container = container
        this.$header = $('[data-navigation]');
        this.$middleLogo = '[data-middle-logo]'
        this.$subMenus = $('.menu-item-options')
        this.$primaryNav = $('[data-primary-navigation]')
        this.$hamburguer = this.$container.find('[data-hamburger]')
        this.$mainMenu = this.$container.find('[data-menu-main-options]')
        this.$menuItemDetails = this.$container.find('[data-item-details]')

        this.$officesFilterModal = $('#modal-search-offices-filters')
    }

    init() {
        this.bindScrollEvents()
        this.bindSubmenuEvents()
        this.bindHamburgerEvents()
    }


    bindHamburgerEvents() {
        this.$hamburguer.click(() => {
            //get the current size ( if not open  window size  + scroll size)
            this.navPreviewWidth = this.$header.width();

            this.expanded = this.$hamburguer.hasClass(this.menuOpenClass);
            if (this.expanded) this.closeMenu()
            else this.openMenu()
            this.$hamburguer.toggleClass(this.menuOpenClass);
            this.closeSubmenu()

            //get the new current size after open/close menu (window size +/- scroll size
            this.navCurrrentWidth = this.$header.width();

            this.navSetMargin()
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
        this.$body.trigger('UNDP.closeOtherModals', {'currentModal': this.$primaryNav});
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
        this.$html.removeClass(this.bodyMenuOpenClass)

        if (this.currentSubmenu) {
            this.currentSubmenu.addClass(this.hiddenClass);
        }
        // Hides offices filter
        if (this.$officesFilterModal.length > 0
            && !this.$officesFilterModal.hasClass(this.hiddenClass)) {

            this.$officesFilterModal.addClass(this.hiddenClass)
        }
    }

    //the modal hide the (scroll y) so we add his width on navigation to keep the same size
    navSetMargin() {
        let pixels = this.navCurrrentWidth - this.navPreviewWidth;
        this.$header.css('padding-right', pixels > 0 ? pixels : 0);
    }
}

export default NavMenu
