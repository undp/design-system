

class Select {

    constructor(element) {
        this.$window = $(window)
        this.$currentSelect = $(element)
        this.$selectOptions = this.$currentSelect.find('[data-select-options]')

        this.value = null
        this.activeClass = 'active'
        this.expandedClass = 'expanded'
        this.selectedOptionSelector = '[data-select-open]'
    }

    init() {
        this.bindEvents()
        this.setSelectOptionListener()
    }

    bindEvents() {
        this.$window.click(ev => this.handleWindowClick(ev))
        this.$currentSelect.click(ev => this.handleSelectClick(ev))
    }

    handleSelectClick(ev) {
        ev.stopImmediatePropagation() // Only trigger once at a time
        this.$selectOptions.toggleClass(this.activeClass)
        this.$currentSelect.toggleClass(this.expandedClass)
    }

    handleWindowClick(ev) {
        const isActive = this.$currentSelect.find('.active').length > 0
        const clickedOutside = !this.$currentSelect.is(ev.target) & this.$currentSelect.has(ev.target).length === 0

        if (clickedOutside && isActive) this.close()
    }

    setSelectOptionListener() {
        const $options = this.$currentSelect.find('.option')
        const $selectedOption = this.$currentSelect.find(this.selectedOptionSelector)

        $options.click(ev => {
            ev.stopImmediatePropagation()
            this.value = $(ev.currentTarget).find('label').text();

            this.close()
            $selectedOption.html(this.value);
        })
    }

    close() {
        this.$selectOptions.removeClass(this.activeClass)
    }
}

export default Select;
