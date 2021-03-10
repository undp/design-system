

const init = function() {

    const $window = $(window)
    const $nav = $('[data-navigation]')
    const $pfc = $('.publication-featured-card, .multi-cta-featured-publication')

    if (!$pfc.length) return

    function shouldScale(minBreakpoint = 'medium') {
        return Foundation.MediaQuery.atLeast(minBreakpoint)
    }

    function setSuitableScale() {
        const pfcHeight = $pfc.height()
        const availableHeight = $window.height() - $nav.height() - 30

        let suitableScale = 1

        if (shouldScale() && pfcHeight > availableHeight) {
            suitableScale = availableHeight / $pfc.height()
        }

        $pfc.css('transform', `scale(${suitableScale})`)
    }

    setSuitableScale()
    $window.resize(() => setSuitableScale())
}


export default init
