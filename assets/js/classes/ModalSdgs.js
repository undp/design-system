import Glide from '@glidejs/glide'


class ModalSdgs {

    constructor() {
        this.$body = $('body')
        this.$window = $(window)
        this.$modal = $('#modal-sdgs')
        this.$openModal = $('.sdg-card')
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')
        this.$cardsSliderContainer = this.$modal.find('.cards-slider-container')

        this.glide = null
        this.url = null
        this.color = null
        this.classHide = 'hide'
        this.classModalOpen = 'open'
        this.classBodyModalOpen = 'modal-open'

        this.$sdgDeepDiveHero = $('.sdg-deep-dive-hero')
    }

    init() {
        this.initSlider()
        this.appearCards()
        this.listenerOpenModal()
        this.listenerCloseModal()
        this.listenerWindowClick()
        this.listenerKeyPress()
    }

    listenerOpenModal() {
        this.$openModal.click((current) => {
            this.url = $(current.currentTarget).data('url')
            this.color = $(current.currentTarget).data('color')
            this.open()
            this.addColorClass()
        })
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

    destroyGlide() {
        // Destroy glide if an instance has already been initialized
        // Set the variable to null. Destroyed instances will break when mounted again
        if (this.glide) {
            this.glide.destroy()
            this.glide = null
        }
    }

    initSlider() {
        this.destroyGlide()

        const $statCard = this.$cardsSliderContainer.find('.stat-card')
        const $controlSlider = this.$cardsSliderContainer.find('.control-slider')
        const numberOfSlides = this.$cardsSliderContainer.find('.glide__slide').length
        const slideWidth = 100 / numberOfSlides;

        $controlSlider.css('width', slideWidth + "%")

        if (this.$cardsSliderContainer.length) {
            this.glide = new Glide(this.$cardsSliderContainer.get(0), {
                type: 'slider',
                gap: 24,
                perView: 5,
                breakpoints: {
                    425: {perView: 2},
                    820: {perView: 3},
                    1194: {perView: 4},
                }
            });

            this.glide.mount()
        }

        // Calculate cursor position from active slide index
        this.glide.on(['mount.after', 'run'], () => {
            $controlSlider.css('left', (this.glide.index * slideWidth) + "%")
        })
        // Change pointer to arrow image
        $statCard.on('mousemove', function(e){
            const arrowDir = e.pageX < ($(this).width() / 2) ? 'left' : 'right'
            $statCard.css('cursor',
                `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`
            )
        });
        // Navigate through slides on slide click
        $statCard.click(e => {
            let $target = $(e.currentTarget)
            this.glide.go(
                e.pageX < ($target.width() / 2) ? '<' : '>'
            )
        })
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
