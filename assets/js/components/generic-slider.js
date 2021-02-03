import GenericSlider from "../classes/GenericSlider";


const init = function () {

    const $sliders = $('.generic-slider')

    if ($sliders.length) {
        $sliders.each((i, slider) => {
            const $slider = $(slider)
            const options = $slider.data('options') ? $slider.data('options') : null

            const genericSlider = new GenericSlider(slider, options)
            genericSlider.init()
        })
    }
}


export default init
