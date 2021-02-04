

const init = function() {

    const $sideNav = $('.side-navigation')

    if ($sideNav.length) {
        const $mobileNavTrigger = $sideNav.find('.mobile-menu-heading')
        const $dropdowns = $sideNav.find('.has-children:not(.mobile-menu-heading)')

        $dropdowns.each((i, dd) => {
            const $dd = $(dd)
            $dd.on('click', () => $dd.toggleClass('submenu-expanded'))

            $dd.on('keydown', ev => {
                if (ev.keyCode == 32) {
                    $dd.toggleClass('submenu-expanded')
                    return false
                }
            })
        })

        $mobileNavTrigger.each((i, trigger) => {
            const $trigger = $(trigger)
            $trigger.on('click', () => $sideNav.toggleClass('menu-expanded'))
        })
    }
}

export default init
