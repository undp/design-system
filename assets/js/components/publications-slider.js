import Glide from '@glidejs/glide/';

const init = function () {
    const $glide = $('.publications-slider')

    if ($glide.length) {
        const $controlSlider = $glide.find('.control-slider')
        const numberOfSlides = $glide.find('.glide__slide').length
        const slideWidth = 100/numberOfSlides;

        $controlSlider.css('width', slideWidth + "%")

        const glide = new Glide('.publications-slider', {
            type: 'carousel',
            peek: 118,
            gap: 92,
            breakpoints: {
                1194: {
                    peek: 15,
                    gap: 0
                }
            }
        });

        glide.on(['mount.after', 'run'], () => {
            $controlSlider.css('left', (glide.index*slideWidth) + "%")
        })

        glide.mount()
    }
}

export default init
