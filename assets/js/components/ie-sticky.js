import Sticky from 'stickyfilljs'


const init = function() {
    const $ieSticky = $('[data-ie-sticky], .scroll-up')

    if ($ieSticky.length) {
        console.log('bla')
        Sticky.add($ieSticky)
    }
}


export default init
