let _ = require('lodash')
class ImageSize {
    constructor() {
        this.$hero = $('.hero');
        this.$imageDesktop = this.$hero.data('desktop-hero');
        this.$imageMobile = this.$hero.data('mobile-hero');
        this.$window = $(window);
    }

    init() {
        this.listenerWindow();
    }

    listenerWindow() {

        this.$hero.css('background', `url("../../../assets/images/${this.$imageDesktop}") center 0 / cover no-repeat`)

        if (Foundation.MediaQuery.is('small only')) {
            this.$hero.css('background', `url("../../../assets/images/${this.$imageMobile}") center 0 / cover no-repeat`)

        }

        this.$window.resize(_.debounce(() => {

            let width = this.$window.width();

            if (width > 1100) {
                this.$hero.css('background', `url("../../../assets/images/${this.$imageDesktop}") center 0 / cover no-repeat`)
            }
            else {
                this.$hero.css('background', `url("../../../assets/images/${this.$imageMobile}") center 0 / cover no-repeat`)
            }
        },  300))
    }
}

export default ImageSize;
