import Glide from '@glidejs/glide'


class GenericSlider {
    constructor(container, options = null) {
        this.$window = $(window)
        this.$container = $(container)
        this.$bullets = this.$container.find('.glide__bullets')
        this.$slidesContainer = this.$container.find('.glide__slides')
        this.$sliderControl = this.$container.find('.slider-control')

        this.glide = null
        this.options = options ? options :  {
            type: 'slider',
            peek: {before: 0, after: 24},
            gap: 156,
            perView: 1,
            breakpoints: {
                1194: {
                    gap: 50
                },
                820: {
                    gap: 20
                }
            }
        }
    }

    init() {
        this.mountGlide()
        this.bindEvents()
    }

    bindEvents() {
        this.setCursorImage()
        this.setSliderBullets()
        this.setCustomControls()
    }

    getSliderControlWidth() {
        const perView = this.glide.settings.perView
        const $slides = this.$container.find('.glide__slide')

        return 100 / ($slides.slice(perView).length + 1)
    }

    mountGlide() {
        this.glide = new Glide(this.$container.get(0), this.options)
        this.glide.mount()

        this.glide.on(['resize', 'update'], () => this.setSliderControl())
        this.glide.on(['mount.after', 'run'], () => {
            this.$sliderControl.css('left', (this.glide.index * this.getSliderControlWidth()) + "%")
        })

        this.setSliderControl()
        $(this.glide).trigger('update')
    }

    setSliderControl() {
        if (!this.glide) return

        const sliderControlWidth = this.getSliderControlWidth()

        if (!this.$sliderControl.length) {
            this.$container.find('.bullets-container').prepend('<div class="slider-control"></div>')
            this.$sliderControl = this.$container.find('.slider-control')
        }

        this.$sliderControl.css('width', `${sliderControlWidth}%`)
    }

    setSliderBullets() {
        const perView = this.glide.settings.perView
        const $slides = this.$container.find('.glide__slide')
        this.$bullets.find('glide__bullet').remove() // Remove previous bullets

        $slides.slice(perView - 1)
            .each(i => {
                this.$bullets.append(`
                    <button class="glide__bullet" data-glide-dir="=${i}" aria-label="Slide ${i + 1}">
                        <span class="show-for-sr">Slide ${i + 1}</span>
                    </button>
                `)
            })

        this.$bullets
            .find('.glide__bullet')
            .click(ev => {
                const $target = $(ev.currentTarget)
                this.glide.go($target.data('glide-dir'))
            })
    }

    setCustomControls() {
        this.$slidesContainer.click((e) => {
            let thresholdArea = this.$container.offset().left + (this.$container.width() / 2)
            let threshold = this.$window.width() - thresholdArea
            const slideDir = e.pageX < threshold ? '<' : '>'

            if(!$(e.target).is(':button')){
                this.glide.go(slideDir)
            }
        })
    }

    setCursorImage() {
        this.$slidesContainer.on('mousemove', e => {
            let threshold = this.$container.offset().left + (this.$container.width() / 2)
            const arrowDir = e.pageX < threshold ? 'left' : 'right'

            this.$slidesContainer.css('cursor',
                `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), 
                    url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`
            )
        })
    }
}


export default GenericSlider
