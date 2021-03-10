

const init = function() {

    const $accordion = $('.accordion')

    if ($accordion.length) {
        $accordion.find('.accordion-trigger')
            .click(function() {
                let $acc = $(this).closest('.accordion')
                $acc.toggleClass('expanded')
            })
    }
}


export default init
