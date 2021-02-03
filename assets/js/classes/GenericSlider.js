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
                    gap: 10
                }
            }
        }
    }

    init() {
        this.mountGlide()
        this.bindEvents()
    }

    mountGlide() {
        const $glideSlides = this.$container.find('.standard-page-slide')
        const slideWidth = 100 / $glideSlides.length;

        this.$sliderControl.css('width', `${slideWidth}%`)
        this.glide = new Glide('.standard-page-slider', this.options)

        this.glide.on(['mount.after', 'run'], () => {
            this.$sliderControl.css('left', (this.glide.index * slideWidth) + "%")
        })

        this.glide.mount()
    }

    bindEvents() {
        this.setCursorImage()
        this.setSliderBullets()
        this.setCustomControls()
    }

    setSliderBullets() {
        const $slides = this.$container.find('.glide__slides')
        this.$bullets.find('glide__bullet').remove() // Remove previous bullets

        $slides.each(i => {
            this.$bullets.append(`
                <button class="glide__bullet" data-glide-dir="=${i + 1}" aria-label="Slide ${i + 1}">
                    <span class="show-for-sr">Slide ${i + 1}</span>
                </button>
            `)
        })
    }

    setCustomControls() {
        let thresholdArea = this.$container.offset().left + (this.$container.width() / 2);
        let threshold = this.$window.width() - thresholdArea

        this.$slidesContainer.click((e) => {
            const slideDir = e.pageX < threshold ? '<' : '>'

            if(!$(e.target).is(':button')){
                this.glide.go(slideDir)
            }
        })
    }

    setCursorImage() {
        let thresholdArea = this.$container.offset().left + (this.$container.width() / 2);
        let threshold = this.$window.width() - thresholdArea

        this.$slidesContainer.on('mousemove', e => {
            const arrowDir = e.pageX < threshold ? 'left' : 'right'

            this.$slidesContainer.css('cursor',
                `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), 
                    url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`
            )
        });
    }
}


export default GenericSlider
