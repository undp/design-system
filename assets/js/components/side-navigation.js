

const init = function() {

    const $sideNav = $('.side-navigation')

    if ($sideNav.length) {
        const $body = $('body')
        const $mobileNavTrigger = $sideNav.find('.mobile-menu-heading')
        const $dropdowns = $sideNav.find('.has-children:not(.mobile-menu-heading)')

        $dropdowns.each((i, dd) => {
            const $dd = $(dd)
            $dd.on('click', () => $dd.toggleClass('submenu-expanded'))
        })

        $mobileNavTrigger.each((i, trigger) => {
            const $trigger = $(trigger)
            $trigger.on('click', () => {
                $sideNav.toggleClass('menu-expanded')
                $sideNav.hasClass('menu-expanded') ? $body.addClass('overflow-hidden') : $body.removeClass('overflow-hidden')
            })
        })
    }
}

export default init
