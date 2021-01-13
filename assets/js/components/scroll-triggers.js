import Appear from 'appear/dist/appear'

const init = function () {
    const trackClass = 'scroll-track'
    const visibleClass = 'in-viewport'

    appear({
        elements: () => {
            return document.getElementsByClassName(trackClass)
        },
        appear: (el) => {
            $(el).addClass(visibleClass)
        },
        bounds: 100,
        reappear: true
    })
}

export default init
