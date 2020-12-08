import Glide from '@glidejs/glide/';
let _ = require('lodash');

const init = function () {
    const $glide = $('.publications-slider')
    const $publicationSlide = $glide.find('.publication-content');

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

       $publicationSlide.on('mousemove', function(e){
            if (e.pageX < $(this).width() / 2) {
               $publicationSlide.css('cursor', 'url("/assets/images/arrows/slider-arrow-left.svg"), auto')
            } else {
               $publicationSlide.css('cursor', 'url("/assets/images/arrows/slider-arrow-right.svg"), auto')
            }
        });

       $publicationSlide.click(function(e) {
            if(!$(e.target).is(':button')){
                if (e.pageX < $(this).width() / 2) {
                    glide.go('<')
                } else {
                    glide.go('>')
                }
            }
        });


        let slideContainerWidth = $('.publications-slider').find('.glide__slide').width();
        $('.bullets-container').width(slideContainerWidth);
        $('.publication-title-container').width(slideContainerWidth);

        $(window).resize(_.debounce(()=>{
            slideContainerWidth = $('.publications-slider').find('.glide__slide').width()
            $('.bullets-container').width(slideContainerWidth);
            $('.publication-title-container').width(slideContainerWidth);
        }, 200));
    }

}

export default init
