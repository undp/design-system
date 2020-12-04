class MultiSelect {
    constructor() {
        this.classOpen = 'open';
        this.dataSelectControl = '[data-select-control]';

        this.$window = $(window);
        this.$currentSelect = null;
        this.selects = $('[data-multi-select]');
        this.$containerFilter = $('[data-container-filters]');
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
                this.totalOptionsSelected();
            });
        })
    }


    listenerWindowClick() {
        this.$window.click(evt => {
            if (this.$currentSelect && !this.$currentSelect.is(evt.target) &&
                this.$currentSelect.has(evt.target).length === 0 && this.$currentSelect.hasClass(this.classOpen)) {
                this.closeAll();
            }
        });
    }

    toogleSelect() {
        this.$currentSelect.toggleClass(this.classOpen);
    }


    totalOptionsSelected() {
        const inputs = this.$currentSelect.find('input[type="checkbox"]');
        inputs.change((evt) => {
            const inputs = this.$currentSelect.find("input:checked");
            const total = inputs.length;
            const counter = this.$currentSelect.find(this.dataSelectControl + ' span');
            counter.text('(' + total + ')');
            if (total == 0) {
                counter.text('');
            }
            this.printContainerFilters();
        })
    }


    printContainerFilters() {
        this.$containerFilter.html('');
        this.selects.find("input:checked").each((i, input) => {
            const value = $(input).parent().text();
            this.$containerFilter.append('<a class="filter" href="#">' + value + '</a>')
        });
        this.$containerFilter.append('<a class="tag filter-clear" href="#" data-clear-all>Clear All</a>');
    }
}

export default MultiSelect;