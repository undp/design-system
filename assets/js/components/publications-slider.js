import Glide from '@glidejs/glide/';

const init = function () {
    const $glide = $('.glide')

    if ($glide.length) {
        new Glide('.glide').mount()
    }
}

export default init