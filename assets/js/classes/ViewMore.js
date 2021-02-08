

class ViewMore {
    constructor(container, loadStep = 6) {
        this.$container = $(container)
        this.$navigation = $('[data-navigation]')
        this.$viewMore = this.$container.find('[data-view-more-btn]')
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
        this.$viewMore.on('click', () => this.viewMore())
    }

    reset() {
        this.loadStep = 6
        this.maxCards = 6
        this.update()
    }

    update() {
        let matches = 0
        let showing = []

        this.$cards.addClass(this.hideClass)
        this.$viewMore.removeClass(this.hideClass)

        this.$cards.each((i, card) => {
            if (matches >= this.maxCards) return false

            matches++
            showing.push(card)
        })

        $(showing).removeClass(this.hideClass)
        if (matches === this.totalCards) this.$viewMore.addClass(this.hideClass)
    }

    viewMore() {
        this.maxCards += this.loadStep
        this.update()
    }

    scrollTop() {
        $("html, body").animate({
            scrollTop: this.$container.offset().top - (this.$navigation.height() * 1.5)
        }, 500)
    }
}


export default ViewMore
