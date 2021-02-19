import Glide from "@glidejs/glide";


class DynamicSlider {
    constructor(container) {
        this.$window = $(window)
        this.$container = $(container)
        this.$slides = this.$container.find('.glide__slide')

        this.viewportSlides = []
        this.numberOfSlides = this.$slides.length

        this.options = {
            type: 'slider',
            gap: 27,
            bound: true,
            peek: {before: 120, after: 70},
            perView: 5,
            breakpoints: {
                620: {
                    peek: {before: 0, after: 85},
                    perView: 1,
                },
                820: {
                    peek: {before: 0, after: 100},
                    perView: 2,
                },
                1024: {
                    peek: {before: 0, after: 100},
                    perView: 3
                },
                1440: {
                    perView: 4
                }
            }
        }
    }

    destroy() {
        // Destroy glide if an instance has already been initialized
        // Set the variable to null. Destroyed instances will break when mounted again
        if (this.glide) {
            this.glide.destroy()
            this.glide = null
        }
    }

    init() {
        this.destroy()

        this.glide = new Glide(this.$container.get(0), this.options);

        // Change pointer to arrow image
        this.$slides.on('mousemove', e => {
            let currentPosition = this.viewportSlides.indexOf(this.glide.index);
            let thresholdArea = this.$container.outerWidth() / 2;

            // We're at the beginning of the slides
            if (currentPosition === 0) {
                thresholdArea = this.$container.outerWidth()
            }

            // We're at the end of the slides
            if (currentPosition === this.viewportSlides.length - 1) {
                thresholdArea = 0
            }

            let threshold = this.$window.outerWidth()
            threshold -= thresholdArea
            const arrowDir = e.pageX < threshold ? 'left' : 'right'

            this.$slides.css('cursor',
                `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), 
                    url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`
            )
        });

        // Navigate through slides on slide click
        this.$slides.click(e => {
            let currentPosition = this.viewportSlides.indexOf(this.glide.index);
            let thresholdArea = this.$container.outerWidth() / 2;

            // We're at the beginning of the slides
            if (currentPosition === 0) {
                thresholdArea = this.$container.outerWidth()
            }

            // We're at the end of the slides
            if (currentPosition === this.viewportSlides.length - 1) {
                thresholdArea = 0
            }

            let threshold = this.$window.outerWidth()
            threshold -= thresholdArea
            const arrowDir = e.pageX < threshold ? 'left' : 'right'

            let target = this.getNavTarget(currentPosition, arrowDir);
            if (target !== false) {
                this.glide.go(`=${target}`)
            }
        })

        const $bulletWrapper = $(this.glide.selector.querySelector('.glide__bullets'));

        let $controlSlider = null
        let perViewSetting = this.glide.settings.perView;
        let numberOfViewportSlides = Math.ceil(this.numberOfSlides / perViewSetting)
        let slideWidth = 100 / numberOfViewportSlides;

        this.glide.on(['mount.after', 'run'], () => {
            // Calculate cursor position from active slide index
            let bulletIndex = Math.floor(this.glide.index / perViewSetting);

            if (this.glide.index % perViewSetting !== 0) {
                bulletIndex++;
            }

            $controlSlider.css('left', (bulletIndex * slideWidth) + "%")
        })

        this.glide.on(['mount.before'], () => {
            perViewSetting = this.glide.settings.perView;
            numberOfViewportSlides = Math.ceil(this.numberOfSlides / perViewSetting)
            slideWidth = 100 / numberOfViewportSlides;

            $bulletWrapper.html('<div class="slider-control"></div>')
            $controlSlider = this.$container.find('.control-slider')
            $controlSlider.css('width', slideWidth + "%")

            // Create all bullets
            for (let index = 0; index < numberOfViewportSlides; index++) {
                const button = document.createElement('button');
                button.className = `glide__bullet bullet-index-${index}`;
                button.setAttribute("data-glide-dir", '=' + index);
                $bulletWrapper.append(button);
            }
        });

        this.glide.on(['mount.before'], () => {
            perViewSetting = this.glide.settings.perView;

            if (this.numberOfSlides === perViewSetting) {
                this.glide.settings.peek = 0;
                $bulletWrapper.addClass('hide');
            } else {
                $bulletWrapper.removeClass('hide');
            }
        })

        this.glide.on(['build.before', 'resize'], () => {
            // This will show and hide bullets depending on how many
            // cards and "cards per view" there are
            perViewSetting = this.glide.settings.perView;
            this.viewportSlides = [] // Clear viewport slides

            if (this.numberOfSlides === perViewSetting) {
                this.glide.settings.peek = 0;
                $bulletWrapper.addClass('hide');
            } else {
                $bulletWrapper.removeClass('hide');
            }

            numberOfViewportSlides = Math.floor(this.numberOfSlides / perViewSetting)
            numberOfViewportSlides = this.numberOfSlides % perViewSetting !== 0 ? numberOfViewportSlides + 1 : numberOfViewportSlides;
            slideWidth = 100 / numberOfViewportSlides;

            $controlSlider = this.$container.find('.slider-control')
            $controlSlider.css('width', slideWidth + "%")

            $bulletWrapper.find('.glide__bullet').addClass('hide-bullet');

            let lastBulletIndex = 0;
            for (let index = 0; index < numberOfViewportSlides; index++) {
                let bulletIndex = index * perViewSetting;
                let remainder = this.numberOfSlides % perViewSetting;

                if (index === numberOfViewportSlides - 1 && remainder !== 0) {
                    remainder = remainder !== 0 ? remainder : 1;
                    bulletIndex = index > 0 ? lastBulletIndex + remainder : index;
                }

                lastBulletIndex = bulletIndex;
                $bulletWrapper.find(`.bullet-index-${bulletIndex}`).removeClass('hide-bullet');
                this.viewportSlides.push(bulletIndex)
            }
        });

        this.glide.mount();
    }

    getNavTarget(currentPosition, direction) {
        let navTarget = false;

        if (direction === "left" && currentPosition > 0) {
            navTarget = this.viewportSlides[currentPosition - 1];
        }

        if (direction === "right" && currentPosition < this.viewportSlides.length) {
            navTarget = this.viewportSlides[currentPosition + 1];
        }

        return navTarget === undefined ? false : navTarget;
    }
}


export default DynamicSlider
