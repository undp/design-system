import Glide from '@glidejs/glide/';

const init = function () {
    const $glideExpertiseSection = $('.glide-expertise')

    if($glideExpertiseSection.length){
        const $controlSlider = $glideExpertiseSection.find('.control-slider')
        const numberOfSlides = $glideExpertiseSection.find('.glide__slide').length
        const slideWidth = 100 / numberOfSlides

        $controlSlider.css('width', `calc(${slideWidth}% - 15px)`)

        const glideExpertise = new Glide('.glide-expertise', {
            peek: { before: 0, after: 40 },
            direction: window.pageDirection
        });

        glideExpertise.on(['mount.after', 'run'], () => {
            $controlSlider.css(
                window.pageDirection === 'ltr' ? 'left' : 'right',
                (glideExpertise.index * slideWidth) + "%"
            )
        })

        glideExpertise.mount();
    }
}

export default init
