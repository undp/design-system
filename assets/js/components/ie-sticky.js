import Sticky from 'stickyfilljs'


const init = function() {
    const $ieSticky = $('[data-ie-sticky]')

    if ($ieSticky.length) {
        Sticky.add($ieSticky)
    }
}


export default init
