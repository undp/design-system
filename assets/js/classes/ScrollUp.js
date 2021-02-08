

class ScrollUp {
    constructor(container) {
        this.$window = $(window)
        this.$container = $(container)
        this.$navigation = $('[data-navigation]')
        this.$scrollBtn = this.$container.find('[data-scroll-btn]')

        this.classes = {
            visible: 'visible'
        }
    }

    init() {
        console.log('init')
        this.bindEvents()
    }

    bindEvents() {
        this.$scrollBtn.click(() => this.scrollTop())
        this.$window
            .resize(() => this.handleStickyToggle())
            .scroll(() => this.handleStickyToggle())
    }

    unbindEvents() {
        this.$scrollBtn.off('click')
        this.$window.off('resize, scroll')
        this.unstick()
    }

    handleStickyToggle() {
        const topThresh = this.$window.scrollTop() + this.$navigation.height()
        const shouldStick = topThresh > this.$container.offset().top

        console.log('handleStickyToggle.topThresh::', topThresh)
        console.log('handleStickyToggle.this.$container.offset().top::', this.$container.offset().top)
        console.log('handleStickyToggle.shouldStick::', shouldStick)

        shouldStick ? this.stick() : this.unstick()
    }

    stick() {
        this.$scrollBtn.addClass(this.classes.visible)
    }

    unstick() {
        this.$scrollBtn.removeClass(this.classes.visible)
    }

    scrollTop() {
        $("html, body").animate({
            scrollTop: this.$container.offset().top - (this.$navigation.height() * 1.5)
        }, 500)
    }
}


export default ScrollUp
