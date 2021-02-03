import ViewMoreLess from "../classes/ViewMoreLess";


const init = function() {

    const $viewMoreLess = $('[data-view-more-less]')

    if ($viewMoreLess) {
        $viewMoreLess.each(function() {
            const $this = $(this)
            const loadStep = $this.data('load-step') ? $this.data('load-step') : 6
            const viewMoreLess = new ViewMoreLess(this, loadStep)

            viewMoreLess.init()
        })
    }
}


export default init
