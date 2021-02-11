import { ScrollTrigger } from "gsap/ScrollTrigger"


class ViewMore {
    constructor(container, loadStep = 6) {
        this.$container = $(container)
        this.$viewMore = this.$container.find('[data-view-more-btn]')
        this.$cardsContainer = this.$container.find('.cards-container')
        this.$cards = this.$cardsContainer.find('.card-item')

        this.classes = {
            hide: 'hide',
            invisible: 'visibility-hidden'
        }
        this.classes.hide = 'hide'
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

    reset(loadStep = 6) {
        this.loadStep = loadStep
        this.maxCards = loadStep
        this.update()
    }

    update() {
        let matches = 0
        let showing = []

        this.$cards.addClass(this.classes.hide)
        this.$viewMore.removeClass(this.classes.invisible)

        this.$cards.each((i, card) => {
            if (matches >= this.maxCards) return false

            matches++
            showing.push(card)
        })

        $(showing).removeClass(this.classes.hide)
        if (matches === this.totalCards) this.$viewMore.addClass(this.classes.invisible)

        ScrollTrigger.refresh() // Refresh scrollTrigger in case animated elements are pushed
    }

    viewMore() {
        this.maxCards += this.loadStep
        this.update()
    }
}


export default ViewMore
