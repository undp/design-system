import throttle from "lodash/throttle";


class NavigationProgress {

    constructor(container = '#navigation-progress') {
        this.$doc = $(document)
        this.$window = $(window)
        this.$footer = $('.footer')
        this.$progressBar = $(container)
        this.$navigation = $('[data-navigation]')
        this.$progress = this.$progressBar.find('.progress')

        this.$featuredStories = $('.featured-stories')

        this.progress = 0
        this.totalDistance = 0
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
        this.progress = this.scrollPosition * 100 / this.totalDistance

        if (scrollTop === 0) this.progress = 0

        this.$progress.css('width', this.progress / 100 * this.progressBarWidth)
    }

    setInitialParameters() {
        this.scrollThreshold = this.$window.height()
        this.progressBarWidth = this.$progressBar.width()
        this.totalDistance = this.$doc.height() - this.$navigation.height() - this.$footer.height()

        // Skip this section from the progress
        if (this.$featuredStories.length) this.totalDistance -= this.$featuredStories.height()
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
