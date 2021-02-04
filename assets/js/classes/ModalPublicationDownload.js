

class ModalPublicationDownload {

    constructor() {
        this.$body = $('body')
        this.$html = $('html')
        this.$window = $(window)
        this.$modal = $('.modal-publication-download')
        this.$chapters = this.$modal.find('.chapter-item')
        this.$openTrigger = $('[data-publication-download]')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')
        this.$languageSelect = this.$modal.find('input[name="publication-languages"]')

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
        this.setLanguageChangedListener()
    }

    open() {
        this.$body.addClass(this.classes.lockBody)
        this.$html.addClass(this.classes.lockBody)
        this.$modal.removeClass(this.classes.hide).addClass(this.classes.modalOpen)
        this.$modalBtnClose.focus()
    }

    close() {
        if (!this.$modal.length) {
            return false;
        }

        this.$html.removeClass(this.classes.lockBody)
        this.$body.removeClass(this.classes.lockBody)
        this.$modal.addClass(this.classes.hide).removeClass(this.classes.modalOpen)
    }

    updateChaptersList() {
        const matchingChapters = []

        this.$chapters.each((i, chapter) => {
            const $chapter = $(chapter)
            const chapterLang = $chapter.data('lang')
            const match = chapterLang === this.currentLang

            if (match) {
                matchingChapters.push(chapter)
            }
        })

        this.$chapters.addClass(this.classes.hide)
        $(matchingChapters).removeClass(this.classes.hide)
    }

    setCloseModalListener() {
        this.$modalBtnClose.click((e) => {
            e.preventDefault();
            this.close();
        })
    }

    setKeyPressListener() {
        this.$window.keyup((e) => {
            if (e.keyCode === 27) { // esc
                this.close()
            }
        })
    }

    setOpenModalListener() {
        this.$openTrigger.click(() => {
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

    setLanguageChangedListener() {
        this.$languageSelect.click(ev => {
            this.currentLang = $(ev.currentTarget).val()
            this.updateChaptersList()
        })
    }
}


export default ModalPublicationDownload
