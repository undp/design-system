let _ = require('lodash')


class ImageSize {
    constructor() {
        this.$hero = $('.hero');
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

            if (!($imageMobile && $imageDesktop)) return


            this.$window.on('changed.zf.mediaquery', () => {

                const img = Foundation.MediaQuery.atLeast('medium')
                    ? $imageDesktop
                    : $imageMobile


                $hero.css('background', `url("${img}") center 0 / cover no-repeat`)
            })


            if (Foundation.MediaQuery.is('small only')) {
                $hero.css('background', `url("${$imageMobile}") center 0 / cover no-repeat`)
                return
            }

            $hero.css('background', `url("${$imageDesktop}") center 0 / cover no-repeat`)
        })
    }
}

export default ImageSize;
