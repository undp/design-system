class NavAnimation {

    constructor(container) {
        this.$body = $('body')
        this.$window = $(window)
        this.$container = container
        this.animationTriggerClass = 'animate-transition'
    }

    init() {
        this.$container.addClass(this.animationTriggerClass)

        // Full transition needs around 1.5s, delete dummy global menu after it's done
        setTimeout(() => {
            this.$container.find('.dummy-global-menu').remove()
        }, 1500)
    }
}

export default NavAnimation
