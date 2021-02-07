

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
        this.$languageSelect = this.$modal.find('.select-box')
        this.$downloadBtn = this.$modal.find('[data-download-chapters]')

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
        this.setChapterSelectedListener()
        this.setLanguageChangedListener()
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

    updateChaptersList() {
        let matchingChapters = []

        if(this.currentLang !== 'default') {
            this.$chapters.each((i, chapter) => {
                const $chapter = $(chapter)
                const chapterLang = $chapter.data('lang')
                const match = chapterLang === this.currentLang

                if (match) {
                    matchingChapters.push(chapter)
                }
            })
        } else {
            matchingChapters = this.$chapters
        }

        this.$chapters.addClass(this.classes.hide)
        this.$chapters.find('input[type=checkbox]:checked').prop('checked', false)

        if(!this.$downloadBtn.attr('disabled')) {
            this.$downloadBtn.attr('disabled', true)
        }
        $(matchingChapters).removeClass(this.classes.hide)
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
        this.$languageSelect.change(() => {
            this.currentLang = this.$languageSelect.data('selected-value');
            this.updateChaptersList()
        })
    }

    setChapterSelectedListener() {
        this.$chapters.click(() => {
            const checked = this.$chapters.find(':checked')

            checked.length
                ? this.$downloadBtn.removeAttr('disabled')
                : this.$downloadBtn.attr('disabled', true)
        })
    }
}


export default ModalPublicationDownload
