

class ModalPublicationDownload {

    constructor() {
        this.$body = $('body')
        this.$window = $(window)
        this.$modal = $('.modal-publication-download')
        this.$chapters = this.$modal.find('.chapter-item')
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
        this.setChapterSelectedListener()
        this.setLanguageChangedListener()
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

    setLanguageChangedListener() {
        this.$languageSelect.change(() => {
            this.currentLang = this.$languageSelect.data('selected-value');
            this.updateChaptersList()
        })
    }

    setChapterSelectedListener() {
        this.$chapters.click(ev => {
            const checked = this.$chapters.find(':checked')

            if (this.$chapters.length === 1) {
                // Prevent the checkbox from getting unchecked
                ev.preventDefault()
                ev.stopImmediatePropagation()
                return false
            }

            checked.length
                ? this.$downloadBtn.removeAttr('disabled')
                : this.$downloadBtn.attr('disabled', true)
        })
    }
}


export default ModalPublicationDownload
