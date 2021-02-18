const init = function() {

    const $question = $('.question')

    if ($question.length) {
        $question
            .click(function() {
                let $q = $(this).closest('.question')
                $q.siblings('.question').removeClass('expanded')
                $q.toggleClass('expanded')
            })
    }
}


export default init
