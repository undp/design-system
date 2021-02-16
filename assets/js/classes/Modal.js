

class Modal {

    constructor(modal) {
        this.$body = $('body')
        this.$html = $('html')
        this.$modal = $(modal)
        this.$window = $(window)
        this.$modalContent = this.$modal.find('.modal-content')
        this.$modalBtnClose = this.$modal.find('[data-modal-close]')
        this.$openTrigger = $(`[data-modal-trigger=${this.$modal.attr('id')}]`)

        this.classes = {
            hide: 'hide',
            modalOpen: 'open',
            lockBody: 'modal-open'
        }
    }

    init() {
        this.bindEvents()
    }

    bindEvents() {
        this.setKeyPressListener()
        this.setOpenModalListener()
        this.setCloseModalListener()
        this.setWindowClickListener()
    }

    open() {
        this.$body.addClass(this.classes.lockBody)
        this.$html.addClass(this.classes.lockBody)
        this.$modal.addClass(this.classes.modalOpen)

        setTimeout(() => {
            this.$modalBtnClose.focus()
        }, 450)
    }

    close() {
        if (!this.$modal.length) {
            return false;
        }

        this.$html.removeClass(this.classes.lockBody)
        this.$body.removeClass(this.classes.lockBody)
        this.$modal.removeClass(this.classes.modalOpen)
    }

    setCloseModalListener() {
        this.$modalBtnClose.click((e) => {
            e.preventDefault();
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
}


export default Modal
