class MultiSelect {
    constructor(element) {
        this.classOpen = 'open';
        this.dataSelectControl = '[data-select-control]';

        this.$window = $(window);
        this.$currentSelect = $(element);
    }

    init() {
        this.addListener();
        this.listenerWindowClick();
    }

    addListener() {
        this.$currentSelect.find(this.dataSelectControl).click((event) => {
            this.toggleSelect();
        });
    }

    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$currentSelect && !this.$currentSelect.is(evt.target) &&
                this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
                this.$currentSelect.removeClass(this.classOpen);
            }
        });
    }

    toggleSelect() {
        this.$currentSelect.toggleClass(this.classOpen);
    }
}

export default MultiSelect;
