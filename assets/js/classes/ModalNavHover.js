

class ModalNavHover {
    constructor() {
        this.classHide = 'hide';
        this.dataModalId = 'modal-nav';
        this.allowOpenModal = true;
        this.classMenuActive = 'active';
        this.dataContentOpacity = '.opacity';
        this.modalBody = '[data-modal-body]';
        this.dataMenuOptionId = 'menu-option';
        this.menuOptions = '[data-menu-option]';
        this.classAnimationNextModal = 'change-modal';
        this.classAnimation = 'circle-square-transition';
        this.classAnimationOpacity = 'opacity-transition';
        this.classAnimationOpacityBack = 'opacity-transition-back';

        this.$currentNavItem = null;
        this.$lastModal = null;
        this.$modalBody = null;
        this.$window = $(window);
        this.$currentModal = null;
        this.$modalContent = null;
        this.$modalMenuOptions = null;
        this.$menuDesktop = $('[data-menu-desktop]');
        this.$navMenuItems = $('[data-modal-nav]');
        this.lazyLoadClass = null;
    }

    init(lazyLoadClass) {
        this.listenersHoverOpenModal();
        this.listenerAccessibilityCloseModal();
        this.setKeyPressListener();
        this.lazyLoadClass = lazyLoadClass;
    }

    listenersHoverOpenModal() {
        const removeAnimation = this.$menuDesktop.data('no-animation') === true;

        this.$navMenuItems.each((i, navItem) => {
            const $navItem = $(navItem)

            const prepareModalForOpening = () => {
                const modalId = $(navItem).data(this.dataModalId);
                this.$currentModal = $('#' + modalId);

                if(this.$currentNavItem) {
                    this.$currentNavItem.attr("aria-expanded","false");
                }
                this.$currentNavItem = $navItem;
                $navItem.attr("aria-expanded","true");

                if(removeAnimation) {
                    this.$currentModal.addClass('no-animation');
                }

                if (this.$lastModal && this.$currentModal &&
                    !this.$lastModal.is(this.$currentModal)) {
                    this.closeModal();
                    this.allowOpenModal = true;
                }
                if (this.$currentModal && this.allowOpenModal) {
                    this.$modalContent = this.$currentModal.find(this.dataContentOpacity);
                    this.listenerOpenMenuOption();
                    this.listenerHoverCloseModal();
                    this.openModal();
                    this.allowOpenModal = false;
                }

                this.$lastModal = this.$currentModal;
            };

            $navItem.hover(prepareModalForOpening);

            $navItem.keypress(e => {
                e.preventDefault();

                if (e.which === 32) {
                    prepareModalForOpening();
                    this.$currentModal.find('a').eq(0).focus();
                }
            });
        })
    }

    listenerHoverCloseModal() {
        let mouseEnteredModal = false;

        const hoverCallback = (evt) => {
            let isHoverOutsideOfModal = !this.$modalBody.is(evt.target) && this.$modalBody.has(evt.target).length === 0 &&
                !this.$menuDesktop.is(evt.target) && this.$menuDesktop.has(evt.target).length === 0;

            if(!isHoverOutsideOfModal) {
                mouseEnteredModal = true;
            }

            //close modal when the hover event is outside of nav and modal content
            if (isHoverOutsideOfModal && mouseEnteredModal === true) {
                this.allowOpenModal = true;
                mouseEnteredModal = false;

                if (this.$lastModal) {
                    this.$lastModal = null;
                    this.animateCloseModal();
                }
            }
        }

        this.$window.off('hover', hoverCallback)
        this.$modalBody = this.$currentModal.find(this.modalBody);

        this.$window.hover(hoverCallback)
    }

    listenerAccessibilityCloseModal() {
        const closeButtons = $('.modal-nav-hover .close-submenu');

        closeButtons.click(() => {
            this.closeModalFromKeyboard();
        })
    }

    setKeyPressListener() {
        this.$window.keyup((e) => {
            if (e.keyCode === window.UNDP.keyCode.ESC) { //esc
                this.closeModalFromKeyboard();
            }
        })
    }

    closeModalFromKeyboard() {
        if(this.$currentNavItem) {
            this.$currentNavItem.focus();
        }
        this.allowOpenModal = true;
        if (this.$lastModal) {
            this.$lastModal = null;
            this.resetTransitionAllModals();
        }
    }

    openModal() {
        this.$currentModal.removeClass(this.classHide);
        this.$modalBody.addClass(this.classAnimation).removeClass(this.classHide);
        this.$modalContent.addClass(this.classAnimationOpacity);
        this.removeTransitions();
        this.$modalBody.find('.' + this.classAnimationOpacity).removeClass(this.classAnimationOpacityBack);
        this.lazyLoadClass.listenerDefault();
    }

    //if we open our seconds modal, we not require transitions so remove it
    removeTransitions() {
        if (this.$lastModal) {
            this.$currentModal.addClass(this.classAnimationNextModal);
            this.$modalBody.addClass(this.classAnimationNextModal);
            this.$modalContent.addClass(this.classAnimationNextModal);
        }
    }

    addTransitions() {
        this.$modalBody.removeClass(this.classAnimationNextModal);
        this.$modalContent.removeClass(this.classAnimationNextModal);
        this.$currentModal.removeClass(this.classAnimationNextModal);
    }

    animateCloseModal() {
        this.resetAnimation();
        this.$modalBody.addClass('circle-square-transition-back');
        this.$modalBody.find('.' + this.classAnimationOpacity).removeClass(this.classAnimationOpacity).addClass(this.classAnimationOpacityBack);

        setTimeout(() => {
            this.resetTransitionAllModals();
        }, 400)
    }

    resetTransitionAllModals() {
        this.$navMenuItems.each((i, modal) => {
            const modalId = $(modal).data(this.dataModalId);
            this.$currentModal = $('#' + modalId);
            this.$modalBody = this.$currentModal.find(this.modalBody);
            this.$modalContent = this.$currentModal.find(this.dataContentOpacity);
            this.addTransitions();
            this.closeModal();
        });
    }

    closeModal() {
        if (this.$lastModal) {
            this.$lastModal.addClass(this.classHide);
        } else {
            this.$currentModal.addClass(this.classHide);
        }

        this.$modalBody.addClass(this.classHide).removeClass(this.classAnimation)
            .removeClass('circle-square-transition-back');
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
        this.$modalMenuOptions = this.$currentModal.find(this.menuOptions);
        if (this.$modalMenuOptions) {
            this.$modalMenuOptions.each((i, menuOption) => {
                const $menuOption = $(menuOption);
                const openSubmenuData = () => {
                    this.closeMenuAllOption();
                    const menuOptionId = $menuOption.data(this.dataMenuOptionId);
                    $('#' + menuOptionId).removeClass(this.classHide);
                    $menuOption.addClass(this.classMenuActive);
                    this.lazyLoadClass.listenerDefault();
                }

                $menuOption.hover(openSubmenuData)

                $menuOption.find('a').focus(() => {
                    openSubmenuData();
                });
            })
        }
    }

    resetAnimation() {
        this.$modalBody.removeClass(this.classAnimation)
        this.$modalBody[0].style.animation = 'none';
        this.$modalBody[0].offsetHeight; /* trigger reflow */
        this.$modalBody[0].style.animation = null;
    }
}
export default ModalNavHover;

