const init = function() {

    const $question = $('.question')

    if ($question.length) {
        $question
            .click(function() {
                let $q = $(this).closest('.question')
                console.log('click')
                $q.siblings('.answer').removeClass('expanded')
                $q.toggleClass('expanded')
            })
    }
}


export default init
