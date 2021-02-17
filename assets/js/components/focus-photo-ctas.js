import {throttle} from "@glidejs/glide/src/utils/wait";


const init = function () {

    const $window = $(window)
    const focusClass = 'focused'
    const $photoCta = $('.photo-cta')

    if (!$photoCta.length) return

    function elementInViewPort($el) {
        const scrollTop = $window.scrollTop()
        const scrollBottom = scrollTop + $window.height()
        const elTop = $el.offset().top
        const elBottom = elTop + $el.height()

        let inViewPort = elTop >= scrollTop
        inViewPort &= elBottom <= scrollBottom

        if (inViewPort) $el.addClass(focusClass)
        else $el.removeClass(focusClass)
    }

    $photoCta.each((i, card) => {
        $window.on('scroll', throttle(() => elementInViewPort($(card)), 100))
    })
}


export default init
