

const init = function() {

    const $window = $(window)
    const $nav = $('[data-navigation]')
    const $pfc = $('.publication-featured-card')

    if (!$pfc.length) return

    function setSuitableScale() {
        const pfcHeight = $pfc.height()
        const availableHeight = $window.height() - $nav.height() - 20

        let suitableScale = 1

        if (pfcHeight > availableHeight) {
            suitableScale = availableHeight / $pfc.height()
            $pfc.css('transform', `scale(${suitableScale})`)
        }
    }

    function shouldScale(minBreakpoint = 'medium') {
        return Foundation.MediaQuery.atLeast(minBreakpoint)
    }

    if (shouldScale()) setSuitableScale()

    $window.resize(() => {
        if (shouldScale()) setSuitableScale()
    })
}


export default init
