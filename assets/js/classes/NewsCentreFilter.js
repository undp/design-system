import Foundation from 'foundation-sites'
import ScrollUp from "./ScrollUp";


class NewsCentreFilter {

    constructor(container = '.news-centre-cards') {
        this.$window = $(window)
        this.$container = $(container)

        this.$loadMore = this.$container.find('.load-more')
        this.$cardsContainer = this.$container.find('.cards-results')
        this.$activeFilters = this.$container.find('[data-active-filters]')
        this.$contentTypeFilter = this.$container.find('[data-content-type-filter]')

        this.filters = {
            s: '', // TBD
            contentTypes: []
        }
        this.classes = {
            hide: 'hide',
            invisible: 'visibility-hidden'
        }
        this.matches = 0
        this.loadStep = 6 // Sets the number of cards to show on "load more"
        this.maxCards = 6
    }

    init() {
        this.bindEvents()
        // Display initial results according to the screen size
        this.matchResults(true)
    }

    bindEvents() {
        this.$loadMore.click(() => this.loadMore())
        this.$window.on('changed.zf.mediaquery', () => this.matchResults(true))
        this.$contentTypeFilter.on('change', 'input[type="checkbox"]', ev => this.handleMultiSelectChange(ev))
    }

    calculateCardsToShow() {
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

        $cards.addClass(this.classes.hide)
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

        $(results).removeClass(this.classes.hide)
        this.$loadMore.removeClass(this.classes.invisible)
        if (this.matches <= this.maxCards) this.$loadMore.addClass(this.classes.invisible)
    }

    showActiveFilters($checkedOptions) {
        this.$activeFilters.html('')
        const $tagsContainer = $('<div class="tags-container">')

        if ($checkedOptions.length) {
            this.$activeFilters.append('<p class="tag uppercase gray">Active filters:</p>')

            $checkedOptions.each((i, input) => {
                const text = $(input).parent().text()
                const inputValue = $(input).val()
                $tagsContainer.append(`
                    <a class="filter" href="#" data-remove-filter data-input-value="${inputValue}">${text}</a>
                `)
            })

            this.$activeFilters.append($tagsContainer)
            this.$activeFilters.append('<a class="tag filter-clear caps" data-close-all-select href="#">Clear All</a>')
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

    loadMore() {
        this.maxCards += this.loadStep
        this.matchResults()
    }
}


export default NewsCentreFilter
