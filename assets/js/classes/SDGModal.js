import Glide from '@glidejs/glide'


class SDGModal {

    constructor(container = '#modal-sdgs', modalTrigger = '.sdg-card-list .sdg-card') {
        this.$body = $('body')
        this.$html = $('html')
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
        this.$html.addClass(this.classes.lockBody)
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

        this.$html.removeClass(this.classes.lockBody)
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

        this.removeColorClasses(this.$nextSdgCta)
        nextSdg.data('number', nextSdgNumber)
        nextSdg.addClass(`color-${nextSdgNumber}`)

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

        if ($sliderContainer.length) {
            this.glide = new Glide($sliderContainer.get(0), {
                type: 'slider',
                gap: 24,
                peek: 115,
                bound: true,
                perView: 4,
                breakpoints: {
                    425: {
                        peek: { before: 0, after: 100 },
                        perView: 1,
                    },
                    819: {
                        peek: 100,
                        perView: 2
                    },
                    1439: {
                        perView: 3
                    },
                }
            });

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


            const numberOfSlides = $sliderContainer.find('.glide__slide').length
            const $bulletWrapper = $(this.glide.selector.querySelector('.glide__bullets'));

            let $controlSlider = null
            let perViewSetting = this.glide.settings.perView;
            let numberOfViewportSlides = Math.ceil(numberOfSlides/perViewSetting)
            let slideWidth = 100 / numberOfViewportSlides;

            this.glide.on(['mount.after', 'run'], () => {
                // Calculate cursor position from active slide index
                let bulletIndex = Math.floor(this.glide.index / perViewSetting);

                if(this.glide.index % perViewSetting !== 0) {
                    bulletIndex++;
                }

                $controlSlider.css('left', (bulletIndex * slideWidth) + "%")
            })

            this.glide.on(['mount.before'], () => {
                perViewSetting = this.glide.settings.perView;
                numberOfViewportSlides = Math.ceil(numberOfSlides/perViewSetting)
                slideWidth = 100 / numberOfViewportSlides;

                $bulletWrapper.html('<div class="control-slider"></div>')
                $controlSlider = $sliderContainer.find('.control-slider')
                $controlSlider.css('width', slideWidth + "%")

                // Create all bullets
                for (let index = 0; index < numberOfSlides; index++) {
                    const button = document.createElement('button');
                    button.className = `glide__bullet bullet-index-${index}`;
                    button.setAttribute("data-glide-dir", '=' + index);
                    $bulletWrapper.append(button);
                }
            });

            this.glide.on(['build.before', 'resize'], () => {
                // This will show and hide bullets depending on how many
                // cards and "cards per view" there are
                perViewSetting = this.glide.settings.perView;
                numberOfViewportSlides = Math.floor(numberOfSlides/perViewSetting)
                numberOfViewportSlides = numberOfSlides%perViewSetting !== 0 ? numberOfViewportSlides+1 : numberOfViewportSlides;
                slideWidth = 100 / numberOfViewportSlides;

                $controlSlider = $sliderContainer.find('.control-slider')
                $controlSlider.css('width', slideWidth + "%")

                $bulletWrapper.find('.glide__bullet').addClass('hide-bullet');

                let lastBulletIndex = 0;
                for (let index = 0; index < numberOfViewportSlides; index++) {
                    let bulletIndex = index * perViewSetting;

                    if(index === numberOfViewportSlides - 1) {
                        const remainder = numberOfSlides%perViewSetting !== 0 ?
                            numberOfSlides%perViewSetting : 1;
                        bulletIndex = index > 0 ? lastBulletIndex+remainder : index;
                    }

                    lastBulletIndex = bulletIndex;
                    $bulletWrapper.find(`.bullet-index-${bulletIndex}`).removeClass('hide-bullet');
                }
            });

            this.glide.mount();
        }

        this.setCardsAnimation()
    }

    addColorClasses() {
        const $sdgDeepDiveHero = this.$modalContentWrapper.find('.sdg-deep-dive-hero')

        this.removeColorClasses(this.$modalContentWrapper)
        $sdgDeepDiveHero.find('.title').addClass(this.color)
        $sdgDeepDiveHero.find('.description-container').addClass(this.color)
        this.$modalContentWrapper.find('.stat-card').addClass(`sdg ${this.color}`)
        this.$modalContentWrapper.find('.single-content-card-accent-color').addClass(`sdg ${this.color}`)
    }

    removeColorClasses($container) {
        const $colorClasses = $container.find('[class*=color-]')

        $colorClasses.each((i, node) => {
            node.className = node.className
                .split(' ')
                .filter(c => !c.startsWith('color-'))
                .join(' ').trim()
        })
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
                this.$modalContent.find('.track').addClass('in-viewport')
            }
        })
    }
}


export default SDGModal
