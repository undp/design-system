

class Modal {

    constructor(modal) {
        this.$body = $('body')
        this.$html = $('html')
        this.$modal = $(modal)
        this.$window = $(window)
        this.widthOnModalOpening = 0;
        this.widthBeforeModalOpening = 0;
        this.$header = $('[data-navigation]');
        this.$modalContent = this.$modal.find('.modal-content')
        this.$modalBtnClose = this.$modal.find('[data-modal-close]')
        this.$openTrigger = $(`[data-modal-trigger=${this.$modal.attr('id')}]`)

        this.slug = this.$modal.attr('id')

        this.classes = {
            hide: 'hide',
            modalOpen: 'open',
            lockBody: 'modal-open'
        }
    }

    init() {
        this.bindEvents()
        this.checkUrlHash()
    }

    bindEvents() {
        this.setKeyPressListener()
        this.setOpenModalListener()
        this.setCloseModalListener()
        this.setWindowClickListener()
    }

    open() {
        this.widthBeforeModalOpening = this.$body.width();
        location.hash = this.slug
        this.$body.addClass(this.classes.lockBody)
        this.$html.addClass(this.classes.lockBody)
        this.$modal.addClass(this.classes.modalOpen)
        this.widthOnModalOpening = this.$body.width();

        this.setScrollbarPadding();

        setTimeout(() => {
            this.$modalBtnClose.focus()
        }, 450)
    }

    close() {
        this.removeHash()

        this.$html.removeClass(this.classes.lockBody)
        this.$body.removeClass(this.classes.lockBody)
        this.$modal.removeClass(this.classes.modalOpen)
        this.setTempScrollbarPaddingOnModal()
        this.$body.css('padding-right', 'unset')
        this.$header.css('padding-right', 'unset')

        setTimeout(() => {
            this.$modal.css('padding-left', 'unset')
        }, 450)
    }

    checkUrlHash() {
        if (location.hash) {
            const slug = location.hash.replace('#', '')
            if (this.slug === slug) this.open()
        }
    }

    removeHash() {
        history.pushState("", document.title, location.pathname + location.search);
    }

    setCloseModalListener() {
        this.$modalBtnClose.click(ev => {
            ev.preventDefault();
            this.close();
        })

        this.$body.on('UNDP.closeOtherModals', () => {
            this.close();
        })
    }

    setKeyPressListener() {
        this.$window.keyup((e) => {
            if (e.keyCode === window.UNDP.keyCode.ESC) { // esc
                this.close()
            }
        })
    }

    setOpenModalListener() {
        this.$openTrigger.click(ev => {
            ev.preventDefault()
            ev.stopImmediatePropagation()
            this.open();
        })
    }

    setWindowClickListener() {
        this.$window.click(evt => {

            if (this.$modal.is(evt.target) &&
                this.$modal.hasClass(this.classes.modalOpen) &&
                !this.$modalContent.has(evt.target).length) {

                this.close()
            }
        })
    }

    // Modal has transition so it jumps when scrollbar shows up again while it fades out
    // We add padding to remove hide this
    setTempScrollbarPaddingOnModal() {
        let pixels = this.widthOnModalOpening - this.widthBeforeModalOpening;
        if(pixels !== 0) {
            this.$modal.css('padding-left', pixels > 0 ? pixels : 0);
        }
    }

    // Modal hides the (scroll y) so we add his width on navigation to keep the same size
    setScrollbarPadding() {
        let pixels = this.widthOnModalOpening - this.widthBeforeModalOpening;
        if(pixels !== 0) {
            this.$body.css('padding-right', pixels > 0 ? pixels : 0);
            this.$header.css('padding-right', pixels > 0 ? pixels : 0);
        }
    }
}


export default Modal
