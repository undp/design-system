import Foundation from 'foundation-sites'


class NewsCentreFilter {

    constructor(container = '.news-centre-cards') {
        this.$window = $(window)
        this.$container = $(container)

        this.$navigation = $('[data-navigation]')
        this.$loadMore = this.$container.find('.load-more')
        this.$scrollUp = this.$container.find('.scroll-up')
        this.$cardsContainer = this.$container.find('.cards-results')
        // this.$searchInput = this.$container.find('[data-input-search]') TBD
        this.$activeFilters = this.$container.find('[data-active-filters]')
        this.$contentTypeFilter = this.$container.find('[data-content-type-filter]')

        this.filters = {
            s: '', // TBD
            contentTypes: []
        }
        this.matches = 0
        this.loadStep = 6 // Sets the number of cards to show on "load more"
        this.maxCards = 6
        this.hideClass = 'hide'
        this.stickyClass = 'sticky'
        this.showScrollButton = false
    }

    init() {
        this.bindEvents()
        // Display initial results according to the screen size
        this.matchResults(true)
    }

    bindEvents() {
        this.setScrollUpListeners()
        this.$loadMore.click(() => this.loadMore())
        this.$window.on('changed.zf.mediaquery', () => this.matchResults(true))
        this.$contentTypeFilter.on('change', 'input[type="checkbox"]', ev => this.handleMultiSelectChange(ev))
    }

    calculateCardsToShow() {
        this.hideScrollUpButton()
        this.loadStep = Foundation.MediaQuery.upTo('medium') ? 4 : 6
        this.maxCards = Foundation.MediaQuery.upTo('medium') ? 4 : 6
    }

    handleMultiSelectChange(ev) {
        ev.stopImmediatePropagation()

        const counter = this.$contentTypeFilter.find('[data-select-control] span')
        const inputs = this.$contentTypeFilter.find("input:checked")
        const totalFilters = inputs.length

        counter.text(`(${totalFilters})`)
        if (totalFilters === 0) counter.text('')

        this.showActiveFilters(inputs)
        this.updateFilters($(ev.currentTarget))
    }

    updateFilters(input) {
        const inputValue = input.val()

        if (input.is(':checked')) {
            this.filters.contentTypes.push(inputValue)
        }
        else {
            const index = this.filters.contentTypes.indexOf(inputValue)
            if (index > -1) {
                this.filters.contentTypes.splice(index, 1)
            }
        }
        this.matchResults(true)
    }

    matchResults(recalculate = false) {
        let results = []
        this.matches = 0 // Reset matches count
        const $cards = this.$cardsContainer.find('.card-item')

        $cards.addClass(this.hideClass)
        if (recalculate) this.calculateCardsToShow()

        $cards.each((i, card) => {
            const $card = $(card)
            const cType = $card.data('content-type')

            let match = !this.filters.contentTypes.length
                ? true // Fallback to match all items if no content-type selected
                : this.filters.contentTypes.indexOf(cType) > -1

            if (!match) return
            if (this.matches < this.maxCards) results.push(card)
            this.matches++
        })

        $(results).removeClass(this.hideClass)
        this.$loadMore.removeClass(this.hideClass)
        if (this.matches <= this.maxCards) this.$loadMore.addClass(this.hideClass)
    }

    showActiveFilters($checkedOptions) {
        this.$activeFilters.html('')

        if ($checkedOptions.length) {
            this.$activeFilters.append('<p class="tag uppercase">Active filters:</p>')

            $checkedOptions.each((i, input) => {
                const text = $(input).parent().text()
                const inputValue = $(input).val()
                this.$activeFilters.append(`
                    <a class="filter" href="#" data-remove-filter data-input-value="${inputValue}">${text}</a>
                `)
            })

            this.$activeFilters.append('<a class="tag filter-clear" data-close-all-select href="#">Clear All</a>')
            this.setRemoveFilterListener()
            this.setClearAllFiltersListener()
        }
    }

    setClearAllFiltersListener() {
        $('[data-close-all-select]').on('click', (ev) => {
            ev.preventDefault()
            this.$activeFilters.html('')

            this.$contentTypeFilter.find('input:checked').prop('checked', false)
            this.$contentTypeFilter.find('[data-select-control] span').text('')

            this.filters.contentTypes = []
            this.matchResults(true)
        })
    }

    setRemoveFilterListener() {
        $('[data-remove-filter]').on('click', (ev) => {
            ev.preventDefault()

            const $this = $(ev.currentTarget)
            const inputValue = $this.data('input-value')
            const $input = this.$contentTypeFilter.find(`input[value="${inputValue}"]`)
            $input.prop('checked', false)

            const updateSelectCounter = () => {
                const counter = $input.closest('[data-options]').siblings('[data-select-control]').find('span')
                const total = counter.text().match(/\d/g)
                counter.text(total && total > 1 ? `(${total.join("") - 1})` : '')
            }

            $this.remove()
            updateSelectCounter()
            if (!this.$contentTypeFilter.find('input:checked').length) {
                this.$activeFilters.html('')
            }

            this.updateFilters($input)
        })
    }

    setScrollUpListeners() {
        let bottom
        let pageBottom
        let unstickPosition
        let scrollUpBottom = 22.5 // The distance between the button and the page bottom
        const top = this.$container.offset().top

        this.$scrollUp.click(() => {
            $("html, body").animate({
                scrollTop: top - (this.$navigation.height() * 1.5)
            }, 800)
        })

        this.$window.scroll(() => {
            if (!this.showScrollButton) return

            bottom = top + this.$container.height()
            unstickPosition = bottom + scrollUpBottom
            pageBottom = this.$window.scrollTop() + this.$window.height()
            // Add the button height to the unstickPosition for tablet/mobile
            unstickPosition += Foundation.MediaQuery.upTo('medium')
                ? this.$scrollUp.height()
                : 0

            // Unstick the button if we're at the end of the section
            pageBottom >= unstickPosition
                ? this.$scrollUp.removeClass('sticky')
                : this.$scrollUp.addClass('sticky')

            // Hide button if we reach the top of the component
            this.$window.scrollTop() < top
                ? this.$scrollUp.addClass(this.hideClass)
                : this.$scrollUp.removeClass(this.hideClass)
        })
    }

    loadMore() {
        this.maxCards += this.loadStep
        this.matchResults()
        this.showScrollUpButton()
    }

    hideScrollUpButton() {
        this.showScrollButton = false
        this.$scrollUp.addClass(this.hideClass)
    }

    showScrollUpButton() {
        this.showScrollButton = true
        this.$scrollUp.addClass('sticky')
        this.$scrollUp.removeClass(this.hideClass)
    }
}


export default NewsCentreFilter
