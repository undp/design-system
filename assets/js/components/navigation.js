import Menu from '../classes/Menu'

const init = function () {
    const $navigationContainer = $('[data-navigation]')
    const menu = new Menu($navigationContainer)
    menu.init()
}

export default init
