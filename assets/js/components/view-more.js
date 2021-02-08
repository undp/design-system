import ViewMore from "../classes/ViewMore";


const init = function() {

    const $viewMore = $('[data-view-more]')

    if ($viewMore) {
        $viewMore.each(function() {
            const $this = $(this)
            const loadStep = $this.data('load-step') ? $this.data('load-step') : 6
            const viewMore = new ViewMore(this, loadStep)

            viewMore.init()
        })
    }
}


export default init
