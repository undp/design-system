import throttle from "lodash/throttle";


class NavigationProgress {

    constructor(container = '#navigation-progress') {
        this.$window = $(window)
        this.$footer = $('.footer')
        this.$progressBar = $(container)
        this.$progress = this.$progressBar.find('.progress')

        this.$scrollEnd = $('[data-progress-end]')

        this.progress = 0
        this.scrollEnd = 0
        this.scrollPosition = 0
        this.scrollThreshold = 0
        this.progressBarWidth = 0
    }

    init() {
        this.bindEvents()
        this.setInitialParameters()
    }

    bindEvents() {
        this.setScrollMonitor()
        this.setResizeEventListener()
    }

    setProgress(scrollTop) {
        this.scrollPosition = scrollTop + this.scrollThreshold
        this.progress = this.scrollPosition * 100 / this.scrollEnd

        if (scrollTop === 0) this.progress = 0

        this.$progress.css('width', this.progress / 100 * this.progressBarWidth)
    }

    setInitialParameters() {
        this.progressBarWidth = this.$progressBar.width()
        this.scrollThreshold = this.$window.height() * .9
        this.scrollEnd = this.$scrollEnd.length ? this.$scrollEnd.offset().top : this.$footer.offset().top
    }

    setScrollMonitor() {
        this.$window.on('scroll', throttle(() => this.setProgress(this.$window.scrollTop()), 50))
    }

    setResizeEventListener() {
        this.$window.on('resize', () => {
            this.setInitialParameters()
            this.$window.trigger('scroll')
        })
    }
}


export default NavigationProgress
