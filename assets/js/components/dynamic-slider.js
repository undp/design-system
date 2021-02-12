import DynamicSlider from "../classes/DynamicSlider";


const init = function() {

    const $dynamicSliders = $('.dynamic-slider')

    if ($dynamicSliders.length) {
        $dynamicSliders.each(function() {
            const dynamicSlider = new DynamicSlider(this)
            dynamicSlider.init()
        })
    }
}


export default init
