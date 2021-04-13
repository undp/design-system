

const init = function() {

    const $hamburgers = $('[data-hamburger]')

    if ($hamburgers.length) {
        $hamburgers
            .click(function() {
                $(this).toggleClass('is-active')
            })
    }
}


export default init
