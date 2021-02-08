import ScrollUp from "../classes/ScrollUp";


const init = function() {

    const $scrollUp = $('[data-scroll-up]')

    if ($scrollUp.length) {
        $scrollUp.each((i, scroller) => {
            const scrollUp = new ScrollUp(scroller)
            scrollUp.init()
        })
    }
}


export default init
