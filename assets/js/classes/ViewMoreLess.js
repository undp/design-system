

class ViewMoreLess {
    constructor(container, loadStep = 6) {
        this.$container = $(container)
        this.$viewMore = this.$container.find('[data-view-more]')
        this.$viewLess = this.$container.find('[data-view-less]')
        this.$cardsContainer = this.$container.find('.cards-container')
        this.$cards = this.$cardsContainer.find('.card-item')

        this.hideClass = 'hide'
        this.loadStep = loadStep
        this.maxCards = loadStep
        this.totalCards = this.$cards.length
    }

    init() {
        this.update()
        this.bindEvents()
    }

    bindEvents() {
        this.$viewLess.on('click', () => this.viewLess())
        this.$viewMore.on('click', () => this.viewMore())
    }

    reset() {
        this.loadStep = 6
        this.maxCards = 6
        this.update()
    }

    update(scrollToBottom = false) {
        let matches = 0
        let showing = []

        this.$cards.addClass(this.hideClass)
        this.$viewLess.removeClass(this.hideClass)
        this.$viewMore.removeClass(this.hideClass)

        this.$cards.each((i, card) => {
            if (matches >= this.maxCards) return false

            matches++
            showing.push(card)
        })

        $(showing).removeClass(this.hideClass)
        if (matches <= this.loadStep) this.$viewLess.addClass(this.hideClass)
        if (matches === this.totalCards) this.$viewMore.addClass(this.hideClass)

        if (scrollToBottom) this.scrollToBottom()
    }

    viewMore() {
        this.maxCards += this.loadStep
        this.update()
    }

    viewLess() {
        this.maxCards -= this.loadStep
        this.update(true)
    }

    scrollToBottom() {
        const containerBottom = this.$container.offset().top + this.$container.height()
        const scrollTop = containerBottom - ($(window).height() * .98)

        $("html, body").animate({scrollTop: scrollTop}, 500)
    }
}


export default ViewMoreLess
