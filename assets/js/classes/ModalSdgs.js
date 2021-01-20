

class ModalSdgs {

    constructor() {
        this.$body = $('body')
        this.$window = $(window)
        this.$modal = $('#modal-sdgs')
        this.$openModal = $('.sdg-card-list .sdg-card')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')

        this.url = null
        this.color = null
        this.title = null
        this.number = null
        this.classHide = 'hide'
        this.classModalOpen = 'open'
        this.classBodyModalOpen = 'modal-open'

        this.$nextSdg = null
        this.$sdgCardList = $('.sdg-card-list')
        this.$sdgDeepDiveHero = $('.sdg-deep-dive-hero')
        this.$nextSdgCta = this.$modal.find('.next-sdg-container')
    }

    init() {
        this.appearCards()
        this.listenerOpenModal()
        this.listenerCloseModal()
        this.listenerWindowClick()
        this.listenerKeyPress()
    }

    listenerOpenModal() {
        this.$openModal.click((current) => {
            const $current = $(current.currentTarget);

            this.url = $current.data('url')
            this.color = $current.data('color')
            this.title = $current.data('title')
            this.number = $current.data('number')
            this.$nextSdg = $current.next();

            this.open()
            this.addColorClass()
            this.changeModalData()
        })

        this.$nextSdgCta.click(() => {
            const nextSdg = this.$nextSdgCta.find('.sdg-card')
            this.$sdgCardList.find(`[data-number="${nextSdg.data('number')}"]`).trigger('click')
        })
    }

    changeModalData() {
        this.$sdgDeepDiveHero.find('.title-two').html(this.title)
        this.$sdgDeepDiveHero.find('.title-one span').html(this.number)

        if(this.number === 17) {
            this.$nextSdgCta.addClass('hide')
        } else {
            this.$nextSdgCta.removeClass('hide')

            const nextSdg = this.$nextSdgCta.find('.sdg-card')

            nextSdg.removeClass('color-' + this.number)
            nextSdg.addClass('color-' + this.$nextSdg.data('number'))
            nextSdg.data('number', this.$nextSdg.data('number'))
            this.$nextSdgCta.find('.number').html(this.$nextSdg.data('number'))
            this.$nextSdgCta.find('.title').html(this.$nextSdg.data('title'))
        }
    }

    listenerCloseModal() {
        this.$modalBtnClose.click(() => {
            this.close()
        })
    }

    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$modal.has(evt.target).length &&
                this.$modal.hasClass(this.classModalOpen) &&
                !this.$modalContent.has(evt.target).length) {
                this.close()
            }
        })
    }

    listenerKeyPress() {
        this.$window.keyup((e) => {
            if (e.keyCode === 27) { //esc
                this.close()
            }
        })
    }

    open() {
        this.$body.addClass(this.classBodyModalOpen)
        this.$modal.removeClass(this.classHide).addClass(this.classModalOpen)
        this.$modalContent.animate( { scrollTop : 0 }, 800 )
    }

    close() {
        const $cards = $('.cards-slider')

        $cards.find('.sdg-card-container').removeClass('in-viewport')

        this.removeColorClass()
        this.$body.removeClass(this.classBodyModalOpen)
        this.$modal.addClass(this.classHide).removeClass(this.classModalOpen)
    }

    addColorClass(){
        this.$sdgDeepDiveHero.find('.title').addClass(this.color)
        this.$sdgDeepDiveHero.find('.description-container').addClass(this.color)
        this.$modal.find('.stat-card').addClass('sdg ' +  this.color)
        this.$modal.find('.single-content-card-accent-color').addClass('sdg ' +  this.color)
    }

    removeColorClass(){
        this.$sdgDeepDiveHero.find('.title').removeClass(this.color)
        this.$sdgDeepDiveHero.find('.description-container').removeClass(this.color)
        this.$modal.find('.stat-card').removeClass('sdg ' +  this.color)
        this.$modal.find('.single-content-card-accent-color').removeClass('sdg ' +  this.color)
    }

    appearCards() {
        const $cards = $('.cards-slider')
        const threshold = this.$window.height() * 0.75
        const $animTarget = $cards.find('.sdg-card-container')

        let cardsPos
        let shouldAnimate = false

        this.$modalContent.scroll(() => {
            cardsPos = $cards.position()
            shouldAnimate = cardsPos.top <= threshold

            if (shouldAnimate && !$animTarget.hasClass('in-viewport')) {
                $animTarget.addClass('in-viewport')
            }
        })
    }
}


export default ModalSdgs
