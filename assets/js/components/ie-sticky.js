import Sticky from 'stickyfilljs'


const init = function() {
    const $ieSticky = $('[data-ie-sticky], .scroll-up')

    if ($ieSticky.length) {
        Sticky.add($ieSticky)
    }
}


export default init
