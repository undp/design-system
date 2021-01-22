import Glide from '@glidejs/glide'


class SDGModal {

    constructor(container = '#modal-sdgs', modalTrigger = '.sdg-card-list .sdg-card') {
        this.$body = $('body')
        this.$window = $(window)
        this.$modal = $(container)
        this.$openModal = $(modalTrigger)
        this.$modalBtnClose = this.$modal.find('.btn-close')
        this.$modalContent = this.$modal.find('.modal-content')
        this.$modalContentWrapper = this.$modal.find('[data-sdg-content-wrapper]')

        this.slug = null
        this.color = null
        this.glide = null

        this.classes = {
            hide: 'hide',
            modalOpen: 'open',
            lockBody: 'modal-open'
        }

        this.$nextSdg = null
        this.$sdgCardList = $('.sdg-card-list')
        this.$nextSdgCta = this.$modal.find('.next-sdg-container')
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
        this.$body.addClass(this.classes.lockBody)
        this.$modal.removeClass(this.classes.hide).addClass(this.classes.modalOpen)
        this.$modalContent.animate( { scrollTop : 0 }, 800 )
    }

    close() {
        if(!this.$modal.length) {
            return false;
        }

        const $cards = $('.cards-slider')

        location.hash = ''
        $cards.find('.sdg-card-container').removeClass('in-viewport')

        this.$body.removeClass(this.classes.lockBody)
        this.$modal.addClass(this.classes.hide).removeClass(this.classes.modalOpen)
    }

    setCloseModalListener() {
        this.$modalBtnClose.click(() => {
            this.close()
        })
    }

    setKeyPressListener() {
        this.$window.keyup((e) => {
            if (e.keyCode === 27) { //esc
                this.close()
            }
        })
    }

    setOpenModalListener() {
        const $sdgCardList = $('.sdg-card-list')
        this.$openModal.click(ev => this.setModalSdg($(ev.currentTarget)))

        this.$nextSdgCta.click(() => {
            const nextSdg = this.$nextSdgCta.find('.sdg-card')
            $sdgCardList.find(`[data-number="${nextSdg.data('number')}"]`).trigger('click')
        })
    }

    setNextSdgCtaData() {
        if(this.number === 17) {
            this.$nextSdgCta.addClass('hide')
            return
        }

        const nextSdg = this.$nextSdgCta.find('.sdg-card')
        const nextSdgTitle = this.$nextSdg.data('title')
        const nextSdgNumber = this.$nextSdg.data('number')

        nextSdg.data('number', nextSdgNumber)
        nextSdg.addClass(`color-${nextSdgNumber}`)
        nextSdg.removeClass(`color-${this.number}`)

        this.$nextSdgCta.removeClass('hide')
        this.$nextSdgCta.find('.title').html(nextSdgTitle)
        this.$nextSdgCta.find('.number').html(nextSdgNumber)
    }

    setWindowClickListener() {
        this.$window.click(evt => {
            if (this.$modal.has(evt.target).length &&
                this.$modal.hasClass(this.classes.modalOpen) &&
                !this.$modalContent.has(evt.target).length) {
                this.close()
            }
        })
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

        const $sliderContainer = this.$modalContentWrapper.find('.cards-slider-container')

        const $statCard = $sliderContainer.find('.stat-card')
        const $slides = $sliderContainer.find('.glide__slide')
        const $controlSlider = $sliderContainer.find('.control-slider')

        const slideWidth = 100 / $slides.length;

        $controlSlider.css('width', slideWidth + "%")

        if ($sliderContainer.length) {
            this.glide = new Glide($sliderContainer.get(0), {
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

            // Calculate cursor position from active slide index
            this.glide.on(['mount.after', 'run'], () => {
                $controlSlider.css('left', (this.glide.index * slideWidth) + "%")
            })
            // Change pointer to arrow image
            $statCard.on('mousemove', e => {
                let threshold = this.$window.outerWidth()
                threshold -= this.$modalContent.outerWidth() / 2
                const arrowDir = e.pageX < threshold ? 'left' : 'right'

                $statCard.css('cursor',
                    `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`
                )
            });
            // Navigate through slides on slide click
            $statCard.click(e => {
                let threshold = this.$window.outerWidth()
                threshold -= this.$modalContent.outerWidth() / 2
                this.glide.go(e.pageX < threshold ? '<' : '>')
            })
        }

        this.setCardsAnimation()
    }

    addColorClasses() {
        const $sdgDeepDiveHero = this.$modalContentWrapper.find('.sdg-deep-dive-hero')

        $sdgDeepDiveHero.find('.title').addClass(this.color)
        $sdgDeepDiveHero.find('.description-container').addClass(this.color)
        this.$modalContentWrapper.find('.stat-card').addClass(`sdg ${this.color}`)
        this.$modalContentWrapper.find('.single-content-card-accent-color').addClass(`sdg ${this.color}`)
    }

    setModalSdg($sdg) {
        let $sdgModalContent = $sdg.next('.sdg-modal-content')

        if (!$sdgModalContent.length) return false

        this.slug = $sdg.data('slug')
        this.color = $sdg.data('color')
        this.number = $sdg.data('number')

        this.$modalContentWrapper.html($sdgModalContent.html())

        this.$nextSdg = $sdg.parent().next().find('.sdg-card')

        location.hash = this.slug
        this.open()
        this.initSlider()
        this.addColorClasses()
        this.setNextSdgCtaData()
    }

    checkUrlHash() {
        let hash = location.hash

        if (hash) {
            const slug = hash.replace('#', '')
            const $targetSdg = $(`.sdg-card[data-slug=${slug}]`)

            if (!$targetSdg.length) return false

            this.setModalSdg($targetSdg)
            this.setNextSdgCtaData()
        }
    }

    setCardsAnimation() {
        const threshold = this.$window.height() * 0.75
        const $cards = this.$modalContentWrapper.find('.cards-slider')
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


export default SDGModal
