let _ = require('lodash')


class ImageSize {
    constructor() {
        this.$hero = $('.hero');
        this.$imageDesktop = this.$hero.data('desktop-image');
        this.$imageMobile = this.$hero.data('mobile-image');
        this.$window = $(window);
    }

    init() {
        this.listenerWindow();
    }

    listenerWindow() {

        this.$hero.css('background', `url("${this.$imageDesktop}") center 0 / cover no-repeat`)

        if (Foundation.MediaQuery.is('small only')) {
            this.$hero.css('background', `url("${this.$imageMobile}") center 0 / cover no-repeat`)
        }


        this.$window.on('changed.zf.mediaquery', () => {

            const img = Foundation.MediaQuery.atLeast('medium')
                ? this.$imageDesktop
                : this.$imageMobile


            this.$hero.css('background', `url("${img}") center 0 / cover no-repeat`)
        })

    }
}

export default ImageSize;
