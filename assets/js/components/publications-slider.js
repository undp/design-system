import Glide from '@glidejs/glide/';
let _ = require('lodash');

const init = function () {
    const $glide = $('.publications-slider')
    const $publicationSlide = $glide.find('.publication-content-container');

    if ($glide.length) {
        const $controlSlider = $glide.find('.control-slider')
        const numberOfSlides = $glide.find('.glide__slide').length
        const slideWidth = 100/numberOfSlides;

        $controlSlider.css('width', slideWidth + "%")

        const glide = new Glide('.publications-slider', {
            type: 'slider',
            peek: 118,
            gap: 92,
            direction: window.pageDirection,
            breakpoints: {
                1194: {
                    peek: 15,
                    gap: 0
                }
            }
        });

        glide.on(['mount.after', 'run'], () => {
            $controlSlider.css(
                window.pageDirection === 'ltr' ? 'left' : 'right',
                (glide.index * slideWidth) + "%"
            )
        })

        glide.mount()

       $publicationSlide.on('mousemove', function(e){
           let arrowDir = e.pageX < $(this).width() / 2 ? 'left' : 'right'

           $publicationSlide.css('cursor',
               `url("/assets/images/arrows/slider-arrow-${arrowDir}.svg"), 
                url("/assets/images/arrows/slider-arrow-${arrowDir}.cur"), auto`)
        });

       $publicationSlide.click(function(e) {
           let slideDir = e.pageX < ($(this).width() / 2) ? '<' : '>'

           if (window.pageDirection === 'rtl') { // Invert goto dir when in RTL
               slideDir = slideDir === '>' ? '<' : '>'
           }

            if(!$(e.target).is(':button')){
                glide.go(slideDir)
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
