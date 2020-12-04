class MultiSelect {
    constructor() {
        this.classOpen = 'open';
        this.dataSelectControl = '[data-select-control]';

        this.$window = $(window);
        this.$currentSelect = null;
        this.selects = $('[data-multi-select]');
    }

    init() {
        this.listenerSelects();
        this.listenerWindowClick();
    }

    closeAll() {
        this.selects.removeClass(this.classOpen);
    }

    listenerSelects() {
        this.selects.each((i, select) => {
            $(select).find(this.dataSelectControl).click(() => {
                this.$currentSelect = $(select);
                if (!this.$currentSelect.hasClass(this.classOpen)) {
                    this.closeAll();
                }
                this.toogleSelect();
            });
        })
    }


    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$currentSelect && !this.$currentSelect.is(evt.target) &&
                this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
                this.closeAll();
                console.log('window')
            }
        });
    }

    toogleSelect() {
        this.$currentSelect.toggleClass(this.classOpen);
    }
}

export default MultiSelect;