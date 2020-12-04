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
        this.$containerFilter.append('<p class="tag uppercase">Active filters</p>');
        this.selects.find("input:checked").each((i, input) => {
            const text = $(input).parent().text();
            const inputValue = $(input).val();
            this.$containerFilter.append('<a class="filter" href="#" data-close-filter data-input-value="'+inputValue+'">' + text + '</a>')
        });
        this.$containerFilter.append('<a class="tag filter-clear" data-close-all-select href="#" data-clear-all>Clear All</a>');
        this.listenerCloseFilter()
        this.listenerClearAllFilters();
    }

    listenerCloseFilter() {
        $('[data-close-filter]').on('click', (evt) => {
            evt.preventDefault();
            const inputValue = $(evt.currentTarget).data('input-value');
            $('input[value="'+inputValue+'"]').prop('checked', false);
            $(evt.currentTarget).remove();
            if (!this.selects.find('input[type="checkbox"]').length) {
                this.$containerFilter.html('')
            }
        });
    }

    listenerClearAllFilters() {
        $('[data-close-all-select]').on('click', (evt) => {
            evt.preventDefault();
            this.$containerFilter.html('');
            this.selects.find("input:checked").prop('checked', false);
        });
    }
}

export default MultiSelect;