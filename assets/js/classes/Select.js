

class Select {

    constructor() {
        this.$window = $(window)
        this.$currentSelect = null
        this.$selects = $('[data-select]')

        this.activeClass = 'active'
        this.optionsSelector = '[data-select-options]'
        this.selectedOptionSelector = '[data-select-open]'
    }

    init() {
        this.bindEvents()
    }

    bindEvents() {
        this.$window.click(ev => this.handleWindowClick(ev))
        this.$selects.click(ev => this.handleSelectClick(ev))
    }

    handleSelectClick(ev) {
        ev.stopImmediatePropagation() // Only trigger once at a time

        const $select = $(ev.currentTarget)
        const $options = $select.find(this.optionsSelector)
        const isActive = $options.hasClass(this.activeClass)

        this.closeAll()
        if (isActive) {
            // If the clicked select was initially active,
            // set $currentSelect to null and prevent the rest of the code from firing
            this.$currentSelect = null
            return
        }

        this.$currentSelect = $select
        this.setSelectOptionListener()
        $options.addClass(this.activeClass)
    }

    handleWindowClick(ev) {
        if (!this.$currentSelect) {
            return false
        }

        const isActive = this.$selects.find('.active').length > 0
        const clickedOutside = !this.$selects.is(ev.target) & this.$selects.has(ev.target).length === 0

        if (clickedOutside && isActive) this.closeAll()
    }

    setSelectOptionListener() {
        let value = null
        const $options = this.$currentSelect.find('.option')
        const $selectedOption = this.$currentSelect.find(this.selectedOptionSelector)

        $options.click(ev => {
            ev.stopImmediatePropagation()
            value = $(ev.currentTarget).find('label').text();

            this.closeAll()
            $selectedOption.html(value);
        })
    }

    closeAll() {
        this.$selects.find('.option').off('click') // Unset select options click events
        this.$selects.find(this.optionsSelector).removeClass(this.activeClass)
    }
}

export default Select;
