import NavMenu from '../classes/NavMenu'
import NavAnimation from "../classes/NavAnimation"

const init = function () {
    const $navigationWrapper = $('[data-navigation]')

    const menu = new NavMenu($navigationWrapper)
    menu.init()

    if($navigationWrapper.hasClass('nav-country-container')) {
        const animation = new NavAnimation($navigationWrapper)
        animation.init()
    }
}

export default init
