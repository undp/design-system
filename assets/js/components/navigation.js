import NavMenu from '../classes/NavMenu'
import NavAnimation from "../classes/NavAnimation";

const init = function () {
    const $navigationWrapper = $('[data-navigation]')

    if ($navigationWrapper.length) {
        const menu = new NavMenu($navigationWrapper)
        const animation = new NavAnimation($navigationWrapper)

        menu.init()
        animation.init()
    }
}

export default init
