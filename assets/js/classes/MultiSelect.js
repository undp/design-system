class MultiSelect {
    constructor() {
        this.classOpen = 'open';
        this.classHide = 'hide';
        this.dataSelectControl = '[data-select-control]';

        this.$window = $(window);
        this.$currentSelect = null;
        this.$searchInput = $('[data-input-search]');
        this.$countryList = $('[data-country-item]');
        this.selects = $('[data-multi-select]');
        this.$containerFilter = $('[data-container-filters]');
        this.filters = {
            region: [],
            office: [],
            inputSearch: '',
        };
    }

    init() {
        this.listenerSelects();
        this.listenerWindowClick();
        this.listenerInputSearch();
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
            evt.stopImmediatePropagation();
            console.log($(evt.currentTarget));
            const includeOrRemoveFilter = () => {
                const inputType = $(evt.currentTarget).data('type');
                const inputValue = $(evt.currentTarget).val();

                if ($(evt.currentTarget).is(":checked")) {
                    this.filters[inputType].push(inputValue)
                } else {
                    const index = this.filters[inputType].indexOf(inputValue);
                    if (index > -1) {
                        this.filters[inputType].splice(index, 1);
                    }
                }
                this.search();
            };
            includeOrRemoveFilter();

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
            this.$containerFilter.append('<a class="filter" href="#" data-close-filter data-input-value="' + inputValue + '">' + text + '</a>')
        });
        this.$containerFilter.append('<a class="tag filter-clear" data-close-all-select href="#" data-clear-all>Clear All</a>');
        this.listenerCloseFilter()
        this.listenerClearAllFilters();
    }

    listenerCloseFilter() {
        $('[data-close-filter]').on('click', (evt) => {
            evt.preventDefault();
            const inputValue = $(evt.currentTarget).data('input-value');
            const input = $('input[value="' + inputValue + '"]');
            input.prop('checked', false);
            const updateSelectCounter = () => {
                const counter = input.closest('[data-options]').siblings(this.dataSelectControl).find('span');
                const total = counter.text().match(/\d/g);
                counter.text(total && total > 1 ? `(${total.join("") - 1})` : '');
            };
            updateSelectCounter();
            $(evt.currentTarget).remove();
            if (!this.selects.find('input[type="checkbox"]').length) {
                this.$containerFilter.html('')
            }
            this.search();
        });
    }

    listenerClearAllFilters() {
        $('[data-close-all-select]').on('click', (evt) => {
            evt.preventDefault();
            this.$containerFilter.html('');
            this.selects.find("input:checked").prop('checked', false);

            this.selects.each((i, select) => {
                const counter = $(select).find(this.dataSelectControl + ' span');
                counter.text('');
            });
            this.filters.region = [];
            this.filters.office = [];
            this.search();
        });
    }

    listenerInputSearch() {
        this.$searchInput.keyup(event => {
            this.filters.inputSearch = this.$searchInput.val().toLowerCase()
            console.log(this.filters);
            this.search();
        });
    }

    search() {
        console.log('filters:', this.filters);
        if (this.filters.inputSearch.length > 0 ||
            this.filters.office.length > 0 ||
            this.filters.region.length > 0) {
            let filtered = this.$countryList.filter((index, node) => {
                const text = $(node).find('.country').text().toLowerCase();
                return (this.filters.inputSearch.length > 0 && text.includes(this.filters.inputSearch.toLowerCase()) ||
                    this.filters.region.filter(value => text.includes(value.toLowerCase())).length > 0 ||
                    this.filters.office.filter(value => text.includes(value.toLowerCase())).length > 0)
            });
            this.$countryList.addClass(this.classHide);
            filtered.removeClass(this.classHide);
        } else {
            this.$countryList.removeClass(this.classHide);
        }

    }
}

export default MultiSelect;