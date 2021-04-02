let _ = require('lodash')


class ImageSize {
    constructor() {
        this.$hero = $('.hero, [data-multi-image-background]');
        this.$window = $(window);
    }

    init() {
        this.listenerWindow();
    }

    listenerWindow() {

        this.$hero.each((i, hero) => {
            const $hero = $(hero)
            const $imageMobile = $hero.data('mobile-image')
            const $imageDesktop = $hero.data('desktop-image')

            if ($imageMobile ==  '' & $imageDesktop == ''){
                $hero.addClass('no-image')
                return
            }

            this.$window.on('changed.zf.mediaquery', () => {

                const img = Foundation.MediaQuery.atLeast('medium')
                    ? $imageDesktop
                    : $imageMobile


                $hero.css('background-image', `url("${img}")`)
            })


            if (Foundation.MediaQuery.is('small only')) {
                $hero.css('background-image', `url("${$imageMobile}")`)
                return
            }

            $hero.css('background-image', `url("${$imageDesktop}")`)
        })
    }
}

export default ImageSize;
