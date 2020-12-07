import Glide from '@glidejs/glide/';

const init = function () {
    const $glide = $('.publications-slider')
    const $glideTrack = $glide.find('.glide__track');

    if ($glide.length) {
        const $controlSlider = $glide.find('.control-slider')
        const numberOfSlides = $glide.find('.glide__slide').length
        const slideWidth = 100/numberOfSlides;

        $controlSlider.css('width', slideWidth + "%")

        const glide = new Glide('.publications-slider', {
            type: 'slider',
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

        $glideTrack.on('mousemove', function(e){
            if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
                $(".glide__track").css('cursor', 'url("/assets/images/arrows/slider-arrow-left.svg"), auto')
            } else {
                $(".glide__track").css('cursor', 'url("/assets/images/arrows/slider-arrow-right.svg"), auto')
            }
        });

        $glideTrack.click(function(e) {
            if(!$(e.target).is(':button')){
                if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
                    glide.go('<')
                } else {
                    glide.go('>')
                }
            }
        });
    }

}

export default init
